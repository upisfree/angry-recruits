import CONFIG from './config';
import Phaser from './lib/phaser';
import VK from './lib/vk';
import phaserConfig from './phaser-config';
import ui from './ui/ui';
import resize from './platform/resize';

let game;
let subpoenasElement = document.querySelector('.subpoenas');
let uiContainer = ui.getUI();

// TODO: iOS? touchstart? tap?
subpoenasElement.addEventListener('click', startGame);

function startGame() {
  subpoenasElement.classList.remove('subpoenas-front');
  subpoenasElement.classList.add('subpoenas-back');

  game = new Phaser.Game(phaserConfig);
  game.score = 0;
  game.isGameOver = false;
  game.isLevelOver = false;

  VK.init({
    apiId: CONFIG.VK_AUTH_APP_ID
  });

  window.addEventListener('resize', resize.bind(this, game, uiContainer));
  resize(game, uiContainer);
}