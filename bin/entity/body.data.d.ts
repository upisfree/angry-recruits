declare const BODY_DATA: {
    generator_info: string;
    "recruit-shell": {
        type: string;
        label: string;
        isStatic: boolean;
        fixtures: ({
            label: string;
            density: number;
            restitution: number;
            friction: number;
            frictionAir: number;
            frictionStatic: number;
            isSensor: boolean;
            vertices: {
                x: number;
                y: number;
            }[][];
            circle?: undefined;
        } | {
            label: string;
            density: number;
            isSensor: boolean;
            circle: {
                x: number;
                y: number;
                radius: number;
            };
            restitution?: undefined;
            friction?: undefined;
            frictionAir?: undefined;
            frictionStatic?: undefined;
            vertices?: undefined;
        })[];
    };
    "fat-shell": {
        type: string;
        label: string;
        isStatic: boolean;
        fixtures: ({
            label: string;
            density: number;
            restitution: number;
            isSensor: boolean;
            circle: {
                x: number;
                y: number;
                radius: number;
            };
        } | {
            label: string;
            density: number;
            isSensor: boolean;
            circle: {
                x: number;
                y: number;
                radius: number;
            };
            restitution?: undefined;
        })[];
    };
    "explosion-shell": {
        type: string;
        label: string;
        isStatic: boolean;
        fixtures: ({
            label: string;
            density: number;
            restitution: number;
            friction: number;
            frictionAir: number;
            frictionStatic: number;
            isSensor: boolean;
            circle: {
                x: number;
                y: number;
                radius: number;
            };
        } | {
            label: string;
            density: number;
            isSensor: boolean;
            circle: {
                x: number;
                y: number;
                radius: number;
            };
            restitution?: undefined;
            friction?: undefined;
            frictionAir?: undefined;
            frictionStatic?: undefined;
        })[];
    };
    "commissar-1": {
        type: string;
        fixtures: ({
            label: string;
            density: number;
            restitution: number;
            friction: number;
            frictionAir: number;
            frictionStatic: number;
            vertices: {
                x: number;
                y: number;
            }[][];
            isSensor?: undefined;
            circle?: undefined;
        } | {
            label: string;
            isSensor: boolean;
            circle: {
                x: number;
                y: number;
                radius: number;
            };
            density?: undefined;
            restitution?: undefined;
            friction?: undefined;
            frictionAir?: undefined;
            frictionStatic?: undefined;
            vertices?: undefined;
        })[];
    };
};
export default BODY_DATA;
