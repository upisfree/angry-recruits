import Phaser from '../../lib/phaser';
import Shell from './shell';
import BODY_DATA from '../body.data';
import phaserConfig from '../../phaser-config';
const { Bodies } = Phaser.Physics.Matter.Matter;
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;
import explosion from '../../utils/explosion';

export default class ExplosionShell extends Shell {
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
    );
  }

  activatePower() {
    let banned = this.scene.add.sprite(
      phaserConfig.scale.width / 2,
      phaserConfig.scale.height / 2,
      'banned-organisation'
    );

    this.scene.scene.pause();

    // this.scene.time.addEvent как-то не особо работает
    setTimeout(() => {
      this.scene.scene.resume();

      banned.destroy();

      explosion(this.scene.entites, this.body.position, 15);

      this.showSmoke();

      this.sprite.destroy();
    }, 2500);
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