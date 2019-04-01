import ASSETS from '../../assets';
import onAssetsLoadingProgress from '../../ui/on-assets-loading-progress';
import onAssetsLoadingComplete from '../../ui/on-assets-loading-complete';

export default function() {
  this.load.on('progress', onAssetsLoadingProgress);
  this.load.on('complete', onAssetsLoadingComplete);

  for (let k in ASSETS.IMAGES) {
    this.load.image(k, ASSETS.IMAGES[k]);
  }

  for (let k in ASSETS.SPRITESHEETS) {
    this.load.spritesheet(k, ASSETS.SPRITESHEETS[k].url, ASSETS.SPRITESHEETS[k].options);
  }

  for (let k in ASSETS.SOUNDS) {
    this.load.audio(k, ASSETS.SOUNDS[k]);
    // this.load.audioSprite('sound', ASSETS.SOUNDS[k].json, [ASSETS.SOUNDS[k].mp3]);
  }
}