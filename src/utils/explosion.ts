import Phaser from '../lib/phaser';
const { Body, Common, Composite, Vector } = Phaser.Physics.Matter.Matter;
import Entity from '../entity/entity';
import distance from './distance';

export default function(entites: Array<Entity>, position, force: number) {
  for (let i = 0; i < entites.length; i++) {
    let body = entites[i].body;

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