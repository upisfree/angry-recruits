import Phaser from '../lib/phaser';
import update from './shared/update';
import preload from './shared/preload';
import isWin from './shared/is-win';
import generateEntities from './shared/generate-entities';
import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import WoodenWall from '../entity/wall/wooden-wall';
import Slingshot from '../entity/slingshot';
import RecruitShell from '../entity/shell/recruit-shell';
import LawyerShell from '../entity/shell/lawyer-shell';
import { KeyedEntitiesList } from '../entity/list';
import Level2Data from './data/level-2.data';
import Level1 from './level-1';

export default class Level2 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  shellsQueue: any;
  slingshot: Slingshot;
  nextLevel: any = Level1;

  preload = preload.bind(this);
  update = update.bind(this);

  constructor(config) {
    super(config);
  }

  create() {
    this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
    this.matter.add.mouseSpring();
    this.matter.world.createDebugGraphic();

    this.enemies = [];
    this.shells = [];
    this.shellsQueue = [RecruitShell, RecruitShell, LawyerShell];

    this.slingshot = new Slingshot(this, 300, 300);

    generateEntities(Level2Data, this);
  }
}