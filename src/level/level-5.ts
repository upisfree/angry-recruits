import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import Phaser from '../lib/phaser';
import Level5Data from './data/level-5.data';
import addEnvironment from './shared/add-environment';
import create from './shared/create';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import update from './shared/update';

export default class Level5 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level5Data;
  nextLevel: any;
  winTimeout: number = 2500;
  zoom: number = 0.4;
  isWin: boolean;
  winTimeEvent: any;
  scoreText: any;

  preload = preload.bind(this);
  create = create.bind(this);
  update = update.bind(this);
  initDebugCamera = initDebugCamera.bind(this);
  addEnvironment = addEnvironment.bind(this);

  cameraControls: any;

  constructor(config) {
    super(config);
  }
}