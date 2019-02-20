import Phaser from './lib/phaser';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
import CONFIG from './config';

export default {
  type: Phaser.AUTO,
  resolution: window.devicePixelRatio,
  pixelArt: true,
  backgroundColor: '#000000',
  parent: 'game', // block id
  physics: {
    default: 'matter',
    matter: {
      // gravity: {
      //   y: 2
      // },
      debug: true,
      debugBodyColor: 0xffffff
    }
  },
  // проставляем в main.ts
  scene: {
    preload: undefined,
    create: undefined,
    update: undefined
  },
  scale: {
    // здесь какая-то хуйня с Phaser.Scale.FIT
    mode: Phaser.Scale.NONE,
    // _parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // width: window.innerWidth * window.devicePixelRatio,
    // height: window.innerHeight * window.devicePixelRatio,
    width: 1920,
    height: 1080,
    // mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
    resolution: window.devicePixelRatio,
    // width: CONFIG.WIDTH,
    // height: CONFIG.HEIGHT,
  },
  plugins: {
    scene: [
      {
        plugin: PhaserMatterCollisionPlugin,
        key: 'matterCollision',
        mapping: 'matterCollision'
      }
    ]
  }
};
