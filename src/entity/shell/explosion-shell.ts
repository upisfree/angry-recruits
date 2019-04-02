import CONFIG from '../../config';
import Phaser from '../../lib/phaser';
import explosion from '../../utils/explosion';
import Shell from './shell';
const { Bodies } = Phaser.Physics.Matter.Matter;
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class ExplosionShell extends Shell {
  velocityCutFactor: number = 3; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
  explosionForce: number = 15;

  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'explosion-shell',
      Bodies.circle(0, 0, 75, {
        density: 0.001,
        restitution: 0.35,
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
  }

  activatePower() {
    if (this.isMaxTensionReached) {
      return false;
    }

    explosion(this.scene.entities, this.body.position, this.explosionForce);

    this.showSmoke();

    this.scene.cameras.main.stopFollow();
    this.scene.cameras.main.pan(this.scene.slingshot.x, this.scene.slingshot.y, 4000, CONFIG.FLIGHT_ZOOM_EASING);
    this.scene.cameras.main.shake(2000, 0.4);
    this.sprite.destroy();

    this.isDestroyed = true;
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