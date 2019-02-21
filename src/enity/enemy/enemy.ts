import { default as Enity, DestructionOptions } from '../enity';

export default class Enemy extends Enity {
  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: DestructionOptions = null
  ) {
    super(scene, x, y, textureKey, body, destructionOptions);

    scene.enemies.push(this);
  }

  onDestroy(sprite) {
    this.scene.enemies = this.scene.enemies.filter(e => e !== this);
  }
}