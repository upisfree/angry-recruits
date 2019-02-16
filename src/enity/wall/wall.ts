import Phaser from '../../lib/phaser';
import Enity from '../enity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class Wall extends Enity {
  constructor(scene, x, y, w, h) {
    super(
      scene,
      x,
      y,
      'wall',
      Bodies.rectangle(0, 0, w, h, {
        density: 0.005,
        friction: 0.001
      }),
      {
        steps: 2,
        momentum: 3000,
        particles: {
          alpha: { start: 1, end: 0 },
          scale: { start: 0.5, end: 1 },
          speed: 20,
          accelerationY: -200,
          lifespan: { min: 500, max: 750 },
          blendMode: 'NORMAL',
          frequency: 250,
          maxParticles: 3
        }
      }
    );
  }
}