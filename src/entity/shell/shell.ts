import { default as Entity, IDestructionOptions } from '../entity';

export default class Shell extends Entity {
  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: IDestructionOptions = null
  ) {
    super(scene, x, y, textureKey, body, destructionOptions);

    scene.shells.push(this);
  }

  // onDestroy(sprite) {
  //   this.scene.enemies = this.scene.enemies.filter(e => e !== this);
  // }
}