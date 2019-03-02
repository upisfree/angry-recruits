export default function(game) {
  let scale = Math.min(
    window.innerWidth / game.config.width,
    window.innerHeight / game.config.height
  );
  
  game.canvas.style.transform = `translate(-50%, -50%) scale(${ scale })`;
  game.scale.resize(game.config.width, game.config.height);
}