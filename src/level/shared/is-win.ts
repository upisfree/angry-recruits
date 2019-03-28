import isAllSleeping from './is-all-sleeping';

export default function(scene) {
  let isNeedToCheckSleeping = scene.enemies.length === 0 || scene.shells.length === 0;

  if (isNeedToCheckSleeping) {
    if (isAllSleeping(scene)) { // микрооптимизации :)))
      if (scene.enemies.length === 0) {
        return true;
      } else if (scene.shells.length === 0 && scene.enemies.length > 0) {
        return false;
      }
    }
  }
}