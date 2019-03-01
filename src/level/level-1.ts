import Phaser from '../lib/phaser';
import update from './shared/update';
import preload from './shared/preload';
import isWin from './shared/is-win';
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

    generateEntities(Level1Data, this);
  }
}