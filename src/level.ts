import Phaser from './lib/phaser';
import Wall from './enity/wall';
import WallStack from './enity/wall-stack';
import Slingshot from './enity/slingshot';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Vector } = Phaser.Physics.Matter.Matter;

export default class Level {
  constructor(scene) {
    this.scene = scene;

    // оптимизация
    // let walls = [];

    let slingshot = new Slingshot(this.scene, 300, 700);

    let ground = new Wall(this.scene, 900, 900, 800, 50, { isStatic: true, friction: 0.75 });
    
    let cube = new Wall(this.scene, 900, 400, 50, 200, {
      density: 0.005,
      friction: 0.001,
      label: 'wall'
      // friction: 0.75,
      // restitution: 0,
      // frictionAir: 0
    });

    // let wallStack = new WallStack(this.scene, 900, 100, 50, 50, 5, 5);


    // let wall3 = new Wall(this, 300, 0, 100, 100);

    // walls.push(wall1, wall2, wall3);

    this.scene.matterCollision.addOnCollideStart({
      objectA: cube.sprite,
      // objectB: ground.sprite,
      callback: function(eventData) {
        const { bodyA, bodyB, gameObjectA, gameObjectB, pair } = eventData;

        // console.log(bodyA.mass, bodyB.mass);
        let bodyMass;

        if (bodyB.mass === Infinity) {
          bodyMass = 1;
        } else {
          bodyMass = bodyB.mass;
        }

        var bodyAMomentum = Vector.mult(bodyA.velocity, bodyA.mass);
        var bodyBMomentum = Vector.mult(bodyB.velocity, bodyMass);
        var relativeMomentum = Vector.sub(bodyAMomentum, bodyBMomentum);

        // это сила импульса
        console.log(Vector.magnitude(relativeMomentum));  

        // if (Vector.magnitude(relativeMomentum) > threshold) {
        //     // do something
        // }

        // var bodyAMomentum = Vector.mult(bodyAVelocity, bodyA.mass);
        // var bodyBMomentum = Vector.mult(bodyBVelocity, bodyB.mass);
        // var relativeMomentum = Vector.sub(bodyAMomentum, bodyBMomentum);

        // if (Vector.magnitude(relativeMomentum) > threshold) {
        //     // do something
        // }

        // bodyA & bodyB are the Matter bodies of the player and door respectively
        // gameObjectA & gameObjectB are the player and door respectively
        // pair is the raw Matter pair data
      },
      context: this
    });

    // this.matter.add.image(400, 550, 'platform', null, { isStatic: true });
  }

  scene: any;
}