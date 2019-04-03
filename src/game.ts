import CONFIG from './config';
import Phaser from './lib/phaser';
import VK from './lib/vk';
import phaserConfig from './phaser-config';
import ui from './ui/ui';
import resize from './platform/resize';
import orientationchange from './platform/orientationchange';

let game;
let subpoenasElement = document.querySelector('.subpoenas');
let uiContainer = ui.getUI();

subpoenasElement.addEventListener('click', startGame, { once: true });

if (!CONFIG.DEBUG_MODE) {
  console.log('%cчё лезешь сюда? пиздуй служить', 'font-size: 32pt');  
}

function startGame() {
  subpoenasElement.classList.remove('subpoenas-front');
  subpoenasElement.classList.add('subpoenas-back');

  ui.get('.subpoenas h1').textContent = 'ГРУЗИСЬ УЖЕ...';

  game = new Phaser.Game(phaserConfig);
  game.score = 0;
  game.isGameOver = false;
  game.isLevelOver = false;

  VK.init({
    apiId: CONFIG.VK_AUTH_APP_ID
  });

  window.addEventListener('resize', resize.bind(this, game));
  window.addEventListener('orientationchange', orientationchange.bind(this, game));

  resize(game);
}