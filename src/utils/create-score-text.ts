const ANIMATION_DURATION = 2500;
const FONT_SIZE = 64;

export default function(scene, entity, score) {
  let text = scene.add.text(
    entity.sprite.x,
    entity.sprite.y,
    score
  ).setFontSize(FONT_SIZE);

  scene.time.addEvent({
    delay: ANIMATION_DURATION,
    callback: () => {
      text.destroy();
    }
  });
}