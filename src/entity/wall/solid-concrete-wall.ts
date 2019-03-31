import Phaser from '../../lib/phaser';
import Entity from '../entity';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class SolidConcreteWall extends Entity {
  constructor(scene, x, y, w = 45, h = 250) {
    super(
      scene,
      x,
      y,
      'wall',
      'concrete-wall-1',
      Bodies.rectangle(0, 0, w, h, {
        density: 0.25,
        restitution: 0.1,
        friction: 1,
        frictionStatic: 1,
      })
    );
  }
}