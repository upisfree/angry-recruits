import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import Phaser from '../lib/phaser';
import Level3 from './level-3';
import Level2Data from './data/level-2.data';
import addEnvironment from './shared/add-environment';
import create from './shared/create';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import update from './shared/update';
import createDisappearingEvent from '../ui/create-disappearing-event';

export default class Level2 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level2Data;
  nextLevel: any = Level3;
  winTimeout: number = 2500;
  score: number = 0;
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
    let events = [
      {
        type: 'sprite',
        data: 'dagestan-sign-1',
        x: 2000,
        y: -400,
        delay: 5000,
        duration: 0,
        scale: 3
      },
      {
        type: 'sprite',
        data: 'ingush-sign-1',
        x: 2000,
        y: -400,
        delay: 10000,
        duration: 0,
        scale: 3
      },
      {
        type: 'sprite',
        data: 'dagestan-sign-2',
        x: 2000,
        y: -400,
        delay: 15000,
        duration: 0,
        scale: 3
      },
      {
        type: 'sprite',
        data: 'ingush-sign-2',
        x: 2000,
        y: -400,
        delay: 20000,
        duration: 0,
        scale: 3
      }
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