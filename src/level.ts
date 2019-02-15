import Phaser from './lib/phaser';
import Wall from './enity/wall';
import WallStack from './enity/wall-stack';
import Slingshot from './enity/slingshot';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies } = Phaser.Physics.Matter.Matter;

export default class Level {
  constructor(scene) {
    this.scene = scene;

    let slingshot = new Slingshot(this.scene, 300, 700);

    let ground = new Wall(this.scene, 900, 900, 800, 50, { isStatic: true, friction: 0.75 });
    
    let wall1 = new Wall(this.scene, 900, 700, 50, 200, {
      density: 0.005,
      friction: 0.001,
      label: 'wall'
      // friction: 0.75,
      // restitution: 0,
      // frictionAir: 0
    });

    let wall2 = new Wall(this.scene, 1100, 700, 50, 200, {
      density: 0.005,
      friction: 0.001,
      label: 'wall'
      // friction: 0.75,
      // restitution: 0,
      // frictionAir: 0
    });

    let wall3 = new Wall(this.scene, 700, 700, 50, 200, {
      density: 0.005,
      friction: 0.001,
      label: 'wall'
      // friction: 0.75,
      // restitution: 0,
      // frictionAir: 0
    });

    let wall4 = new Wall(this.scene, 500, 700, 50, 200, {
      density: 0.005,
      friction: 0.001,
      label: 'wall'
      // friction: 0.75,
      // restitution: 0,
      // frictionAir: 0
    });
  }

  scene: any;
}