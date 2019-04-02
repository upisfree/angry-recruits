import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import Phaser from '../lib/phaser';
import Level5 from './level-5';
import Level4Data from './data/level-4.data';
import addEnvironment from './shared/add-environment';
import create from './shared/create';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import update from './shared/update';
import createDisappearingEvent from '../ui/create-disappearing-event';

export default class Level4 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level4Data;
  nextLevel: any = Level5;
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
        type: 'text',
        data: 'я',
        x: 2500,
        y: -100,
        delay: 20000,
        duration: 1000,
        scale: 1
      },
      {
        type: 'text',
        data: 'искала',
        x: 2500,
        y: -200,
        delay: 21000,
        duration: 1000,
        scale: 1
      },
      {
        type: 'text',
        data: 'тебя',
        x: 2500,
        y: -300,
        delay: 22000,
        duration: 1000,
        scale: 1
      },
      {
        type: 'text',
        data: 'ночами',
        x: 2500,
        y: -400,
        delay: 23000,
        duration: 1000,
        scale: 1
      },
      {
        type: 'text',
        data: 'чами',
        x: 2500,
        y: -500,
        delay: 24000,
        duration: 1000,
        scale: 1
      },
      {
        type: 'text',
        data: 'чами',
        x: 2500,
        y: -600,
        delay: 25000,
        duration: 1000,
        scale: 1
      },
      {
        type: 'text',
        data: 'чами',
        x: 2500,
        y: -700,
        delay: 26000,
        duration: 1000,
        scale: 1
      }
    ];

    events.forEach((v) => {
      this.time.addEvent({
        delay: v.delay,
        callback: createDisappearingEvent.bind(this, this, v.x, v.y, v.type, v.data, v.scale, v.duration),
      });
    });

    create.bind(this)();

    let tutorialText = this.add.text(
      300,
      -500,
      'Напоминаю ещё раз!\nКак запустишь чёрного призывника, жми на экран',
      {
        fontSize: 54,
        fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
      }
    );
  }
}