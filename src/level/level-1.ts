import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import Phaser from '../lib/phaser';
import Level2 from './level-2';
import Level1Data from './data/level-1.data';
import addEnvironment from './shared/add-environment';
import create from './shared/create';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import update from './shared/update';
import createDisappearingEvent from '../ui/create-disappearing-event';

export default class Level1 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level1Data;
  nextLevel: any = Level2;
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
        data: 'бурдж-халифа',
        x: 4125,
        y: -600,
        delay: 500,
        duration: 3000,
        scale: 1
      },
      {
        type: 'text',
        data: 'раз',
        x: 500,
        y: 100,
        delay: 4000,
        scale: 1
      },
      {
        type: 'text',
        data: 'два',
        x: 700,
        y: 200,
        delay: 6000,
        scale: 1
      },
      {
        type: 'text',
        data: 'три',
        x: 900,
        y: 300,
        delay: 8000,
        scale: 1
      },
      {
        type: 'sprite',
        data: 'tank',
        x: 1100,
        y: 100,
        delay: 10000,
        duration: 3000,
        scale: 1
      },
      {
        type: 'text',
        data: 'хочу передать привет своему военкому',
        x: 2000,
        y: -500,
        delay: 20000,
        scale: 1
      },
      {
        type: 'text',
        data: 'играл вообще в энгрибёрдс?',
        x: 2500,
        y: 0,
        delay: 15000,
        scale: 1
      },
    ];

    events.forEach((v) => {
      this.time.addEvent({
        delay: v.delay,
        callback: createDisappearingEvent.bind(this, this, v.x, v.y, v.type, v.data, v.scale, v.duration),
      });
    });

    create.bind(this)();
  }
}