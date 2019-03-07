import ASSETS from '../../assets';

export default function() {
  for (let k in ASSETS.IMAGES) {
    this.load.image(k, ASSETS.IMAGES[k]);
  }

  for (let k in ASSETS.SPRITESHEETS) {
    this.load.spritesheet(k, ASSETS.SPRITESHEETS[k].url, ASSETS.SPRITESHEETS[k].options);
  }
}