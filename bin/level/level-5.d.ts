import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
declare const Level5_base: any;
export default class Level5 extends Level5_base {
    enemies: Array<Entity>;
    shells: Array<Shell>;
    entities: Array<Entity>;
    slingshot: Slingshot;
    levelData: any;
    nextLevel: any;
    score: number;
    winTimeout: number;
    zoom: number;
    isWin: boolean;
    winTimeEvent: any;
    scoreText: any;
    commissarWithDialog: any;
    commissarsCount: number;
    preload: any;
    initDebugCamera: any;
    addEnvironment: any;
    cameraControls: any;
    distanceBetweenShellAndEnemy: number;
    enemyWidth: number;
    constructor(config: any);
    create(): void;
    update(): void;
    commissarText(t: any, d: any): {
        type: string;
        data: any;
        x: number;
        y: number;
        delay: any;
        duration: number;
        scale: number;
    };
    spawnCommissar(): void;
}
export {};
