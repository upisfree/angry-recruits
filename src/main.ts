import CONFIG from './config';
import Phaser from './lib/phaser';
import phaserConfig from './phaser-config';
import tick from './tick';
import ASSETS from './assets';
import Level from './level/level';
const { Vector } = Phaser.Physics.Matter.Matter.Vector;

// main class
export default class AngryRecruits {
  constructor() {
    phaserConfig.scene.preload = this.beforePhaserInit;
    phaserConfig.scene.create = this.afterPhaserInit;
    phaserConfig.scene.update = this.tick;

    this.game = new Phaser.Game(phaserConfig);
  }

  game: any;

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
  // this.cameras.main.setBounds(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
  this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
  // this.matter.world.setSize(800 * window.devicePixelRatio, 600 * window.devicePixelRatio);
  this.matter.add.mouseSpring();
  // this.matter.world.createDebugGraphic();

  // this.sys.scale.setGameSize(CONFIG.WIDTH, CONFIG.HEIGHT);

  this.scene.add('level', Level, true);
}

var game;

// start
window.onload = () => {
  game = new AngryRecruits();
};