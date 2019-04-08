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
  zoom: number = 0.425;
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
    ];

    events.forEach((v) => {
      this.time.addEvent({
        delay: v.delay,
        callback: createDisappearingEvent.bind(this, this, v.x, v.y, v.type, v.data, v.scale, v.duration),
      });
    });

    create.bind(this)();

    const FONT_SIZE = 24;

    let tutorialText = this.add.text(
      300,
      -500,
      '',
      {
        fontSize: FONT_SIZE,
        fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
      }
    ).setScale(2.5, 2.5);

    let tutorialTexts = [
      'ПризываНет.ру представляет\n\nкомпьютерную игру «ЗЛОЙ ПРИЗЫВНИК»',
      'Воспользуйтесь рогаткой, чтобы\n\nзапустить призывника в военкомов',
      'Но не натягивайте рогатку слишком сильно!\n\nОна может порваться...',
    ];

    tutorialTexts.forEach((v, i) => {
      this.time.addEvent({
        delay: 5000 * i,
        callback: () => {
          tutorialText.text = v;
        },
      });
    });
  }
}