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
import update from './shared/update';

export default class Level2 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity>;
  slingshot: Slingshot;
  nextLevel: any = Level1;
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
    this.game.isLevelOver = false;

    // здесь я поправил Phaser.Physics.Matter.PointerConstraint#getBodyPart
    // чтобы можно было брать только ещё невыпущенные снаряды
    this.matter.add.mouseSpring();

    if (CONFIG.DEBUG_MODE) {
      this.matter.world.createDebugGraphic();
      this.initDebugCamera();
    }

    this.enemies = [];
    this.shells = [];

    this.cameras.main.setZoom(CONFIG.DEFAULT_ZOOM);

    this.addEnvironment();

    this.entities = generateEntities(Level2Data, this);

    this.scoreText = this.add.text(2000, 100, this.game.score).setFontSize(128);
  }
}