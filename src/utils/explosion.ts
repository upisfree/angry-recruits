import Entity from '../entity/entity';
import Phaser from '../lib/phaser';
import distance from './distance';
const { Body, Common, Composite, Vector } = Phaser.Physics.Matter.Matter;

export default function(entities: Array<Entity>, position, force: number) {
  for (let i = 0; i < entities.length; i++) {
    let body = entities[i].body;

    if (body && !body.isStatic) {
      let forceMagnitude = force * body.mass;

      let angle = Vector.angle(body.position, position);
      let dist = distance(body.position, position);

      Body.applyForce(body, position, {
        x: Math.cos(angle) * -forceMagnitude / dist,
        y: Math.sin(angle) * -forceMagnitude / dist
      });
    }
  }
};