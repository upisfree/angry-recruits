import Phaser from '../../lib/phaser';
import Shell from './shell';
import BODY_DATA from '../body.data';
const { Bodies } = Phaser.Physics.Matter.Matter;
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class FatShell extends Shell {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'fat-shell',
      Bodies.circle(0, 0, 75, {
        density: 0.015, // масса тела — 74 кг
        restitution: 0.25
      }),
      // PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['fat-shell'])
    );
  }

  activatePower() {
    this.sprite.setDensity(0.1);
    this.sprite.setBounce(0);
    this.sprite.setFriction(1);
    this.sprite.setFrictionStatic(10);

    this.sprite.applyForce({
      x: 0,
      y: 500
    });
  }
}