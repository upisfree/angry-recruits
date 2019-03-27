import Phaser from '../../lib/phaser';
import Entity from '../entity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class ConcreteWall extends Entity {
  constructor(scene, x, y, w = 45, h = 250) {
    super(
      scene,
      x,
      y,
      'wall',
      'concrete-wall',
      Bodies.rectangle(0, 0, w, h, {
        density: 0.1, // масса тела — 350 кг
        restitution: 0.1,
        friction: 1,
        frictionStatic: 1,
      }),
      {
        steps: 2,
        momentum: 50000,
        score: {
          step: 500,
          destroy: 1000
        },
        particles: {
          name: 'smoke',
          frameRate: 18
        }
      }
    );
  }
}