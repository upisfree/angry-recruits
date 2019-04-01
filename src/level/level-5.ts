import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import CommissarEnemy from '../entity/enemy/commissar-enemy';
import Phaser from '../lib/phaser';
import Level5Data from './data/level-5.data';
import addEnvironment from './shared/add-environment';
import create from './shared/create';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import update from './shared/update';
import randomBetween from '../utils/random-between';
import distance from '../utils/distance';

export default class Level5 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level5Data;
  nextLevel: any;
  score: number = 0;
  winTimeout: number = 7500;
  zoom: number = 0.4;
  isWin: boolean;
  winTimeEvent: any;
  scoreText: any;

  preload = preload.bind(this);
  initDebugCamera = initDebugCamera.bind(this);
  addEnvironment = addEnvironment.bind(this);

  cameraControls: any;
  distanceBetweenShellAndEnemy: number;
  enemyWidth: number = 700;

  constructor(config) {
    super(config);
  }

  create() {
    // this.matter.world.engine.timing.timeScale = 0.35;

    this.time.addEvent({
        delay: 250,
      callback: this.spawnCommissar,
      callbackScope: this,
      loop: true
    });

    create.bind(this)();

    this.sound.play('march', {
      volume: 0.25,
      rate: 0.45,
      loop: true
    });

    // this.distanceBetweenShellAndEnemy = distance(this.slingshot.currentShell.body.position, this.enemies[0].body.position) - this.enemyWidth;
  }

  update() {
    // if (this.slingshot.currentShell && this.slingshot.currentShell.isShooted) {
    //   let d = distance(this.slingshot.currentShell.body.position, this.enemies[0].body.position) - this.enemyWidth;

    //   if (d / this.distanceBetweenShellAndEnemy < 0.5) {
    //     this.matter.world.engine.timing.timeScale = 0;
    //   }
    // }

    update.bind(this)();
  }

  spawnCommissar() {
    if (!this.shells.length) {
      return;
    }

    let x = randomBetween(0, 3000); // 3500 — это чтобы не падали военкомы на главного военкома
    let y = -2000;

    let commissar = new CommissarEnemy(this, x, y, true);

    let angularVelocityDirection = (Math.random() > 0.5) ? 1 : -1;

    commissar.sprite
      .setScale(randomBetween(0.5, 1))
      .setAngularVelocity(0.3 * angularVelocityDirection)
      .setDensity(1)
      .applyForce({
        x: 0,
        y: randomBetween(0, 100)
      });
  }
}