import ASSETS from '../../assets';

export default function() {
  for (let k in ASSETS.IMAGES) {
    this.load.image(k, ASSETS.IMAGES[k]);
  }
}