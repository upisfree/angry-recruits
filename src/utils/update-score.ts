import CONFIG from '../config';
import ui from '../ui/ui';

export default function(scene, score) {
  if (CONFIG.EDITOR_MODE || scene.game.isGameOver === true || scene.game.isLevelOver === true) {
    return;
  }

  scene.score += score;

  ui.get('.score-screen .score-text-value').textContent = scene.score;
}