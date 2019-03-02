import CONFIG from './config';
import Phaser from './lib/phaser';
import phaserConfig from './phaser-config';
import resize from './platform/resize';

let game;

window.addEventListener('load', onload);

function onload() {
  game = new Phaser.Game(phaserConfig);

  window.addEventListener('resize', resize.bind(this, game));

  resize(game);
}