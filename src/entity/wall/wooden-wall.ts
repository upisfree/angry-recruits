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
        density: 0.01, // масса тела — 350 кг
        friction: 0.1,
        // friction: 0.9,
        // frictionAir: 0.0001,
        // restitution: 0
      }),
      {
        steps: 2,
        momentum: 40000,
        particles: {
          // alpha: { start: 1, end: 0 },
          // scale: { start: 1, end: 10 },
          // speed: 30,
          accelerationX: { min: -250, max: 250 },
          // accelerationY: -400,
          gravityY: 350,
          // lifespan: { min: 100, max: 250 },
          // blendMode: 'NORMAL',
          // frequency: 250,
          // maxParticles: 64
        }
      }
    );
  }
}