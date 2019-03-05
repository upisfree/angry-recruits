import Phaser from '../lib/phaser';
import update from './shared/update';
import preload from './shared/preload';
import initDebugCamera from './shared/init-debug-camera';
import generateEntities from './shared/generate-entities';
import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import RecruitShell from '../entity/shell/recruit-shell';
import LawyerShell from '../entity/shell/lawyer-shell';
import { KeyedEntitiesList } from '../entity/list';
import Level1Data from './data/level-1.data';
import Level2 from './level-2';

export default class Level1 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  shellsQueue: any;
  slingshot: Slingshot;
  nextLevel: any = Level2;
  winTimeout: number = 5000;
  isWin: boolean;
  winTimeEvent: any;

  preload = preload.bind(this);
  update = update.bind(this);
  initDebugCamera = initDebugCamera.bind(this);

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
    this.shellsQueue = [RecruitShell, RecruitShell, LawyerShell];

    this.addEnvironment();

    this.slingshot = new Slingshot(this, 200, 400);

    generateEntities(Level1Data, this);

    this.initDebugCamera();
  }

  addEnvironment() {
    // let tileSprite = this.add.tileSprite(this.game.config.width / 2, 1920, 20000, 290, 'grass');
    // console.log(tileSprite);
    // this.matter.add.tileBody(tileSprite, {});
    // let grass = this.matter.add.image(this.game.config.width / 2, this.game.config.height, 'grass', null, { isStatic: true });
    let grassTile = this.add.tileSprite(this.game.config.width / 2, this.game.config.height - 100, 1920 * 10, 280, 'grass');
    let grassSprite = this.matter.add.gameObject(grassTile).setStatic(true);

    let skyTile = this.add.tileSprite(this.game.config.width / 2, this.game.config.height / 2, 1920, 1080, 'sky');


    // this.matter.add.image(this.game.config.width / 2, this.game.config.height, 'grass', null, { isStatic: true });
  }
}