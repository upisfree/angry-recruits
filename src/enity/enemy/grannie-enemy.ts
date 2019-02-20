import Phaser from '../../lib/phaser';
import Enity from '../enity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class GrannieEnemy extends Enity {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'grannie',
      Bodies.circle(0, 0, 40, {
        density: 0.015, // масса тела — 74 кг
        restitution: 0.25
      }),
      {
        steps: 1,
        momentum: 1000,
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