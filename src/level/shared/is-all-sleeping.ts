const MOTION_SLEEP_THRESHOLD = 0.1; // from Matter.Sleeping

// у нас выключен sleeping, потому что иногда тела не обновляются, поэтому
// считаем сами: http://brm.io/matter-js/docs/classes/Body.html#property_motion
function getMotion(body) {
  return body.speed * body.speed + body.angularSpeed * body.angularSpeed;
}

function isSleeping(body) {
  let timeFactor = body.timeScale * body.timeScale * body.timeScale;

  if (getMotion(body) > MOTION_SLEEP_THRESHOLD * timeFactor) {
    return false;
  } else {
    return true;
  }
}

export default function(scene) {
  let isEntitiesSleeping = scene.entities
    .filter(e => !e.isDestroyed && !e.body.ignoreGravity)
    .every(e => isSleeping(e.body));

  return isEntitiesSleeping;
}
