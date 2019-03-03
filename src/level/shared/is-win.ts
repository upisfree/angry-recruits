import isAllSleeping from './is-all-sleeping';

export default function(shells, enemies, slingshot, shellsQueue) {
  let isNeedToCheckSleeping = enemies.length === 0 || shellsQueue.length === 0;

  if (isNeedToCheckSleeping) {
    if (isAllSleeping(shells, enemies, slingshot)) { // микрооптимизации :)))
      if (enemies.length === 0) {
        return true;
      } else if (shellsQueue.length === 0 && enemies.length > 0) {
        return false;
      }
    }
  }
}