import Phaser from '../lib/phaser';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies } = Phaser.Physics.Matter.Matter;

// @debug
// this class is exists for debug purposes
export default class WallStack {
  constructor(scene, x, y, w, h, r, c, options = {}) {
    this.scene = scene;

    this.stack = this.scene.matter.add.stack(x, y, r, c, 0, 0, (x, y) => {
      return Bodies.rectangle(x, y, w, h, options);
    });

    // this.sprite
    //   .setExistingBody(this.body)
      // .setPosition(x, y);
  }

  scene: any;
  stack: any;
}