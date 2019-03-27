import Phaser from '../../lib/phaser';
import Entity from '../entity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class WoodenWall extends Entity {
  constructor(scene, x, y, w = 15, h = 250) {
    super(
      scene,
      x,
      y,
      'wall',
      'wooden-wall',
      Bodies.rectangle(0, 0, w, h, {
        density: 0.005, // масса тела — 350 кг
        restitution: 0.25,
        friction: 1,
        frictionStatic: 1,
      }),
      {
        steps: 2,
        momentum: 10000,
        score: {
          step: 100,
          destroy: 200
        },
        particles: {
          name: 'smoke',
          frameRate: 18
        }
      }
    );
  }
}