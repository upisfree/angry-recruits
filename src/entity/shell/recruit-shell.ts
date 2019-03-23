import BODY_DATA from '../body.data';
import Shell from './shell';
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class RecruitShell extends Shell {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'recruit-shell',
      PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['recruit-shell'])
    );
  }

  activatePower() {
    console.log('RecruitShell superpower activated');
  }
}