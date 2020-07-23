import Shell from './shell';
export default class ExplosionShell extends Shell {
    velocityCutFactor: number;
    explosionForce: number;
    constructor(scene: any, x: any, y: any);
    activatePower(): boolean;
    showSmoke(): void;
}
