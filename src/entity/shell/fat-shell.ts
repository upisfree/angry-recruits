import Phaser from '../../lib/phaser';
import Shell from './shell';
const { Bodies } = Phaser.Physics.Matter.Matter;
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class FatShell extends Shell {
  velocityCutFactor: number = 1.5; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)

  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'fat-shell',
      Bodies.circle(0, 0, 75, {
        density: 0.015, // масса тела — 74 кг
        restitution: 0.35
      }),
      {
        steps: 1,
        score: {
          destroy: 10000
        }
      }
      // PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['fat-shell'])
    );
  }

  activatePower() {
    this.sprite.setDensity(0.1);
    this.sprite.setBounce(0.1);
    this.sprite.setFriction(1);
    this.sprite.setFrictionStatic(10);

    this.sprite.applyForce({
      x: 0,
      y: 1000
    });
  }
}