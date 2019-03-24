import CONFIG from '../config';
import Entity from '../entity/entity';
import ExplosionShell from '../entity/shell/explosion-shell';
import FatShell from '../entity/shell/fat-shell';
import RecruitShell from '../entity/shell/recruit-shell';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import Phaser from '../lib/phaser';
import Level1Data from './data/level-1.data';
import addEnvironment from './shared/add-environment';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import create from './shared/create';
import update from './shared/update';

export default class Level1 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level1Data;
  nextLevel: any;
  winTimeout: number = 2500;
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