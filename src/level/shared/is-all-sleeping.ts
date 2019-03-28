const MOTION_SLEEP_THRESHOLD = 0.08; // from Matter.Sleeping

// у нас выключен sleeping, потому что иногда тела не обновляются, поэтому
// считаем сами: http://brm.io/matter-js/docs/classes/Body.html#property_motion
function getMotion(body) {
  return body.speed * body.speed + body.angularSpeed * body.angularSpeed;
}

function isSleeping(body) {
  var timeFactor = body.timeScale * body.timeScale * body.timeScale;

  if (getMotion(body) > MOTION_SLEEP_THRESHOLD * timeFactor) {
    return false;
  } else {
    return true;
  }
}

export default function(scene) {
  // текущий снаряд подвешен и не может уснуть :(
  let isShellsSleeping  = scene.shells.every(e => isSleeping(e.body) || e === scene.slingshot.currentShell);
  let isEnemiesSleeping = scene.enemies.every(e => isSleeping(e.body));

  return isShellsSleeping && isEnemiesSleeping;
}
