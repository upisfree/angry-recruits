import Phaser from '../lib/phaser';
import distance from '../utils/distance';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Constraint, Vector } = Phaser.Physics.Matter.Matter;
import RecruitShell from './shell/recruit-shell';

export default class Slingshot {
  x: number;
  y: number;
  scene: any;
  level: any;
  constraint: any;
  currentShell: any;
  isNewShellSpawned: boolean = true; // чтобы работала задержка при спауне снаряда
  lastShootTime: number = 0;

  // конфиг
  maxTensionDistance: number = 60; // расстояние, после которого можно отпустить рогатку
  shellSpawnTime: number = 500; // время, после которого можно спаунить новый снаряд

  constructor(scene, level, x, y) {
    this.scene = scene;
    this.level = level;
    this.x = x;
    this.y = y;

    this.createConstraint();
    this.scene.matter.world.on('afterupdate', this.afterUpdateCallback.bind(this));
  }

  private getNewShell() {
    this.currentShell = new this.level.shellsQueue[0](this.scene, this.x, this.y);
    this.level.shellsQueue.shift();

    return this.currentShell;
  }

  private createConstraint(): void {
    this.constraint = this.scene.matter.add.constraint(null, null, null, null, {
      pointA: { x: this.x, y: this.y },
      bodyB: this.getNewShell().body, 
      stiffness: 0.05
    });
  }

  private afterUpdateCallback(e): void {
    // если уже можно отпустить рогатку и снаряд заряжен, то стреляем
    if (!this.scene.input.activePointer.primaryDown) {
      if (distance(this.constraint.pointA, this.currentShell.body.position) > this.maxTensionDistance && this.isNewShellSpawned) {
        this.isNewShellSpawned = false;
        this.lastShootTime = e.timestamp;
        this.constraint.bodyB = Bodies.rectangle(this.x, this.y, 1, 1);
      }
    }

    // если уже можно спаунить новый снаряд — спауним (и снаряды на закончились)
    if (e.timestamp - this.lastShootTime > this.shellSpawnTime && this.lastShootTime !== 0 && this.level.shellsQueue.length) {
      this.constraint.bodyB = this.getNewShell().body;
      this.lastShootTime = 0;
      this.isNewShellSpawned = true;
    }
  }
}