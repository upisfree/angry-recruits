import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import Slingshot from '../entity/slingshot';
declare const Level1_base: any;
export default class Level1 extends Level1_base {
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
    preload: any;
    update: any;
    initDebugCamera: any;
    addEnvironment: any;
    cameraControls: any;
    constructor(config: any);
    create(): void;
}
export {};
