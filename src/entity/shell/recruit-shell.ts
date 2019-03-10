import Phaser from '../../lib/phaser';
import Shell from './shell';
import BODY_DATA from '../body-data';
const { Bodies } = Phaser.Physics.Matter.Matter;
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class RecruitShell extends Shell {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'recruit',
      PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['recruit'])
    );
  }
}