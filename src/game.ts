import CONFIG from './config';
import Phaser from './lib/phaser';
import phaserConfig from './phaser-config';
import resize from './platform/resize';
import VK from './lib/vk';

let game;

window.addEventListener('load', onload);

function onload() {
  game = new Phaser.Game(phaserConfig);
  game.score = 0;
  game.isGameOver = false;

  VK.init({
    apiId: CONFIG.VK_AUTH_APP_ID
  });

  window.addEventListener('resize', resize.bind(this, game));
  resize(game);
}