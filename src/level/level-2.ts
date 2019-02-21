import Phaser from '../lib/phaser';
import update from './shared/update';
import preload from './shared/preload';
import isWin from './shared/is-win';
import Enity from '../enity/enity';
import Shell from '../enity/shell/shell';
import Level1 from './level-1';
import WoodenWall from '../enity/wall/wooden-wall';
import Slingshot from '../enity/slingshot';
import RecruitShell from '../enity/shell/recruit-shell';
import LawyerShell from '../enity/shell/lawyer-shell';
import GrannieEnemy from '../enity/enemy/grannie-enemy';
import CommissarEnemy from '../enity/enemy/commissar-enemy';

export default class Level2 extends (<any>Phaser.Scene) {
  enemies: Array<Enity> = [];
  shells: Array<Shell> = [];
  shellsQueue: any;
  slingshot: Slingshot;
  nextLevel: any = Level1;

  preload = preload.bind(this);
  update = update.bind(this);

  constructor(config) {
    super(config);
  }

  create() {
    this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
    this.matter.add.mouseSpring();
    this.matter.world.createDebugGraphic();

    this.enemies = [];
    this.shells = [];
    this.shellsQueue = [RecruitShell, RecruitShell, LawyerShell];

    this.slingshot = new Slingshot(this, 300, 300);

    new WoodenWall(this, 600, 800, 40, 300);

    new WoodenWall(this, 1200, 800, 40, 300);
    new WoodenWall(this, 900, 800, 40, 300);

    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
    new GrannieEnemy(this, 800, 1000);
    new CommissarEnemy(this, 800, 1000);
  }
}