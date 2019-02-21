import { default as Enity, DestructionOptions } from '../enity';

export default class Shell extends Enity {
  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: DestructionOptions = null
  ) {
    super(scene, x, y, textureKey, body, destructionOptions);

    scene.shells.push(this);
  }

  // onDestroy(sprite) {
  //   this.scene.enemies = this.scene.enemies.filter(e => e !== this);
  // }
}