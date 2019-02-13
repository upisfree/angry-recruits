import Phaser from '../lib/phaser';
import distance from '../utils/distance';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Constraint, Vector } = Phaser.Physics.Matter.Matter;

export default class Level {
  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.constraint = this.scene.matter.add.constraint(null, null, null, null, {
      pointA: { x: this.x, y: this.y },
      bodyB: this.getNewShell(), 
      stiffness: 0.05
    });

    this.scene.matter.world.on('afterupdate', (e) => {
      if (!this.scene.input.activePointer.primaryDown) {
        if (distance(this.constraint.pointA, this.currentShell.position) > this.shootDistance && this.newShellSpawned) {
          this.newShellSpawned = false;
          this.lastShootTime = e.timestamp;
          this.constraint.bodyB = Bodies.rectangle(this.x, this.y, 1, 1);
        }
      }

      if (e.timestamp - this.lastShootTime > this.shellSpawnTime && this.lastShootTime !== 0) {
        this.constraint.bodyB = this.getNewShell();
        this.lastShootTime = 0;
        this.newShellSpawned = true;
      }
    });
  }

  x: number;
  y: number;
  scene: any;
  constraint: any;
  shells: Array<any> = [];
  currentShell: any;
  shootDistance: number = 75;   // значение, после которого можно отпустить рогатку
  shellSpawnTime: number = 500; // значение, после которого можно спаунить новый снаряд
  lastShootTime: number = 0;
  newShellSpawned: boolean = true; // чтобы работала задержка при спауне снаряда

  private getNewShell() {
    let shell = this.scene.matter.add.polygon(this.x, this.y, 8, 20, {
      density: 0.04
    });

    this.shells.push(shell);
    this.currentShell = shell;

    return this.currentShell;
  }
}