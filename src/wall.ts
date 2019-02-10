import * as Phaser from 'phaser';

export default class Wall {
  constructor(scene, x, y, w, h) {
    const { Body, Bodies } = Phaser.Physics.Matter.Matter;

    this.scene = scene;
    this.sprite = scene.matter.add.sprite(0, 0, 'player', 0);

    this.body = Bodies.rectangle(0, 0, w, h);

    // console.log(this.sprite);

    this.sprite.displayWidth = w;
    this.sprite.displayHeight = h;

    this.sprite
      .setExistingBody(this.body)
      .setPosition(x, y);
  }

  scene: any;
  sprite: any;
  body: any;
}