import { default as Entity, IDestructionOptions } from '../entity';
export default class Enemy extends Entity {
    constructor(scene: any, x: number, y: number, textureKey: string, body: any, destructionOptions?: IDestructionOptions, noScore?: boolean);
    onDestroy(sprite: any): void;
}
