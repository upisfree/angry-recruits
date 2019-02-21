import Phaser from '../lib/phaser';
import momentum from '../utils/momentum';
const { Vector } = Phaser.Physics.Matter.Matter;

export interface DestructionOptions {
  steps: number;     // сколько текстур сменится от нетронутого объекта до полностью
  momentum: number; // максимальный импульс, после которого объект разрушается. при каждом ударе состояние объекта ухудшается
  particles?: any; // частицы, которые создадутся после уничтожения объекта
}

// Enity — это любой физический объект с текстурой
// создаёт спрайт в Phaser и объединяет его с физическим телом,
// разрушения описаны также здесь. 
// 
// PS: не Body, а Enity чтобы не путаться с Matter
export default class Enity {
  scene: any;
  sprite: any;
  body: any; // shortcut for sprite.body
  textureKey: string;

  // есть только если предмет можно разрушить
  destructionSteps: number; // сколько текстур меняется при разрушении
  destructionParticlesConfig: any; // конфиг частиц, которые появятся при разрушении
  destructionMomentum: number; // максимальное «здоровье» объекта
  currentMomentum: number; // «здоровье» объекта

  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: DestructionOptions = null
  ) {
    // console.log(scene);

    this.scene = scene;
    this.body = body;
    this.textureKey = textureKey; // если объект разрушается, то у него ставим нулевой этап разрушения
    
    // если объект разрушается, то у него первая текстура типа enity-1
    // а если нет, то просто enity. поэтому и решаем.
    let startTextureKey = (!destructionOptions || destructionOptions.steps === 1) ? textureKey : textureKey + '-1';

    this.sprite = this.scene.matter.add.sprite(0, 0, startTextureKey, 0);
    this.sprite.enityInstance = this;

    // events
    this.sprite.on('destroy', this.onDestroy.bind(this));

    // чтобы размер тела совпадал с размером спрайта
    const { w, h } = this.getBodyBounds();
    this.sprite.displayWidth = w;
    this.sprite.displayHeight = h;

    this.sprite
      .setExistingBody(this.body)
      .setPosition(x, y);

    // console.log(this.textureKey, this.body.mass);

    if (destructionOptions) {
      this.destructionSteps = destructionOptions.steps;
      this.destructionParticlesConfig = destructionOptions.particles;
      this.destructionMomentum = destructionOptions.momentum;
      this.currentMomentum = this.destructionMomentum;

      this.scene.matterCollision.addOnCollideStart({
        objectA: this.sprite,
        callback: this.onCollideStart,
        context: this
      });
    }
  }

  onDestroy(sprite): void {

  }

  private onCollideStart(e): void {
    if (this.body.isStatic === true) {
      return;
    }

    // console.log(e);

    let m = momentum(e.bodyA, e.bodyB);

    // console.log(m);

    this.currentMomentum -= m;

    if (this.currentMomentum > 0 && this.destructionSteps > 1) {
      let destructionStep = Math.ceil(this.destructionSteps - (this.currentMomentum / this.destructionMomentum * this.destructionSteps));

      // будет лагать, если каждое столкновение переставлять текстуру?
      // если да, то менять только при изменении порога.
      this.sprite.setTexture(`${ this.textureKey }-${ destructionStep }`);
    } else if (this.currentMomentum <= 0) {
      let particles = this.scene.add.particles(`${ this.textureKey }-destruction-particle`);

      this.destructionParticlesConfig.x = this.sprite.x;
      this.destructionParticlesConfig.y = this.sprite.y;

      particles.createEmitter(this.destructionParticlesConfig);

      this.sprite.destroy(); // это удаляет и физическое тело
    }
  }

  private getBodyBounds() {
    const { min, max } = this.body.bounds;

    return {
      w: max.x - min.x,
      h: max.y - min.y
    }
  }
}