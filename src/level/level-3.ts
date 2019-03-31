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

export default class Level3 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level3Data;
  nextLevel: any = Level4;
  winTimeout: number = 2500;
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
    create.bind(this)();

    this.add.sprite(5300, 465, 'lenin');
  }
}