import { default as Entity, IDestructionOptions } from '../entity';

export default class Enemy extends Entity {
  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: IDestructionOptions = null,
    noScore: boolean = false
  ) {
    super(scene, x, y, 'enemy', textureKey, body, destructionOptions);

    // теперь можно делать дождь из любых врагов (см. пятый уровень)!
    this.noScore = noScore;

    if (!this.noScore) {
      scene.enemies.push(this);      
    }
  }

  onDestroy(sprite) {
    this.scene.enemies = this.scene.enemies.filter(e => e !== this);
  }
}