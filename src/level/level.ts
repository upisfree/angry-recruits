import Phaser from '../lib/phaser';
import WoodenWall from '../enity/wall/wooden-wall';
import Slingshot from '../enity/slingshot';
import RecruitShell from '../enity/shell/recruit-shell';
import LawyerShell from '../enity/shell/lawyer-shell';
import GrannieEnemy from '../enity/enemy/grannie-enemy';
import CommissarEnemy from '../enity/enemy/commissar-enemy';

export default class Level extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  create() {
    // this.scene = scene;

    console.log(this);

    // let slingshot = new Slingshot(this.scene, this, 300, 300);

    new WoodenWall(this, 600, 800, 40, 300);
    // new WoodenWall(this.scene, 1200, 800, 40, 300);
    // new WoodenWall(this.scene, 900, 800, 40, 300);

    // new GrannieEnemy(this.scene, 800, 1000);
    // new CommissarEnemy(this.scene, 800, 1000);
    // new GrannieEnemy(this.scene, 800, 1000);
    // new CommissarEnemy(this.scene, 800, 1000);
    // new GrannieEnemy(this.scene, 800, 1000);
    // new CommissarEnemy(this.scene, 800, 1000);
    // new GrannieEnemy(this.scene, 800, 1000);
    // new CommissarEnemy(this.scene, 800, 1000);
    // new GrannieEnemy(this.scene, 800, 1000);
    // new CommissarEnemy(this.scene, 800, 1000);
    // new GrannieEnemy(this.scene, 800, 1000);
    // new CommissarEnemy(this.scene, 800, 1000);
  }

  // scene: any;
  shellsQueue = [RecruitShell, RecruitShell, LawyerShell];
}