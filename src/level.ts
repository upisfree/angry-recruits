import * as Phaser from 'phaser';
import Wall from './wall';
const PhaserMatterCollisionPlugin = (<any>window).PhaserMatterCollisionPlugin;
const { Body, Bodies, Vector } = Phaser.Physics.Matter.Matter;

export default class Level {
  constructor(scene) {
    this.scene = scene;

    // оптимизация
    // let walls = [];

    let wall1 = new Wall(this.scene, 500, 400, 100, 100, { isStatic: true });
    let wall2 = new Wall(this.scene, 300, 0, 100, 100, { isStatic: false });
    // let wall3 = new Wall(this, 300, 0, 100, 100);

    // walls.push(wall1, wall2, wall3);

    // this.scene.matterCollision.addOnCollideStart({
    //   objectA: wall1.sprite,
    //   objectB: wall2.sprite,
    //   callback: function(eventData) {
    //     const { bodyA, bodyB, gameObjectA, gameObjectB, pair } = eventData;

    //     console.log(eventData.pair.collision);

    //     // var bodyAMomentum = Vector.mult(bodyAVelocity, bodyA.mass);
    //     // var bodyBMomentum = Vector.mult(bodyBVelocity, bodyB.mass);
    //     // var relativeMomentum = Vector.sub(bodyAMomentum, bodyBMomentum);

    //     // if (Vector.magnitude(relativeMomentum) > threshold) {
    //     //     // do something
    //     // }

    //     // bodyA & bodyB are the Matter bodies of the player and door respectively
    //     // gameObjectA & gameObjectB are the player and door respectively
    //     // pair is the raw Matter pair data
    //   },
    //   context: this
    // });

    // this.matter.add.image(400, 550, 'platform', null, { isStatic: true });
  }

  scene: any;
}