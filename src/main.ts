import * as Phaser from 'phaser';
import phaserConfig from './phaser-config';
import ASSETS from './assets';
import Wall from './wall';

// main class
export default class AngryRecruits {
  constructor() {
    phaserConfig.scene.preload = this.beforePhaserInit;
    phaserConfig.scene.create = this.afterPhaserInit;

    this.game = new Phaser.Game(phaserConfig);
  }

  game: Phaser.Game;

  beforePhaserInit = beforePhaserInit;
  afterPhaserInit = afterPhaserInit;
}

export function beforePhaserInit(): void {
  for (var k in ASSETS.IMAGES) {
    this.load.image(k, ASSETS.IMAGES[k]);
  }
}

export function afterPhaserInit(): void {
  this.matter.world.setBounds();
  this.matter.add.mouseSpring();

  let wall = new Wall(this, 100, 0, 100, 100);


  // this.matter.add.image(400, 550, 'platform', null, { isStatic: true });
}

var game;

// start
window.onload = () => {
  game = new AngryRecruits();
};