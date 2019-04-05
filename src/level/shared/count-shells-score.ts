import ui from '../../ui/ui';
import createScoreText from '../../ui/create-score-text';

export default function(scene, callback) {
  let shells = [];
  let animationDuration = 2500;

  scene.entities.forEach((e) => {
    if (e.type === 'shell' && !e.isShooted) {
      scene.score += e.destructionScores.destroy;
      ui.get('.score-screen .score-text-value').textContent = scene.score;

      createScoreText(scene, e, e.destructionScores.destroy);
    }
  });

  scene.time.addEvent({
    delay: animationDuration,
    callback: callback,
    callbackScope: this
  });
}