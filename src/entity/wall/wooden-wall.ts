import Phaser from '../../lib/phaser';
import Entity from '../entity';
const { Bodies } = Phaser.Physics.Matter.Matter;
import SmokeParticles from '../../particle/smoke';

export default class WoodenWall extends Entity {
  constructor(scene, x, y, w = 15, h = 250) {
    super(
      scene,
      x,
      y,
      'wooden-wall',
      Bodies.rectangle(0, 0, w, h, {
        density: 0.01, // масса тела — 350 кг
        friction: 0.1,
        // friction: 0.9,
        // frictionAir: 0.0001,
        // restitution: 0
      }),
      {
        steps: 2,
        momentum: 40000,
        particles: SmokeParticles
      }
    );
  }
}