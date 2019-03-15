import Phaser from '../lib/phaser';
const { Vector } = Phaser.Physics.Matter.Matter;

// by @liabru: https://github.com/liabru/matter-js/issues/155#issuecomment-143433353
// a & b — bodies
export default function(a, b): number {
  a = a.parent;
  b = b.parent;

  let aMass = (a.mass !== Infinity) ? a.mass : 1; 
  let bMass = (b.mass !== Infinity) ? b.mass : 1; 

  let aMomentum = Vector.mult(a.velocity, aMass);
  let bMomentum = Vector.mult(b.velocity, bMass);

  let relativeMomentum = Vector.sub(aMomentum, bMomentum);

  return Vector.magnitude(relativeMomentum);
}