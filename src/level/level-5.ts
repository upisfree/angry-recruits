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
import createDisappearingEvent from '../ui/create-disappearing-event';

export default class Level5 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level5Data;
  nextLevel: any;
  score: number = 0;
  winTimeout: number = 3000;
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
    this.time.addEvent({
      delay: 250,
      callback: this.spawnCommissar,
      callbackScope: this,
      loop: true
    });

    let events = [
      this.commissarText('слыш пездюк', 3000),
      this.commissarText('я генерал-майор', 5000),
      this.commissarText('диванных войск', 7000),
      this.commissarText('трава себя не покрасит', 9000),
      this.commissarText('моя дача сама не построится', 11000),
      this.commissarText('сюда подошёл', 15000),
      this.commissarText('один на один', 17000),
      this.commissarText('только ты и я', 19000),
      this.commissarText('встречаемся в военкомате', 21000),
      this.commissarText('ну чё стоишь пердишь', 27000),
      this.commissarText('давай шакал', 30000),
      this.commissarText('я тут уже 30 лет сижу', 32000),
      this.commissarText('знаешь сколько таких видал', 34000),
      this.commissarText('знаешь...', 38000),
      this.commissarText('знаешь ли ты', 42000),
      this.commissarText('вдоль ночных дорог', 43000),
      this.commissarText('шла босиком', 44000),
      this.commissarText('не жалея ног', 45000),
    ];

    events.forEach((v) => {
      this.time.addEvent({
        delay: v.delay,
        callback: createDisappearingEvent.bind(this, this, v.x, v.y, v.type, v.data, v.scale, v.duration),
      });
    });

    create.bind(this)();
  }

  update() {
    update.bind(this)();
  }

  commissarText(t, d) {
    return {
      type: 'text',
      data: t,
      x: 3850,
      y: -700,
      delay: d,
      duration: 2500,
      scale: 1.55
    };
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