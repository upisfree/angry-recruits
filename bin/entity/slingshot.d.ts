import { default as Entity } from './entity';
import Shell from './shell/shell';
export default class Slingshot {
    x: number;
    y: number;
    scene: any;
    constraint: any;
    previousShell: Shell;
    currentShell: Shell;
    frontSprite: any;
    backSprite: any;
    rubberSpriteFront: any;
    rubberSpriteBack: any;
    isNewShellSpawned: boolean;
    lastShootTime: number;
    shellDirtyTime: number;
    lastPathSpawnTime: number;
    minTensionDistance: number;
    maxTensionDistanceX: number;
    maxTensionDistanceY: number;
    shellSpawnTime: number;
    pathSpawnTime: number;
    slingshotSpritesScaleFactor: number;
    constructor(scene: any, x: any, y: any);
    private createSprites;
    private getNewShell;
    private createConstraint;
    private updateRubber;
    private updatePrimaryPointer;
    private shootTightShell;
    private updateOnDirtyCurrentShell;
    private updateFlightPath;
    private updateNewShellSpawn;
    private afterUpdateCallback;
}
export declare class SlingshotEntity extends Entity {
    constructor(scene: any, x: any, y: any);
}
