import Phaser from '../lib/phaser';
import levelPreload from './level-preload';
import Enity from '../enity/enity';
import WoodenWall from '../enity/wall/wooden-wall';
import Slingshot from '../enity/slingshot';
import RecruitShell from '../enity/shell/recruit-shell';
import LawyerShell from '../enity/shell/lawyer-shell';
import GrannieEnemy from '../enity/enemy/grannie-enemy';
import CommissarEnemy from '../enity/enemy/commissar-enemy';

export default class Level1 extends (<any>Phaser.Scene) {
  enemies: Array<Enity> = [];
  shellsQueue: any;
  preload = levelPreload.bind(this);

  constructor(config) {
    super(config);
  }


    // phaserConfig.scene.preload = this.beforePhaserInit;
    // phaserConfig.scene.create = this.afterPhaserInit;
    // phaserConfig.scene.update = this.tick;

  create() {
    this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
    this.matter.add.mouseSpring();
    this.matter.world.createDebugGraphic();

    this.shellsQueue = [RecruitShell, RecruitShell, LawyerShell];

    let slingshot = new Slingshot(this, this, 300, 300);

    new WoodenWall(this, 600, 800, 40, 300);

    new WoodenWall(this, 1200, 800, 40, 300);
    new WoodenWall(this, 900, 800, 40, 300);

    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);

    setTimeout(() => {
      this.scene.start('Level2');
    }, 1000);
  }
}