import CONFIG from '../config';
import Entity from '../entity/entity';
import ExplosionShell from '../entity/shell/explosion-shell';
import FatShell from '../entity/shell/fat-shell';
import RecruitShell from '../entity/shell/recruit-shell';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import Phaser from '../lib/phaser';
import Level2Data from './data/level-2.data';
import Level1 from './level-2';
import addEnvironment from './shared/add-environment';
import generateEntities from './shared/generate-entities';
import initDebugCamera from './shared/init-debug-camera';
import preload from './shared/preload';
import create from './shared/create';
import update from './shared/update';

export default class Level2 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  levelData: any = Level2Data;
  nextLevel: any = Level1;
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