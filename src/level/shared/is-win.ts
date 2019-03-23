import isAllSleeping from './is-all-sleeping';

export default function(shells, enemies, slingshot) {
  let isNeedToCheckSleeping = enemies.length === 0 || shells.length === 0;

  if (isNeedToCheckSleeping) {
    if (isAllSleeping(shells, enemies, slingshot)) { // микрооптимизации :)))
      if (enemies.length === 0) {
        return true;
      } else if (shells.length === 0 && enemies.length > 0) {
        return false;
      }
    }
  }
}