import Phaser from '../lib/phaser';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Vector } = Phaser.Physics.Matter.Matter;

export default class Wall {
  constructor(scene, x, y, w, h, options = {}) {
    this.scene = scene;
    this.sprite = this.scene.matter.add.sprite(0, 0, 'wall-100', 0);

    this.body = Bodies.rectangle(0, 0, w, h, options);

    this.body.gameParent = this;

    console.log(this);

    // чтобы размер тела совпадал с размером спрайта
    this.sprite.displayWidth = w;
    this.sprite.displayHeight = h;

    this.sprite
      .setExistingBody(this.body)
      .setPosition(x, y);

    this.health = 1;

    console.log(this.body);

    // TODO: я не знаю насколько это правильная идея засовывать такой триггер в каждый объект...
    this.scene.matterCollision.addOnCollideStart({
      objectA: this.sprite,
      callback: (e) => {
        if (this.body.isStatic === true) {
          return;
        }

        const { bodyA, bodyB, gameObjectA, gameObjectB, pair } = e;

        let bodyAMass = (bodyA.mass !== Infinity) ? bodyA.mass : 1; 
        let bodyBMass = (bodyB.mass !== Infinity) ? bodyB.mass : 1; 

        let bodyAMomentum = Vector.mult(bodyA.velocity, bodyAMass);
        let bodyBMomentum = Vector.mult(bodyB.velocity, bodyBMass);

        let relativeMomentum = Vector.sub(bodyAMomentum, bodyBMomentum);
        let impulse = Vector.magnitude(relativeMomentum);

        console.log(impulse);

        this._currentImpulse -= impulse;

        // отрефакторить для генерирования этого. нужны этапы смерти и текстуры для них автоматом.
        if (this._currentImpulse <= this._impulseThreshold / 2 && this._currentImpulse > 0) {
          this.sprite.setTexture('wall-50');
        } else if (this._currentImpulse <= 0) {
          this.createDestructionParticles();
          this.sprite.destroy(); // это удаляет и физическое тело
        }
      },
      context: this
    });
  }

  _currentImpulse = 3000;
  _impulseThreshold = 3000;
  scene: any;
  sprite: any;
  body: any;
  health: number;
  destructionParticles: any;
  isDestroyable: boolean = true;

  private createDestructionParticles() {
    this.destructionParticles = this.scene.add.particles('wall-destruction-particle'); // все имена в конфиг

    this.destructionParticles.createEmitter({
      alpha: { start: 1, end: 0 },
      scale: { start: 0.5, end: 1 },
      speed: 20,
      accelerationY: -200,
      lifespan: { min: 500, max: 750 },
      blendMode: 'NORMAL',
      frequency: 250,
      maxParticles: 3,
      x: this.sprite.x,
      y: this.sprite.y
    });
  }
}