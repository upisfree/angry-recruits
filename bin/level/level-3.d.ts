import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
declare const Level3_base: any;
export default class Level3 extends Level3_base {
    enemies: Array<Entity>;
    shells: Array<Shell>;
    entities: Array<Entity>;
    slingshot: Slingshot;
    levelData: any;
    nextLevel: any;
    winTimeout: number;
    score: number;
    zoom: number;
    isWin: boolean;
    winTimeEvent: any;
    scoreText: any;
    commissarWithDialog: any;
    preload: any;
    update: any;
    initDebugCamera: any;
    addEnvironment: any;
    cameraControls: any;
    constructor(config: any);
    create(): void;
    commissarText(t: any, d: any): {
        type: string;
        data: any;
        x: number;
        y: number;
        delay: any;
        duration: number;
        scale: number;
    };
}
export {};
