export interface IDestructionOptions {
    steps?: number;
    momentum?: number;
    score?: {
        step?: number;
        destroy?: number;
    };
    particles?: any;
}
export default class Entity {
    type: string;
    scene: any;
    sprite: any;
    body: any;
    textureKey: string;
    noScore: boolean;
    isDestroyed: boolean;
    destructionSteps: number;
    destructionParticlesConfig: any;
    destructionMomentum: number;
    destructionScores: any;
    currentMomentum: number;
    currentDestructionStep: number;
    minimalMomentum: number;
    constructor(scene: any, x: number, y: number, type: string, textureKey: string, body: any, destructionOptions?: IDestructionOptions);
    onDestroy(sprite: any): void;
    onMomentumChange(): void;
    onCollideStart(e: any): void;
    getBodyBounds(): {
        w: number;
        h: number;
    };
    createDestroyParticles(): void;
}
