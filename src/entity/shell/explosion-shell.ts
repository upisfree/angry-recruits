import CONFIG from '../../config';
import Phaser from '../../lib/phaser';
import explosion from '../../utils/explosion';
import Shell from './shell';
const { Bodies } = Phaser.Physics.Matter.Matter;
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class ExplosionShell extends Shell {
  velocityCutFactor: number = 3; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
  bannedSprite: any;

  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'explosion-shell',
      Bodies.circle(0, 0, 75, {
        density: 0.001,
        restitution: 0.25,
        friction: 1,
        frictionAir: 0.00001,
        frictionStatic: 100,
      }),
      // PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['shahid-shell'])
      {
        steps: 1,
        score: {
          destroy: 10000
        }
      }
    );

    if (!CONFIG.EDITOR_MODE) {
      // this.bannedSprite = this.scene.add.sprite(
      //   0,
      //   0,
      //   'banned-organisation'
      // ).setOrigin(0, 0);
    }
  }

  activatePower() {
    if (!CONFIG.EDITOR_MODE) {
      // this.bannedSprite.destroy();
    }

    explosion(this.scene.entities, this.body.position, 20);

    this.showSmoke();

    // this.scene.cameras.main.stopFollow();
    // this.scene.cameras.main.pan(this.scene.slingshot.x, this.scene.slingshot.y, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);
    // this.scene.cameras.main.zoomTo(CONFIG.DEFAULT_ZOOM, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);
    this.scene.cameras.main.shake(75, 0.55);
    this.sprite.destroy();

    this.isDirty = true;
    this.isShooted = true;
    this.isInSlingshot = false;
  }

  showSmoke() {
    let particle = this.scene.add.sprite(this.sprite.x, this.sprite.y, 'smoke');

    this.scene.anims.create({
      key: 'destroy',
      frames: this.scene.anims.generateFrameNumbers('smoke'),
      frameRate: 18,
      hideOnComplete: true
    });

    particle.anims.play('destroy');
  }
}