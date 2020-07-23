import { default as Entity, IDestructionOptions } from '../entity';
export default class Shell extends Entity {
    isShooted: boolean;
    isDirty: boolean;
    isInSlingshot: boolean;
    isMaxTensionReached: boolean;
    velocityCutFactor: number;
    pathGroup: any;
    lastBlinkTime: number;
    closedEyesDuration: number;
    blinkInterval: number;
    constructor(scene: any, x: number, y: number, textureKey: string, body: any, destructionOptions?: IDestructionOptions);
    activatePower(): void;
    update(): void;
    private updateBlinking;
}
