import { default as Entity, IDestructionOptions } from '../entity';

export default class Enemy extends Entity {
  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: IDestructionOptions = null
  ) {
    super(scene, x, y, 'enemy', textureKey, body, destructionOptions);

    scene.enemies.push(this);
  }

  onDestroy(sprite) {
    this.scene.enemies = this.scene.enemies.filter(e => e !== this);
  }
}