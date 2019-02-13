import Phaser from '../lib/phaser';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies } = Phaser.Physics.Matter.Matter;

export default class Wall {
  constructor(scene, x, y, w, h, options = {}) {
    this.scene = scene;
    this.sprite = scene.matter.add.sprite(0, 0, 'player', 0);

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
  }

  scene: any;
  sprite: any;
  body: any;
  health: number;
}