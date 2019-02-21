import Phaser from './lib/phaser';
import phaserConfig from './phaser-config';

// start
window.onload = () => {
  new Phaser.Game(phaserConfig);
};



// export default class AngryRecruits extends Phaser.Game {
//   constructor(config) {
//     super(config);
//   }
// }

// // start
// var game;

// window.onload = () => {
//   game = new AngryRecruits(phaserConfig);
// };