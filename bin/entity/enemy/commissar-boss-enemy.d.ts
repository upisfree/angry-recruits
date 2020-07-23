import Enemy from './enemy';
export default class CommissarBossEnemy extends Enemy {
    healthBar: any;
    healthBarWidth: number;
    constructor(scene: any, x: any, y: any, noScore?: boolean);
    onMomentumChange(): void;
    onDestroy(sprite: any): void;
}
