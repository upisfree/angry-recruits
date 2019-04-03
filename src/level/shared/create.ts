import CONFIG from '../../config';
import generateEntities from './generate-entities';
import randomBetween from '../../utils/random-between';

export default function() {
  this.game.isLevelOver = false;

  // здесь я поправил Phaser.Physics.Matter.PointerConstraint#getBodyPart
  // чтобы можно было брать только ещё невыпущенные снаряды
  this.matter.add.mouseSpring();

  this.cameras.main.setBackgroundColor(CONFIG.BACKGROUND_COLOR);

  if (CONFIG.DEBUG_MODE) {
    this.matter.world.createDebugGraphic();
    this.initDebugCamera();
  }

  this.score = this.game.score;

  this.enemies = [];
  this.shells = [];

  this.sound.stopAll();

  this.winTimeEvent = null;

  this.cameras.main.setZoom(CONFIG.DEFAULT_ZOOM);

  this.addEnvironment(this.nextLevel);

  this.entities = generateEntities(this.levelData, this);

  this.cameras.main.setZoom(this.zoom);

  this.cameras.main.pan(this.enemies[0].sprite.x, this.enemies[0].sprite.y, 0);
  this.time.addEvent({
    delay: CONFIG.SLINGSHOT_PAN_DELAY,
    callback: () => {
      this.cameras.main.pan(this.slingshot.x, this.slingshot.y, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);
    },
    callbackScope: this
  });

  this.time.addEvent({
    delay: 5000,
    callback: () => {
      if (this.enemies.length && this.game.hasFocus) {
        this.sound.playAudioSprite('soundsprite', `commissar-${ randomBetween(1, 12) }`, {
          volume: 1 - 0.25 * Math.random(),
          rate: (this.nextLevel) ? 1 : 0.75 - 0.25 * Math.random(), // 0.75...1.0
          delay: Math.random() * 7
        });
      }
    },
    callbackScope: this,
    loop: true
  });
}