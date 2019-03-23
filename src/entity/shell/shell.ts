import { default as Entity, IDestructionOptions } from '../entity';

export default class Shell extends Entity {
  isShooted: boolean = false; // флаг, чтобы нельзя было взять снаряд после выстрела

  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: IDestructionOptions = null
  ) {
    super(scene, x, y, 'shell', textureKey, body, destructionOptions);

    scene.shells.push(this);
  }

  // onDestroy(sprite) {
  //   this.scene.enemies = this.scene.enemies.filter(e => e !== this);
  // }
}