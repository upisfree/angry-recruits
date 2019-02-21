import Phaser from '../../lib/phaser';
import { default as Enity, DestructionOptions } from '../enity';
const { Bodies } = Phaser.Physics.Matter.Matter;

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
}