import Phaser from './lib/phaser';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;

export default {
  type: Phaser.AUTO,
  resolution: window.devicePixelRatio,
  pixelArt: true,
  backgroundColor: '#000000',
  parent: 'game', // block id
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        y: 0.8
      },
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
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    resolution: window.devicePixelRatio
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
