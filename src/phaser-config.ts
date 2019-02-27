import Phaser from './lib/phaser';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
import levelsList from './level/levels-list';

export default {
  type: Phaser.AUTO,
  resolution: window.devicePixelRatio,
  pixelArt: true,
  backgroundColor: '#000000',
  parent: 'game', // block id
  physics: {
    default: 'matter',
    matter: {
      enableSleeping: true,
      debug: true,
      debugBodyColor: 0xffffff
    }
  },
  scene: levelsList.map(L => new L({ key: L.name })),

  scale: {
    // здесь какая-то хуйня с Phaser.Scale.FIT, поэтому всё хендлю сам
    mode: Phaser.Scale.NONE,
    width: 1920,
    height: 1080,
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
