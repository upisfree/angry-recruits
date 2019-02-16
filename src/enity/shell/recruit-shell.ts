import Phaser from '../../lib/phaser';
import Enity from '../enity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class RecruitShell extends Enity {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'vasya',
      Bodies.rectangle(0, 0, 50, 50, {
        density: 0.04
      })
    );
  }
}