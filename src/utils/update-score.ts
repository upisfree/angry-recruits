import CONFIG from '../config';

export default function(scene, score) {
  if (CONFIG.EDITOR_MODE) {
    return;
  }

  scene.game.score += score;

  scene.scoreText.setText(scene.game.score);
}