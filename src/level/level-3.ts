import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import Phaser from '../lib/phaser';
import Level4 from './level-4';
import Level3Data from './data/level-3.data';
import addEnvironment from './shared/add-environment';
import create from './shared/create';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import update from './shared/update';
import createDisappearingEvent from '../ui/create-disappearing-event';

export default class Level3 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level3Data;
  nextLevel: any = Level4;
  winTimeout: number = 2500;
  score: number = 0;
  zoom: number = 0.5;
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
    let events = [
      {
        type: 'text',
        data: 'когда жирный будет полетит, нажми на него',
        x: 1500,
        y: 0,
        delay: 4000,
        duration: 2500,
        scale: 1
      },
      // {
      //   type: 'sprite',
      //   data: 'ingush-sign-2',
      //   x: 2000,
      //   y: -400,
      //   delay: 10000,
      //   duration: 0,
      //   scale: 2
      // },
      this.commissarText('братан', 5000),
      this.commissarText('попусти', 7500),
      this.commissarText('всё', 10000),
      this.commissarText('будет', 10500),
      this.commissarText('путём', 11000),
      this.commissarText('нормалёк', 13000),
      this.commissarText('прорвёмся', 14500),
      this.commissarText('вместе', 16500),
      this.commissarText('я не голубой', 20000),
      this.commissarText('ну короче не важно))', 22000),
      this.commissarText('погнали к нам', 23000),
      this.commissarText('сирия', 24000),
      this.commissarText('донбасс', 25000),
      this.commissarText('омск', 26000),
      this.commissarText('правда загран заберём   ', 28000),
      this.commissarText('не стреляй', 32000),
      this.commissarText('я свой', 34000),
      this.commissarText('ты кстати где живёшь  ', 36000),
      this.commissarText('я вот тут недалеко', 39000),
      this.commissarText('заходи на чаёк)', 41000),
      this.commissarText('если', 45000),
      this.commissarText('ты', 46000),
      this.commissarText('не', 47000),
      this.commissarText('голубой', 48000),
      this.commissarText('дорисуй', 49000),
      this.commissarText('вагон', 50000),
      this.commissarText('другой', 51000),
      this.commissarText(')))', 52000),
      this.commissarText('🇷🇺', 57000),
      this.commissarText('🇷🇺', 57500),
      this.commissarText('🇷🇺', 58000),
      this.commissarText('🇷🇺', 58500),
      {
        type: 'text',
        data: 'сука он заебал',
        x: 700,
        y: 200,
        delay: 52000,
        duration: 1500,
        scale: 2
      },
      {
        type: 'text',
        data: 'ёбни его уже',
        x: 700,
        y: 200,
        delay: 54000,
        duration: 1500,
        scale: 2
      }
    ];

    events.forEach((v) => {
      this.time.addEvent({
        delay: v.delay,
        callback: createDisappearingEvent.bind(this, this, v.x, v.y, v.type, v.data, v.scale, v.duration),
      });
    });

    create.bind(this)();

    this.sound.play('march', {
      volume: 0.15,
      loop: true
    });

    this.add.sprite(5300, 465, 'lenin');
  }

  commissarText(t, d) {
    return {
      type: 'text',
      data: t,
      x: 3300,
      y: 550,
      delay: d,
      duration: 2500,
      scale: 1
    };
  }
}