import isAllSleeping from './is-all-sleeping';

export default function(shells, enemies, slingshot, shellsQueue) {
  // если будет лагать, то перенеси внутрь условий (пусть дублируется, но зато каждый тик не надо пробегаться по всему)
  if (isAllSleeping(shells, enemies, slingshot)) {
    if (enemies.length === 0) {
      return true;
    } else if (shellsQueue.length === 0 && enemies.length > 0) {
      return false;
    }
  }
}