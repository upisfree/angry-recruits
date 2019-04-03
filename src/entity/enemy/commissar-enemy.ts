import BODY_DATA from '../body.data';
import Enemy from './enemy';
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class CommissarEnemy extends Enemy {
  constructor(scene, x, y, noScore = false) {
    super(
      scene,
      x,
      y,
      'commissar',
      PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['commissar-1']),
      {
        steps: 2,
        momentum: 7500,
        score: {
          step: 5000,
          destroy: 10000
        },
        particles: {
          name: 'smoke',
          frameRate: 18
        }
      },
      noScore
    );
  }
}