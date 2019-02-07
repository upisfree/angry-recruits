import * as Phaser from 'phaser';

// class SimpleGame {
//   constructor() {
//     this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: this.preload, create: this.create });
//   }

//   game: Phaser.Game;

//   preload() {
//     this.game.load.image('logo', 'assets/drone.png');
//   }

//   create() {
//     var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
//     logo.anchor.setTo(0.5, 0.5);
//   }
// }

// window.onload = () => {
//   var game = new SimpleGame();
// };

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
    // this.load.image('logo', 'assets/drone.png');
}

function create ()
{
    this.add.image(400, 300, 'logo');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}