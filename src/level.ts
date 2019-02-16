import Phaser from './lib/phaser';
import Wall from './enity/wall/wall';
import Slingshot from './enity/slingshot';
import Shell from './enity/shell/shell';
import RecruitShell from './enity/shell/recruit-shell';
import LawyerShell from './enity/shell/lawyer-shell';

export default class Level {
  constructor(scene) {
    this.scene = scene;

    let slingshot = new Slingshot(this.scene, this, 200, 400);

    // let ground = new Wall(this.scene, 900, 700, 800, 50, { isStatic: true, friction: 0.75 });
    
    let wall1 = new Wall(this.scene, 900,  800, 50, 200);

    let wall2 = new Wall(this.scene, 1100, 800, 50, 200);

    let wall3 = new Wall(this.scene, 700, 800, 50, 200);
  }

  scene: any;
  shellsQueue = [LawyerShell, RecruitShell, RecruitShell, LawyerShell];
}