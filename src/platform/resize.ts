import ui from '../ui/ui';

export default function(game) {
  let scale = Math.min(
    window.innerWidth / game.config.width,
    window.innerHeight / game.config.height
  );
  
  let transformRule = `translate(-50%, -50%) scale(${ scale })`;

  game.canvas.style.transform = transformRule;
  game.scale.resize(game.config.width, game.config.height);

  ui.getUI().style.transform = transformRule;
}