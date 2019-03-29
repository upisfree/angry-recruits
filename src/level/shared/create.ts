import CONFIG from '../../config';
import generateEntities from './generate-entities';

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

  this.enemies = [];
  this.shells = [];

  this.cameras.main.setZoom(CONFIG.DEFAULT_ZOOM);

  this.addEnvironment();

  this.entities = generateEntities(this.levelData, this);

  this.cameras.main.pan(this.enemies[0].sprite.x, this.enemies[0].sprite.y, 0);
  this.winTimeEvent = this.time.addEvent({
    delay: CONFIG.SLINGSHOT_PAN_DELAY,
    callback: () => {
      this.cameras.main.pan(this.slingshot.x, this.slingshot.y, CONFIG.FLIGHT_ZOOM_DURATION, CONFIG.FLIGHT_ZOOM_EASING);
    },
    callbackScope: this
  });
}