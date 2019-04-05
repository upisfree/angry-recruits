import BODY_DATA from '../body.data';
import Shell from './shell';
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class RecruitShell extends Shell {
  velocityCutFactor: number = 1; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)

  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'recruit-shell',
      PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['recruit-shell']),
      {
        steps: 1,
        score: {
          destroy: 15000
        }
      }
    );
  }

  activatePower() {
    if (this.isMaxTensionReached) {
      return false;
    }
  }
}