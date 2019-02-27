import Phaser from './lib/phaser';
import phaserConfig from './phaser-config';

// start
let game;

// document.querySelector('#start-button').addEventListener('click', onload);
window.addEventListener('load', onload);
window.addEventListener('resize', onresize);

function onload() {
  game = new Phaser.Game(phaserConfig);

  console.log(game);

  onresize();
  
  // game.scale.startFullscreen();
}

function onresize() {
  let scale = Math.min(
    window.innerWidth / game.config.width,    
    window.innerHeight / game.config.height
  );
  
  game.canvas.style.transform = `translate(-50%, -50%) scale(${ scale })`;
  game.scale.resize(game.config.width, game.config.height);
}