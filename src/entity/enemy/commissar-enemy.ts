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
        momentum: 10000,
        score: {
          step: 2500,
          destroy: 5000
        },
        particles: {
          name: 'smoke',
          frameRate: 18
        }
      }
    );
  }
}