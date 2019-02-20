import Phaser from '../../lib/phaser';
import Enity from '../enity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class RecruitShell extends Enity {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'recruit',
      Bodies.circle(0, 0, 40, {
        density: 0.015, // масса тела — 74 кг
        restitution: 0.25
      })
    );
  }
}