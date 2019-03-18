import Phaser from '../lib/phaser';
import distance from '../utils/distance';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Constraint, Vector } = Phaser.Physics.Matter.Matter;
import RecruitShell from './shell/recruit-shell';

export default class Slingshot {
  x: number;
  y: number;
  scene: any;
  constraint: any;
  currentShell: any;
  isNewShellSpawned: boolean = true; // чтобы работала задержка при спауне снаряда
  lastShootTime: number = 0;

  // конфиг
  maxTensionDistance: number = 60; // расстояние, после которого можно отпустить рогатку
  shellSpawnTime: number = 3500; // время, после которого можно спаунить новый снаряд

  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.createConstraint();
    this.scene.matter.world.on('afterupdate', this.afterUpdateCallback.bind(this));
  }

  private getNewShell() {
    if (this.currentShell) {
      this.scene.input.removeListener('pointerdown', this.currentShell.activatePower, this.currentShell, true);
    }

    this.currentShell = new this.scene.shellsQueue[0](this.scene, this.x, this.y);

    return this.currentShell;
  }

  private createConstraint(): void {
    this.constraint = this.scene.matter.add.constraint(null, null, null, null, {
      pointA: { x: this.x, y: this.y },
      bodyB: this.getNewShell().body, 
      stiffness: 0.025
    });
  }

  private afterUpdateCallback(e): void {
    // если уже можно отпустить рогатку и снаряд заряжен, то стреляем
    if (!this.scene.input.activePointer.primaryDown) {
      if (distance(this.constraint.pointA, this.currentShell.body.position) > this.maxTensionDistance && this.isNewShellSpawned) {
        this.isNewShellSpawned = false;
        this.lastShootTime = e.timestamp;
        this.scene.shellsQueue.shift();
        this.constraint.bodyB = Bodies.rectangle(this.x, this.y, 1, 1);

        this.scene.input.once('pointerdown', this.currentShell.activatePower, this.currentShell);
      }
    }

    // если уже можно спаунить новый снаряд — спауним (и снаряды не закончились)
    if (e.timestamp - this.lastShootTime > this.shellSpawnTime && this.lastShootTime !== 0 && this.scene.shellsQueue.length) {
      this.constraint.bodyB = this.getNewShell().body;
      this.lastShootTime = 0;
      this.isNewShellSpawned = true;
    }
  }
}