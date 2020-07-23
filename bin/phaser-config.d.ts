import LevelEditor from './editor/level';
declare const _default: {
    type: any;
    resolution: number;
    pixelArt: boolean;
    backgroundColor: string;
    parent: string;
    disableContextMenu: boolean;
    input: {
        mouse: {
            target: Window & typeof globalThis;
        };
        touch: {
            target: Window & typeof globalThis;
        };
    };
    physics: {
        default: string;
        matter: {
            enableSleeping: boolean;
            debug: boolean;
            debugBodyColor: number;
        };
    };
    scene: LevelEditor | import("./level/level-1").default[];
    scale: {
        mode: any;
        width: number;
        height: number;
        resolution: number;
    };
    plugins: {
        scene: {
            plugin: any;
            key: string;
            mapping: string;
        }[];
    };
};
export default _default;
