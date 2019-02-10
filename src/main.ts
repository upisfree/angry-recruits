import * as Phaser from 'phaser';
import phaserConfig from './phaser-config';
import tick from './tick';
import ASSETS from './assets';
import Wall from './wall';
import Level from './level';
const { Vector } = Phaser.Physics.Matter.Matter.Vector;

// main class
export default class AngryRecruits {
  constructor() {
    phaserConfig.scene.preload = this.beforePhaserInit;
    phaserConfig.scene.create = this.afterPhaserInit;
    phaserConfig.scene.update = this.tick;

    this.game = new Phaser.Game(phaserConfig);
  }

  game: Phaser.Game;

  beforePhaserInit = beforePhaserInit;
  afterPhaserInit = afterPhaserInit;
  tick = tick;
}

export function beforePhaserInit(): void {
  for (var k in ASSETS.IMAGES) {
    this.load.image(k, ASSETS.IMAGES[k]);
  }
}

export function afterPhaserInit(): void {
  this.matter.world.setBounds();
  this.matter.add.mouseSpring();
  this.matter.world.createDebugGraphic();

  new Level(this);
}

var game;

// start
window.onload = () => {
  game = new AngryRecruits();
};