import CONFIG from '../config';
import Phaser from '../lib/phaser';
import momentum from '../utils/momentum';
import updateScore from '../utils/update-score';
import createScoreText from '../ui/create-score-text';
const { Vector } = Phaser.Physics.Matter.Matter;

export interface IDestructionOptions {
  steps?: number;     // сколько текстур сменится от нетронутого объекта до полностью
  momentum?: number; // максимальный импульс, после которого объект разрушается. при каждом ударе состояние объекта ухудшается
  score?: {
    step?: number; // кол-во очков, начисляемых за этапы разрушения
    destroy?: number; // кол-во очков, начисляемых за полное разрушение объекта
  };
  particles?: any; // частицы, которые создадутся после уничтожения объекта
}

// Entity — это любой физический объект с текстурой
// создаёт спрайт в Phaser и объединяет его с физическим телом,
// разрушения описаны также здесь. 
// 
// PS: не Body, а Entity чтобы не путаться с Matter
export default class Entity {
  type: string;
  scene: any;
  sprite: any;
  body: any; // shortcut for sprite.body
  textureKey: string;

  // есть только если предмет можно разрушить
  destructionSteps: number; // сколько текстур меняется при разрушении
  destructionParticlesConfig: any; // конфиг частиц, которые появятся при разрушении
  destructionMomentum: number; // максимальное «здоровье» объекта
  destructionScores: any; // сколько очков начисляется за разрушения
  currentMomentum: number; // «здоровье» объекта
  currentDestructionStep: number = 1; // текущий этап разрушения объекта
  minimalMomentum: number = 200; // если сила меньше этого значения, то это погрешность и не уменьшаем здоровье

  constructor(
    scene: any,
    x: number,
    y: number,
    type: string,
    textureKey: string,
    body: any,
    destructionOptions: IDestructionOptions = null
  ) {
    this.scene = scene;
    this.type = type;
    this.body = body;
    this.textureKey = textureKey; // если объект разрушается, то у него ставим нулевой этап разрушения
    
    // если объект разрушается, то у него первая текстура типа entity-1
    // а если нет, то просто entity. поэтому и решаем.
    let startTextureKey = (!destructionOptions || destructionOptions.steps === 1) ? textureKey : textureKey + '-1';

    this.sprite = this.scene.matter.add.sprite(0, 0, startTextureKey, 0);
    this.sprite.entityInstance = this;
    this.sprite.depth = 10;

    // events
    this.sprite.on('destroy', this.onDestroy.bind(this));
    this.sprite.on('update', this.onDestroy.bind(this));

    this.sprite
      .setExistingBody(this.body)
      .setPosition(x, y)
      .setSizeToFrame(this.sprite.frame)
      .setTexture(startTextureKey);

    console.log(this.textureKey, this.body.mass);

    if (destructionOptions) {
      this.destructionSteps = destructionOptions.steps;
      this.destructionScores = destructionOptions.score;
      this.destructionMomentum = destructionOptions.momentum;
      this.destructionParticlesConfig = destructionOptions.particles;
      this.currentMomentum = this.destructionMomentum;

      if (this.destructionMomentum && !CONFIG.EDITOR_MODE) {
        this.scene.matterCollision.addOnCollideStart({
          objectA: this.sprite,
          callback: this.onCollideStart,
          context: this
        });
      }
    }
  } 

  onDestroy(sprite): void {

  }

  onCollideStart(e): void {
    if (this.body.isStatic === true) {
      return;
    }

    let m = momentum(e.bodyA, e.bodyB);

    if (m < this.minimalMomentum) {
      return;
    }

    // console.log(m);

    this.currentMomentum -= m;

    if (this.currentMomentum > 0 && this.destructionSteps > 1) {
      let destructionStep = Math.ceil(this.destructionSteps - (this.currentMomentum / this.destructionMomentum * this.destructionSteps));

      if (destructionStep <= 0) {
        destructionStep = 1;
      }

      if (this.currentDestructionStep !== destructionStep) {
        this.currentDestructionStep = destructionStep;

        if (this.destructionScores) {
          updateScore(this.scene, this.destructionScores.step);
          createScoreText(this.scene, this, this.destructionScores.step);
        }
      }

      // будет лагать, если каждое столкновение переставлять текстуру?
      // если да, то менять только при изменении порога.
      this.sprite.setTexture(`${ this.textureKey }-${ destructionStep }`);
    } else if (this.currentMomentum <= 0) {
      if (this.destructionParticlesConfig) {
        this.createDestroyParticles();
      }

      this.currentDestructionStep = this.destructionSteps;

      if (this.destructionScores) {
        updateScore(this.scene, this.destructionScores.destroy);
        createScoreText(this.scene, this, this.destructionScores.destroy);
      }

      this.sprite.destroy(); // это удаляет и физическое тело
    }
  }

  getBodyBounds() {
    const { min, max } = this.body.bounds;

    return {
      w: max.x - min.x,
      h: max.y - min.y
    }
  }

  createDestroyParticles() {
    let particle = this.scene.add.sprite(this.sprite.x, this.sprite.y, this.destructionParticlesConfig.name)
      .setScale(this.sprite.scaleX, this.sprite.scaleY);

    this.scene.anims.create({
      key: 'destroy',
      frames: this.scene.anims.generateFrameNumbers(this.destructionParticlesConfig.name),
      frameRate: this.destructionParticlesConfig.frameRate,
      hideOnComplete: true
    });

    particle.anims.play('destroy');
  }
}