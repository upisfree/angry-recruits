import ASSETS from '../assets';
import CONFIG from '../config';
import Phaser from '../lib/phaser';
import distance from '../utils/distance';
import { default as Entity } from './entity';
import Shell from './shell/shell';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Constraint, Vector } = Phaser.Physics.Matter.Matter;

export default class Slingshot {
  x: number;
  y: number;
  scene: any;
  constraint: any;
  previousShell: Shell;
  currentShell: Shell;
  frontSprite: any;
  backSprite: any;
  rubberSpriteFront: any;
  rubberSpriteBack: any;
  isNewShellSpawned: boolean = true; // чтобы работала задержка при спауне снаряда
  lastShootTime: number = 0;
  shellDirtyTime: number = 0;
  lastPathSpawnTime: number = 0;

  // конфиг
  minTensionDistance: number = 60; // расстояние, после которого можно отпустить рогатку
  maxTensionDistanceX: number = 800; // максильное расстояние по X, на которое можно натянуть рогатку
  maxTensionDistanceY: number = 400; // максильное расстояние по Y, на которое можно натянуть рогатку
  shellSpawnTime: number = 3500; // время, после которого можно спаунить новый снаряд
  pathSpawnTime: number = 25; // время, после которого можно спаунить часть пути полёта
  slingshotSpritesScaleFactor: number = 2;

  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;

    this.createSprites();
    this.createConstraint();
    this.scene.matter.world.on('afterupdate', this.afterUpdateCallback.bind(this));
  }

  private createSprites(): any {
    this.frontSprite = this.scene.add.sprite(this.x, this.y + 150, 'slingshot-front')
      .setScale(this.slingshotSpritesScaleFactor);

    this.backSprite = this.scene.add.sprite(this.x + 55, this.y + 35, 'slingshot-back')
      .setScale(this.slingshotSpritesScaleFactor);

    this.rubberSpriteFront = this.scene.add.sprite(this.x - 40, this.y - 50, 'slingshot-rubber')
      .setScale(this.slingshotSpritesScaleFactor)
      .setOrigin(0, 0);

    this.rubberSpriteBack = this.scene.add.sprite(this.x + 50, this.y, 'slingshot-rubber')
      .setScale(this.slingshotSpritesScaleFactor)
      .setOrigin(0, 0);

    this.scene.add.text(this.x - this.maxTensionDistanceX, this.y - 10, '|', { fontSize: 64 })

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
    this.currentShell.isDirty = false;
    this.currentShell.isInSlingshot = true;

    return this.currentShell;
  }

  private createConstraint(): void {
    this.constraint = this.scene.matter.add.constraint(null, null, null, null, {
      pointA: { x: this.x, y: this.y },
      bodyB: this.getNewShell().body, 
      stiffness: 0.1
    });
  }

  private updateRubber() {
    // чтобы тянулась резинка у рогатки
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
  }

  private updatePrimaryPointer() {
    let d = distance(this.constraint.pointA, this.currentShell.body.position);

    if (this.scene.input.activePointer.primaryDown) {
      // если уже можно отпустить рогатку и снаряд заряжен, то стреляем

      let dx = Math.abs(this.constraint.pointA.x - this.currentShell.body.position.x);
      let dy = Math.abs(this.constraint.pointA.y - this.currentShell.body.position.y);

      if ((dx > this.maxTensionDistanceX || dy > this.maxTensionDistanceY) && this.isNewShellSpawned) {
        this.currentShell.isInSlingshot = false;
        this.currentShell.isMaxTensionReached = true;
        this.currentShell.isDirty = true;

        this.shootTightShell();

        this.currentShell.sprite.setIgnoreGravity(true);
        this.currentShell.sprite.setVelocity(-10, -50);
      }
    } else {
      // если уже можно отпустить рогатку и снаряд заряжен, то стреляем
      this.rubberSpriteFront.displayHeight = 0;

      if (d > this.minTensionDistance && this.isNewShellSpawned) {
        this.shootTightShell();
      }
    }
  }

  private shootTightShell() {
    this.isNewShellSpawned = false;
    this.constraint.bodyB = Bodies.rectangle(this.x, this.y, 1, 1);

    this.currentShell.isShooted = true;
    this.currentShell.pathGroup = this.scene.add.group();

    this.currentShell.sprite.setVelocity(
      this.currentShell.body.velocity.x / this.currentShell.velocityCutFactor,
      this.currentShell.body.velocity.y / this.currentShell.velocityCutFactor
    );

    this.scene.cameras.main.startFollow(this.currentShell.sprite, true, 0.5, 0.5);

    this.scene.input.once('pointerdown', this.currentShell.activatePower, this.currentShell);    
  }

  private updateOnDirtyCurrentShell(e) {
    // чтобы задержка после выстрела сработала только после первого столкновения у снаряда
    if (this.currentShell.isDirty && this.currentShell.isShooted && this.shellDirtyTime === 0) {
      this.scene.shells.shift();
      this.shellDirtyTime = e.timestamp;
      this.lastShootTime = e.timestamp;

      if (this.previousShell && this.previousShell.pathGroup) {
        let pathSprites = this.previousShell.pathGroup.getChildren();
        pathSprites.forEach((s) => {
          let tween = this.scene.tweens.add({
            targets: s,
            scaleX: 5,
            scaleY: 5,
            alpha: 0,
            ease: 'Quad.easeOut',
            duration: 500,
            onComplete: () => {
              this.previousShell.pathGroup.clear(true, true);
            },
          });
        });
      }
    }
  }

  private updateFlightPath(e) {
    // рисуем путь полёта
    if (
      !this.isNewShellSpawned &&
      this.currentShell.sprite.scene &&
      !this.currentShell.isDirty &&
      this.currentShell.pathGroup &&
      !this.currentShell.isMaxTensionReached &&
      (e.timestamp - this.lastPathSpawnTime > this.pathSpawnTime)
    ) {
      let pathPart = this.scene.add.sprite(this.currentShell.sprite.x, this.currentShell.sprite.y, 'path-dot');

      this.currentShell.pathGroup.add(pathPart);

      this.lastPathSpawnTime = e.timestamp;
    }
  }

  private updateNewShellSpawn(e) {
    // если уже можно спаунить новый снаряд — спауним (и снаряды не закончились)
    if (e.timestamp - this.lastShootTime > this.shellSpawnTime && this.lastShootTime !== 0 && this.scene.shells.length) {
      this.previousShell = this.currentShell;
      this.previousShell.isInSlingshot = false;
      this.constraint.bodyB = this.getNewShell().body;
      this.lastShootTime = 0;
      this.shellDirtyTime = 0;
      this.isNewShellSpawned = true;

      this.scene.cameras.main.stopFollow();
      this.scene.cameras.main.pan(this.x, this.y, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);
    }
  }

  private afterUpdateCallback(e): void {
    this.updateRubber();
    this.updatePrimaryPointer();
    this.updateOnDirtyCurrentShell(e);
    this.updateFlightPath(e);
    this.updateNewShellSpawn(e);
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
      'slingshot-front', // textureKey
      Bodies.circle(0, 0, 50),
    );

    this.sprite.setScale(2);

    if (!CONFIG.EDITOR_MODE) {
      this.sprite.destroy();

      this.scene.slingshot = new Slingshot(this.scene, x, y);
    }
  }
}