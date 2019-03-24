import updateScore from '../../utils/update-score';
import createScoreText from '../../utils/create-score-text';

export default function(scene, callback) {
  let shells = [];
  let animationDuration = 2500;
  let callbackDelay = 0;

  scene.entities.forEach((e) => {
    if (e.type === 'shell' && !e.isShooted) {
      updateScore(scene, e.destructionScores.destroy);
      createScoreText(scene, e, e.destructionScores.destroy);

      callbackDelay += animationDuration;
    }
  });

  scene.time.addEvent({
    delay: callbackDelay,
    callback: callback,
    callbackScope: this
  });
}