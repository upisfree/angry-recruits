import Phaser from '../lib/phaser';

const ANIMATION_DURATION = 2500;
const FONT_SIZE = 48;

export default function(scene, entity, score) {
  let text = scene.add.text(
    entity.sprite.x,
    entity.sprite.y,
    score,
    {
      fontSize: FONT_SIZE,
      fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
    }
  ).setOrigin(0.5, 0.5);

  let tween = scene.tweens.add({
      targets: text,
      y: entity.sprite.y - 150,
      scaleX: 2,
      scaleY: 2,
      alpha: 0,
      ease: 'Quad.easeOut',
      duration: 1000,
      onComplete: () => {
        text.destroy();
      },
  });
}