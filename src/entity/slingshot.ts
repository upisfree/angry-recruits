import CONFIG from '../config';
import Phaser from '../lib/phaser';
import distance from '../utils/distance';
import { default as Entity } from './entity';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Constraint, Vector } = Phaser.Physics.Matter.Matter;

export default class Slingshot {
  x: number;
  y: number;
  scene: any;
  constraint: any;
  currentShell: any;
  frontSprite: any;
  backSprite: any;
  rubberSpriteFront: any;
  rubberSpriteBack: any;
  isNewShellSpawned: boolean = true; // чтобы работала задержка при спауне снаряда
  lastShootTime: number = 0;

  // конфиг
  maxTensionDistance: number = 60; // расстояние, после которого можно отпустить рогатку
  shellSpawnTime: number = 3500; // время, после которого можно спаунить новый снаряд

  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.createSprites();
    this.createConstraint();
    this.scene.matter.world.on('afterupdate', this.afterUpdateCallback.bind(this));
  }

  private createSprites(): any {
    let scaleFactor = 2;

    this.frontSprite = this.scene.add.sprite(this.x, this.y + 150, 'slingshot-front')
      .setScale(scaleFactor);

    this.backSprite = this.scene.add.sprite(this.x + 55, this.y + 35, 'slingshot-back')
      .setScale(scaleFactor);

    this.rubberSpriteFront = this.scene.add.sprite(this.x - 40, this.y - 50, 'slingshot-rubber')
      .setScale(scaleFactor)
      .setOrigin(0, 0);

    this.rubberSpriteBack = this.scene.add.sprite(this.x + 50, this.y, 'slingshot-rubber')
      .setScale(scaleFactor)
      .setOrigin(0, 0);

    this.frontSprite.depth = 15;
    this.rubberSpriteFront.depth = 12;
    this.backSprite.depth = 5;
  }

  private getNewShell() {
    if (this.currentShell) {
      this.scene.input.removeListener('pointerdown', this.currentShell.activatePower, this.currentShell, true);
    }

    this.currentShell = this.scene.shells[0];
    this.currentShell.sprite.setPosition(this.x, this.y);

    return this.currentShell;
  }

  private createConstraint(): void {
    this.constraint = this.scene.matter.add.constraint(null, null, null, null, {
      pointA: { x: this.x, y: this.y },
      bodyB: this.getNewShell().body, 
      stiffness: 0.1,
    });
  }

  private afterUpdateCallback(e): void {
    if (this.currentShell && !this.currentShell.isShooted) {
      let textureRotation = Math.PI / -2;

      let frontRubberPosition = { x: this.rubberSpriteFront.x, y: this.rubberSpriteFront.y };
      let backRubberPosition = { x: this.rubberSpriteBack.x, y: this.rubberSpriteBack.y };
      let shellPosition = { x: this.currentShell.body.position.x - 50, y: this.currentShell.body.position.y }

      this.rubberSpriteFront.displayHeight = distance(frontRubberPosition, shellPosition);
      this.rubberSpriteFront.rotation = textureRotation + Phaser.Math.Angle.BetweenPoints(frontRubberPosition, shellPosition);
      this.rubberSpriteBack.displayHeight = distance(backRubberPosition, shellPosition);
      this.rubberSpriteBack.rotation = textureRotation + Phaser.Math.Angle.BetweenPoints(backRubberPosition, shellPosition);
    } else {
      this.rubberSpriteFront.displayHeight = 0;
      this.rubberSpriteBack.displayHeight = 0;
    }

    // если уже можно отпустить рогатку и снаряд заряжен, то стреляем
    if (!this.scene.input.activePointer.primaryDown) {
      this.rubberSpriteFront.displayHeight = 0;

      if (distance(this.constraint.pointA, this.currentShell.body.position) > this.maxTensionDistance && this.isNewShellSpawned) {
        this.isNewShellSpawned = false;
        this.lastShootTime = e.timestamp;
        this.scene.shells.shift();
        this.constraint.bodyB = Bodies.rectangle(this.x, this.y, 1, 1);

        this.currentShell.isShooted = true;

        this.scene.cameras.main.startFollow(this.currentShell.sprite, true, 0.5, 0.5);
        this.scene.cameras.main.zoomTo(CONFIG.FLIGHT_ZOOM, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);

        this.scene.input.once('pointerdown', this.currentShell.activatePower, this.currentShell);
      }
    }

    // если уже можно спаунить новый снаряд — спауним (и снаряды не закончились)
    if (e.timestamp - this.lastShootTime > this.shellSpawnTime && this.lastShootTime !== 0 && this.scene.shells.length) {
      this.constraint.bodyB = this.getNewShell().body;
      this.lastShootTime = 0;
      this.isNewShellSpawned = true;

      this.scene.cameras.main.stopFollow();
      this.scene.cameras.main.pan(this.x, this.y, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);
      this.scene.cameras.main.zoomTo(CONFIG.DEFAULT_ZOOM, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);
    }
  }
}

// класс, чтобы можно было рогатку в редакторе выставлять
// фактически, просто обёртка над Slingshot
export class SlingshotEntity extends Entity {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'slingshot', // type
      'slingshot', // textureKey
      Bodies.circle(0, 0, 50),
    );

    if (!CONFIG.EDITOR_MODE) {
      this.sprite.destroy();

      this.scene.slingshot = new Slingshot(this.scene, x, y);
    }
  }
}