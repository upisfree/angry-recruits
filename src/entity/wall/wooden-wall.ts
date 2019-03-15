import Phaser from '../../lib/phaser';
import Entity from '../entity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class WoodenWall extends Entity {
  constructor(scene, x, y, w = 15, h = 250) {
    super(
      scene,
      x,
      y,
      'wooden-wall',
      Bodies.rectangle(0, 0, w, h, {
        density: 0.05, // масса тела — 350 кг
        "restitution": 0.25,
        // "friction": 1,
        // "frictionAir": 0.00001,
        // "frictionStatic": 100,
      }),
      {
        steps: 2,
        momentum: 40000,
        particles: {
          name: 'smoke',
          frameRate: 18
        }
      }
    );
  }
}