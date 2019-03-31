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

export default class Level5 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level5Data;
  nextLevel: any;
  winTimeout: number = 7500;
  zoom: number = 0.4;
  isWin: boolean;
  winTimeEvent: any;
  scoreText: any;

  preload = preload.bind(this);
  update = update.bind(this);
  initDebugCamera = initDebugCamera.bind(this);
  addEnvironment = addEnvironment.bind(this);

  cameraControls: any;

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
  }

  spawnCommissar() {
    if (!this.shells.length) {
      return;
    }

    let x = randomBetween(0, 3000); // 3500 — это чтобы не падали военкомы на главного военкома
    let y = -2000;

    let commissar = new CommissarEnemy(this, x, y);
    commissar.noScore = true;

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