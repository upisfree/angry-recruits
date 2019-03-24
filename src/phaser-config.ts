import CONFIG from './config';
import Phaser from './lib/phaser';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
import levelsList from './level/levels-list';
import LevelEditor from './editor/level';

export default {
  type: Phaser.AUTO,
  resolution: window.devicePixelRatio,
  pixelArt: true,
  backgroundColor: '#000',
  parent: 'game', // block id
  disableContextMenu: true,
  physics: {
    default: 'matter',
    matter: {
      enableSleeping: false,
      debug: (CONFIG.DEBUG_MODE) ? true : false,
      debugBodyColor: 0xffffff,
      // plugins: {
      //   wrap: true
      // }
    }
  },
  // если редактор включён, то запускаем уровень с редактором.
  // нет? запускаем все остальные уровни
  scene: (CONFIG.EDITOR_MODE) ? new LevelEditor({ key: LevelEditor.name }) : levelsList.map(L => new L({ key: L.name })),
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
