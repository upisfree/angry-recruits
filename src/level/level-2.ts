import Phaser from '../lib/phaser';
import update from './shared/update';
import preload from './shared/preload';
import generateEntities from './shared/generate-entities';
import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
import RecruitShell from '../entity/shell/recruit-shell';
import { KeyedEntitiesList } from '../entity/list';
import Level2Data from './data/level-2.data';
import Level1 from './level-1';

export default class Level2 extends (<any>Phaser.Scene) {
  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  shellsQueue: any;
  slingshot: Slingshot;
  nextLevel: any = Level1;
  winTimeout: number = 5000;
  isWin: boolean;
  winTimeEvent: any;

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
    this.shellsQueue = [RecruitShell, RecruitShell, RecruitShell];

    this.slingshot = new Slingshot(this, 300, 300);

    generateEntities(Level2Data, this);
  }
}