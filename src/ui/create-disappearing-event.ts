import Phaser from '../lib/phaser';

const FONT_SIZE = 48;

// types: text & sprite
export default function(scene, x, y, type, data, scale = 1, animationDuration = 2500) {
  let e;

  switch (type) {
    case 'text':
      e = scene.add.text(
        x,
        y,
        data,
        {
          fontSize: FONT_SIZE,
          fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
        }
      ).setOrigin(0.5, 0.5)
       .setScale(scale, scale);

      break;
    case 'sprite':
      e = scene.add.sprite(
        x,
        y,
        data,
      ).setOrigin(0.5, 0.5)
       .setScale(scale, scale);

      break;
  }

  if (animationDuration) {
    scene.tweens.add({
      targets: e,
      y: y - 150,
      scaleX: 1.5,
      scaleY: 1.5,
      alpha: 0,
      ease: 'Quad.easeOut',
      duration: animationDuration,
      onComplete: () => {
        e.destroy();
      },
    });
  } else {
    scene.time.addEvent({
      delay: 2000,
      callback: () => {
        e.destroy();
      },
      callbackScope: this
    });
  }
}