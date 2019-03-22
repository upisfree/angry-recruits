import Phaser from '../lib/phaser';
import CONFIG from '../config';
import update from './shared/update';
import preload from './shared/preload';
import initDebugCamera from './shared/init-debug-camera';
import addEnvironment from './shared/add-environment';
import generateEntities from './shared/generate-entities';
import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import RecruitShell from '../entity/shell/recruit-shell';
import FatShell from '../entity/shell/fat-shell';
import ExplosionShell from '../entity/shell/explosion-shell';
import { KeyedEntitiesList } from '../entity/list';
import Level1Data from './data/level-1.data';
import Level2 from './level-2';

export default class Level1 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entites: Array<Entity>;
  shellsQueue: any;
  slingshot: Slingshot;
  nextLevel: any;
  winTimeout: number = 2500;
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
    // this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
    this.matter.add.mouseSpring();
    this.matter.world.createDebugGraphic();

    this.enemies = [];
    this.shells = [];
    this.shellsQueue = [FatShell, ExplosionShell, RecruitShell, RecruitShell];

    this.cameras.main.setZoom(CONFIG.DEFAULT_ZOOM);

    this.addEnvironment();

    this.entites = generateEntities(Level1Data, this);

    this.initDebugCamera();

    this.scoreText = this.add.text(2000, 100, this.game.score).setFontSize(128);
  }
}