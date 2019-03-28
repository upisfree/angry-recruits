import CONFIG from '../config';
import ui from '../ui/ui';

export default function(scene, score) {
  if (CONFIG.EDITOR_MODE) {
    return;
  }

  scene.game.score += score;

  ui.get('.score-screen .score-text-value').textContent = scene.game.score;
}