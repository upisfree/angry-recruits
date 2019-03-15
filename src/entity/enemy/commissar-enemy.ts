import Phaser from '../../lib/phaser';
import Enemy from './enemy';
import BODY_DATA from '../body.data';
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class CommissarEnemy extends Enemy {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'commissar',
      PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['commissar-1']),
      {
        steps: 2,
        momentum: 20000,
        // particles: {
        //   alpha: { start: 1, end: 0 },
        //   scale: { start: 0.5, end: 1 },
        //   speed: 20,
        //   accelerationY: -200,
        //   lifespan: { min: 500, max: 750 },
        //   blendMode: 'NORMAL',
        //   frequency: 250,
        //   maxParticles: 3
        // }
      }
    );
  }
}