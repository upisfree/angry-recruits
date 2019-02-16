import Phaser from '../../lib/phaser';
import Enity from '../enity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class LawyerShell extends Enity {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'player',
      Bodies.circle(0, 0, 50, {
        density: 0.04
      }),
      {
        steps: 1,
        momentum: 20000,
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