/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets.ts":
/*!***********************!*\
  !*** ./src/assets.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ASSETS = {
    IMAGES: {
        'transparency': 'assets/transparency.png',
        'grass-top': 'assets/environment/grass/grass-top.png',
        'grass-top-end': 'assets/environment/grass/grass-top-end.png',
        'grass-bottom': 'assets/environment/grass/grass-bottom.png',
        'grass-bottom-end': 'assets/environment/grass/grass-bottom-end.png',
        'sky': 'assets/environment/sky.jpg',
        'sky-end': 'assets/environment/sky-end.jpg',
        'lenin': 'assets/environment/lenin.jpg',
        'tank': 'assets/event/tank.jpg',
        'dagestan-sign-1': 'assets/event/sign/dagestan-sign-1.jpg',
        'dagestan-sign-2': 'assets/event/sign/dagestan-sign-2.jpg',
        'ingush-sign-1': 'assets/event/sign/ingush-sign-1.jpg',
        'ingush-sign-2': 'assets/event/sign/ingush-sign-2.jpg',
        'slingshot-front': 'assets/environment/slingshot/slingshot-front.png',
        'slingshot-back': 'assets/environment/slingshot/slingshot-back.png',
        'slingshot-rubber': 'assets/environment/slingshot/slingshot-rubber.png',
        'path-dot': 'assets/particle/path-dot.png',
        'banned-organisation': 'assets/event/banned-organisation.png',
        'wooden-wall-1': 'assets/wall/wood/wooden-wall-1.png',
        'wooden-wall-2': 'assets/wall/wood/wooden-wall-2.png',
        'concrete-wall-1': 'assets/wall/concrete/concrete-wall-1.png',
        'concrete-wall-2': 'assets/wall/concrete/concrete-wall-2.png',
        'commissar-1': 'assets/enemy/commissar-1.png',
        'commissar-2': 'assets/enemy/commissar-2.png',
        'recruit-shell': 'assets/shell/recruit/recruit-shell.png',
        'recruit-shell-sleep': 'assets/shell/recruit/recruit-shell-sleep.png',
        'recruit-shell-angry': 'assets/shell/recruit/recruit-shell-angry.png',
        'fat-shell': 'assets/shell/fat/fat-shell.png',
        'fat-shell-sleep': 'assets/shell/fat/fat-shell-sleep.png',
        'fat-shell-angry': 'assets/shell/fat/fat-shell-angry.png',
        'explosion-shell': 'assets/shell/explosion/explosion-shell.png',
        'explosion-shell-sleep': 'assets/shell/explosion/explosion-shell-sleep.png',
        'explosion-shell-angry': 'assets/shell/explosion/explosion-shell-angry.png',
    },
    SPRITESHEETS: {
        'smoke': {
            url: 'assets/particle/smoke.png',
            options: {
                frameWidth: 204,
                frameHeight: 204
            }
        }
    },
    SOUNDS: {
        'ambient': './assets/sound/ambient.mp3'
    },
    SOUNDSPRITES: {
        'soundsprite': {
            json: './assets/sound/soundsprite.json',
            mp3: './assets/sound/soundsprite.mp3',
        }
    }
};
exports.default = ASSETS;


/***/ }),

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CONFIG = {
    DEBUG_MODE: false,
    EDITOR_MODE: false,
    EDITOR_URL: 'http://localhost:1488/',
    SCORE_URL: 'api.php?csurl=http://82.202.221.249:8888/score',
    BACKGROUND_COLOR: '#ffffff',
    SLINGSHOT_PAN_DELAY: 1500,
    FLIGHT_ZOOM: 0.75,
    FLIGHT_ZOOM_DURATION: 2000,
    FLIGHT_ZOOM_EASING: 'Sine.easeInOut',
    DEFAULT_ZOOM: 0.55,
    MIN_ZOOM: 0.25,
    MAX_ZOOM: 1,
};
exports.default = CONFIG;


/***/ }),

/***/ "./src/editor/level.ts":
/*!*****************************!*\
  !*** ./src/editor/level.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//////////////////////////////////////////////////////////
// нажать на сущность в левом углу, чтобы создать новую //
// чтобы выбрать сущность, кликни на неё                //
// чтобы перетащить — тащи                              //
//                                                      //
// S — сохранить уровень                                //
// Q & E — зум камеры                                   //
// A & D — поворот сущности                             //
// Z & C — поворот сущности на 45 градусов              //
// BracketLeft & BracketRight — скейл по X              //
// Quote & Backslash — скейл по Y                       //
//////////////////////////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var preload_1 = __webpack_require__(/*! ../level/shared/preload */ "./src/level/shared/preload.ts");
var add_environment_1 = __webpack_require__(/*! ../level/shared/add-environment */ "./src/level/shared/add-environment.ts");
var entities_list_1 = __webpack_require__(/*! ../entity/entities-list */ "./src/entity/entities-list.ts");
var Body = phaser_1.default.Physics.Matter.Matter.Body;
var level_5_data_1 = __webpack_require__(/*! ../level/data/level-5.data */ "./src/level/data/level-5.data.ts");
var LEVEL_NAME = 'level-5';
var LEVEL_DATA = level_5_data_1.default;
var ENTITY_SELECTED_COLOR = 0x00ffff;
var ETHALON_ENTITY_START_POSITION_X = 150;
var ETHALON_ENTITY_START_POSITION_Y = -700;
var NEW_ENTITY_START_POSITION_X = 3000;
var NEW_ENTITY_START_POSITION_Y = -700;
var LevelEditor = /** @class */ (function (_super) {
    __extends(LevelEditor, _super);
    function LevelEditor(config) {
        var _this = _super.call(this, config) || this;
        _this.preload = preload_1.default.bind(_this);
        _this.addEnvironment = add_environment_1.default.bind(_this);
        _this.enemies = [];
        _this.shells = [];
        _this.entities = [];
        // CONFIG.MIN_ZOOM = 0.1;
        config_1.default.MAX_ZOOM = 2;
        return _this;
    }
    LevelEditor.prototype.create = function () {
        var _this = this;
        this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
        this.matter.add.mouseSpring();
        this.matter.world.disableGravity();
        this.matter.world.createDebugGraphic();
        this.cameras.main.setZoom(config_1.default.DEFAULT_ZOOM);
        this.add.tileSprite(this.game.config.width / 2, this.game.config.height / 2, this.game.config.width * 6, this.game.config.height * 6, 'transparency');
        this.addEnvironment();
        this.cameras.main.setBackgroundColor('#f0f0f0');
        this.keyS = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.S);
        this.keyA = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.D);
        this.keyZ = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.Z);
        this.keyC = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.C);
        this.keyPlus = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.PLUS);
        this.keyMinus = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.MINUS);
        this.keyBracketLeft = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.OPEN_BRACKET);
        this.keyBracketRight = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.CLOSED_BRACKET);
        this.keyQuote = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.QUOTES);
        this.keyBackslash = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.BACK_SLASH);
        this.keyBackspace = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.BACKSPACE);
        this.keyDelete = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.DELETE);
        this.initCamera();
        this.displayAllEnities();
        this.levelNameText = this.add.text(100, -1900, LEVEL_NAME).setFontSize(128);
        if (LEVEL_DATA) {
            LEVEL_DATA.forEach(function (e) {
                _this.newEntity(e);
            });
        }
        this.input.keyboard.on('keydown_S', function (e) {
            fetch(config_1.default.EDITOR_URL, {
                method: 'POST',
                body: _this.generateJson(),
            });
        });
    };
    LevelEditor.prototype.update = function (time, delta) {
        this.cameraControls.update(delta);
        var rotationStep = Math.PI / 128;
        var scaleStep = 0.05;
        var keyDownDuration = 100;
        var cur = this.currentEntity;
        if (cur) {
            if (phaser_1.default.Input.Keyboard.DownDuration(this.keyBracketLeft, keyDownDuration)) {
                cur.sprite.scaleX -= scaleStep;
                if (cur.sprite.scaleX <= 1) {
                    cur.sprite.scaleX = 1;
                }
            }
            else if (phaser_1.default.Input.Keyboard.DownDuration(this.keyBracketRight, keyDownDuration)) {
                cur.sprite.scaleX += scaleStep;
            }
            else if (phaser_1.default.Input.Keyboard.DownDuration(this.keyQuote, keyDownDuration)) {
                cur.sprite.scaleY -= scaleStep;
                if (cur.sprite.scaleY <= 1) {
                    cur.sprite.scaleY = 1;
                }
            }
            else if (phaser_1.default.Input.Keyboard.DownDuration(this.keyBackslash, keyDownDuration)) {
                cur.sprite.scaleY += scaleStep;
            }
            else if (phaser_1.default.Input.Keyboard.DownDuration(this.keyA)) {
                cur.sprite.rotation -= rotationStep;
            }
            else if (phaser_1.default.Input.Keyboard.DownDuration(this.keyD, keyDownDuration)) {
                cur.sprite.rotation += rotationStep;
            }
            else if (phaser_1.default.Input.Keyboard.JustDown(this.keyZ)) {
                cur.sprite.rotation -= Math.PI / 4;
            }
            else if (phaser_1.default.Input.Keyboard.JustDown(this.keyC)) {
                cur.sprite.rotation += Math.PI / 4;
            }
            else if (phaser_1.default.Input.Keyboard.DownDuration(this.keyBackspace, keyDownDuration) || phaser_1.default.Input.Keyboard.DownDuration(this.keyDelete, keyDownDuration)) {
                this.entities = this.entities.filter(function (e) { return e !== cur; });
                cur.sprite.destroy();
            }
        }
    };
    LevelEditor.prototype.initCamera = function () {
        var cursors = this.input.keyboard.createCursorKeys();
        var controlConfig = {
            camera: this.cameras.main,
            left: cursors.left,
            right: cursors.right,
            up: cursors.up,
            down: cursors.down,
            zoomIn: this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.Q),
            zoomOut: this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.E),
            acceleration: 0.06,
            drag: 0.0005,
            maxSpeed: 1.0
        };
        this.cameraControls = new phaser_1.default.Cameras.Controls.SmoothedKeyControl(controlConfig);
    };
    LevelEditor.prototype.displayAllEnities = function () {
        var x = ETHALON_ENTITY_START_POSITION_X;
        var y = ETHALON_ENTITY_START_POSITION_Y;
        var _loop_1 = function (i) {
            var entity = new entities_list_1.PlainEntitiesList[i](this_1, x, y);
            entity.body.isStatic = true;
            entity.destructionMomentum = Infinity;
            entity.sprite.setInteractive();
            entity.sprite.on('pointerdown', function () {
                var ne = new entities_list_1.KeyedEntitiesList[entity.constructor.name](this.scene, NEW_ENTITY_START_POSITION_X, NEW_ENTITY_START_POSITION_Y);
                ne.type = '_editor';
                ne.body.frictionAir = 1;
                ne.destructionMomentum = Infinity;
                ne.sprite.setInteractive();
                this.scene.entities.forEach(function (e) { return e.sprite.clearTint(); });
                ne.sprite.setTint(ENTITY_SELECTED_COLOR);
                this.scene.entities.push(ne);
                this.scene.currentEntity = ne;
                ne.sprite.on('pointerdown', this.scene.onNewEntityClick);
            });
            x += entity.sprite.displayWidth + 100;
        };
        var this_1 = this;
        for (var i = 0; i < entities_list_1.PlainEntitiesList.length; i++) {
            _loop_1(i);
        }
    };
    LevelEditor.prototype.generateJson = function () {
        var out = {
            name: LEVEL_NAME,
            entities: [],
        };
        var slingshotEntity;
        var push = function (v) {
            out.entities.push({
                type: v.constructor.name,
                x: v.sprite.x,
                y: v.sprite.y,
                rotation: v.sprite.rotation,
                scaleX: v.sprite.scaleX,
                scaleY: v.sprite.scaleY
            });
        };
        this.entities.forEach(function (v) {
            if (v.constructor.name !== 'SlingshotEntity') {
                push(v);
            }
            else {
                slingshotEntity = v;
            }
        });
        push(slingshotEntity); // потому что рогатка должна спаунится всегда после снарядов
        return JSON.stringify(out);
    };
    LevelEditor.prototype.newEntity = function (e) {
        var ne = new entities_list_1.KeyedEntitiesList[e.type](this, e.x, e.y);
        ne.type = '_editor';
        ne.sprite
            .setScale(e.scaleX, e.scaleY)
            .setRotation(e.rotation);
        ne.body.frictionAir = 1;
        ne.destructionMomentum = Infinity;
        ne.sprite.setInteractive();
        this.entities.push(ne);
        ne.sprite.on('pointerdown', this.onNewEntityClick);
    };
    LevelEditor.prototype.getEntityData = function (e) {
        return {
            type: e.constructor.name,
            x: e.sprite.x,
            y: e.sprite.y,
            rotation: e.sprite.rotation,
            scaleX: e.sprite.scaleX,
            scaleY: e.sprite.scaleY
        };
    };
    LevelEditor.prototype.onNewEntityClick = function (e) {
        if (e.primaryDown) { // левая кнопочка
            this.scene.entities.forEach(function (e) { return e.sprite.clearTint(); });
            this.setTint(ENTITY_SELECTED_COLOR);
            this.scene.currentEntity = this.entityInstance;
        }
        else { // правая кнопочка
            var copyData = this.scene.getEntityData(this.entityInstance);
            copyData.x = NEW_ENTITY_START_POSITION_X;
            copyData.y = NEW_ENTITY_START_POSITION_Y;
            this.scene.newEntity(copyData);
        }
    };
    return LevelEditor;
}(phaser_1.default.Scene));
exports.default = LevelEditor;


/***/ }),

/***/ "./src/entity/body.data.ts":
/*!*********************************!*\
  !*** ./src/entity/body.data.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BODY_DATA = {
    "generator_info": "Shape definitions generated with PhysicsEditor. Visit https://www.codeandweb.com/physicseditor",
    "recruit-shell": {
        "type": "fromPhysicsEditor",
        "label": "recruit-shell",
        "isStatic": false,
        "fixtures": [
            {
                "label": "outline",
                "density": 0.0048,
                "restitution": 0.65,
                "friction": 1,
                "frictionAir": 0.00001,
                "frictionStatic": 100,
                "isSensor": false,
                "vertices": [
                    [{ "x": 11, "y": 125 }, { "x": 18, "y": 126 }, { "x": 160, "y": 80 }, { "x": 158, "y": 72 }, { "x": 148, "y": 50 }, { "x": 122, "y": 1 }, { "x": 121, "y": 1 }, { "x": 7, "y": 116 }],
                    [{ "x": 164, "y": 27 }, { "x": 157, "y": 14 }, { "x": 153, "y": 13 }, { "x": 148, "y": 50 }, { "x": 153, "y": 49 }, { "x": 159, "y": 43 }],
                    [{ "x": 23, "y": 134 }, { "x": 26, "y": 134 }, { "x": 160, "y": 80 }, { "x": 18, "y": 126 }],
                    [{ "x": 144, "y": 6 }, { "x": 133, "y": 2 }, { "x": 122, "y": 1 }, { "x": 148, "y": 50 }, { "x": 153, "y": 13 }],
                    [{ "x": -2, "y": 89 }, { "x": 5, "y": 115 }, { "x": 99, "y": 7 }, { "x": 62, "y": 7 }, { "x": 26, "y": 23 }, { "x": 14, "y": 35 }, { "x": 5, "y": 49 }, { "x": -1, "y": 68 }],
                    [{ "x": 72, "y": 159 }, { "x": 96, "y": 159 }, { "x": 111, "y": 155 }, { "x": 160, "y": 80 }, { "x": 26, "y": 134 }, { "x": 40, "y": 146 }, { "x": 52, "y": 153 }],
                    [{ "x": 39, "y": 14 }, { "x": 26, "y": 23 }, { "x": 62, "y": 7 }],
                    [{ "x": 135, "y": 142 }, { "x": 146, "y": 129 }, { "x": 154, "y": 114 }, { "x": 158, "y": 100 }, { "x": 160, "y": 80 }, { "x": 111, "y": 155 }, { "x": 127, "y": 147 }],
                    [{ "x": 109, "y": 3 }, { "x": 99, "y": 7 }, { "x": 5, "y": 115 }, { "x": 7, "y": 116 }, { "x": 121, "y": 1 }]
                ]
            },
            {
                "label": "editor",
                "density": 0,
                "isSensor": true,
                "circle": {
                    "x": 84.16636883494965,
                    "y": 83.24955325242453,
                    "radius": 200.69757330019453
                }
            }
        ]
    },
    "fat-shell": {
        "type": "fromPhysicsEditor",
        "label": "fat-shell",
        "isStatic": false,
        "fixtures": [
            {
                "label": "outline",
                "density": 0.015,
                "restitution": 0.35,
                "isSensor": false,
                "circle": {
                    "x": 0,
                    "y": 0,
                    "radius": 75
                }
            },
            {
                "label": "editor",
                "density": 0,
                "isSensor": true,
                "circle": {
                    "x": 0,
                    "y": 0,
                    "radius": 200.69757330019453
                }
            }
        ]
    },
    "explosion-shell": {
        "type": "fromPhysicsEditor",
        "label": "explosion-shell",
        "isStatic": false,
        "fixtures": [
            {
                "label": "outline",
                "density": 0.001,
                "restitution": 0.35,
                "friction": 1,
                "frictionAir": 0.00001,
                "frictionStatic": 100,
                "isSensor": false,
                "circle": {
                    "x": 0,
                    "y": 0,
                    "radius": 75
                }
            },
            {
                "label": "editor",
                "density": 0,
                "isSensor": true,
                "circle": {
                    "x": 0,
                    "y": 0,
                    "radius": 200.69757330019453
                }
            }
        ]
    },
    "commissar-1": {
        "type": "fromPhysicsEditor",
        "fixtures": [
            {
                "label": "outline",
                "density": 0.0025,
                "restitution": 0.25,
                "friction": 1,
                "frictionAir": 0.00001,
                "frictionStatic": 100,
                "vertices": [
                    [{ "x": 15, "y": 141 }, { "x": 34, "y": 154 }, { "x": 70, "y": 5 }, { "x": 60, "y": 9 }, { "x": 5, "y": 77 }, { "x": 2, "y": 82 }, { "x": 0, "y": 105 }, { "x": 5, "y": 125 }],
                    [{ "x": 22, "y": 36 }, { "x": 10, "y": 57 }, { "x": 5, "y": 77 }, { "x": 60, "y": 9 }, { "x": 39, "y": 21 }],
                    [{ "x": 58, "y": 212 }, { "x": 73, "y": 226 }, { "x": 86, "y": 233 }, { "x": 100, "y": 237 }, { "x": 124, "y": 237 }, { "x": 151, "y": 226 }, { "x": 167, "y": 211 }, { "x": 49, "y": 196 }],
                    [{ "x": 201, "y": 138 }, { "x": 212, "y": 120 }, { "x": 197, "y": 139 }],
                    [{ "x": 188, "y": 147 }, { "x": 197, "y": 139 }, { "x": 212, "y": 120 }, { "x": 214, "y": 112 }, { "x": 207, "y": 63 }, { "x": 155, "y": 6 }, { "x": 180, "y": 151 }],
                    [{ "x": 177, "y": 21 }, { "x": 155, "y": 6 }, { "x": 207, "y": 63 }, { "x": 200, "y": 47 }],
                    [{ "x": 213, "y": 83 }, { "x": 207, "y": 63 }, { "x": 214, "y": 112 }],
                    [{ "x": 138, "y": 233 }, { "x": 151, "y": 226 }, { "x": 124, "y": 237 }],
                    [{ "x": 45, "y": 184 }, { "x": 49, "y": 196 }, { "x": 167, "y": 211 }, { "x": 173, "y": 202 }, { "x": 180, "y": 151 }, { "x": 155, "y": 6 }, { "x": 45, "y": 155 }],
                    [{ "x": 178, "y": 191 }, { "x": 181, "y": 179 }, { "x": 180, "y": 151 }, { "x": 173, "y": 202 }],
                    [{ "x": 127, "y": -1 }, { "x": 106, "y": -2 }, { "x": 105, "y": -2 }, { "x": 34, "y": 154 }, { "x": 36, "y": 153 }, { "x": 155, "y": 6 }, { "x": 149, "y": 4 }],
                    [{ "x": 70, "y": 5 }, { "x": 34, "y": 154 }, { "x": 105, "y": -2 }],
                    [{ "x": 45, "y": 155 }, { "x": 155, "y": 6 }, { "x": 36, "y": 153 }]
                ]
            },
            {
                "label": "editor",
                "isSensor": false,
                "circle": {
                    "x": 109.41624120833964,
                    "y": 92.4603912388308,
                    "radius": 88.58534820378804
                }
            }
        ]
    }
};
exports.default = BODY_DATA;


/***/ }),

/***/ "./src/entity/enemy/commissar-boss-enemy.ts":
/*!**************************************************!*\
  !*** ./src/entity/enemy/commissar-boss-enemy.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var body_data_1 = __webpack_require__(/*! ../body.data */ "./src/entity/body.data.ts");
var enemy_1 = __webpack_require__(/*! ./enemy */ "./src/entity/enemy/enemy.ts");
var PhysicsEditorParser = window.PhysicsEditorParser;
var CommissarBossEnemy = /** @class */ (function (_super) {
    __extends(CommissarBossEnemy, _super);
    function CommissarBossEnemy(scene, x, y, noScore) {
        if (noScore === void 0) { noScore = false; }
        var _this = _super.call(this, scene, x, y, 'commissar', PhysicsEditorParser.parseBody(x, y, 1, 1, body_data_1.default['commissar-1']), {
            steps: 2,
            momentum: 100000,
            score: {
                step: 25000,
                destroy: 50000
            },
            particles: {
                name: 'smoke',
                frameRate: 18
            }
        }, noScore) || this;
        _this.healthBarWidth = 1000;
        var healthBarWidth = 1000;
        _this.healthBar = _this.scene.add.graphics();
        _this.healthBar.fillStyle(0x598e24).fillRect(0, 0, _this.healthBarWidth, 50);
        _this.healthBar.depth = 20;
        return _this;
    }
    CommissarBossEnemy.prototype.onMomentumChange = function () {
        this.healthBar.setScale(this.currentMomentum / this.destructionMomentum, 1);
        this.healthBar.setPosition(this.body.position.x - this.healthBarWidth / 2, this.body.position.y - 800);
    };
    CommissarBossEnemy.prototype.onDestroy = function (sprite) {
        var _this = this;
        this.healthBar.destroy();
        this.scene.enemies = this.scene.enemies.filter(function (e) { return e !== _this; });
    };
    return CommissarBossEnemy;
}(enemy_1.default));
exports.default = CommissarBossEnemy;


/***/ }),

/***/ "./src/entity/enemy/commissar-enemy.ts":
/*!*********************************************!*\
  !*** ./src/entity/enemy/commissar-enemy.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var body_data_1 = __webpack_require__(/*! ../body.data */ "./src/entity/body.data.ts");
var enemy_1 = __webpack_require__(/*! ./enemy */ "./src/entity/enemy/enemy.ts");
var PhysicsEditorParser = window.PhysicsEditorParser;
var CommissarEnemy = /** @class */ (function (_super) {
    __extends(CommissarEnemy, _super);
    function CommissarEnemy(scene, x, y, noScore) {
        if (noScore === void 0) { noScore = false; }
        return _super.call(this, scene, x, y, 'commissar', PhysicsEditorParser.parseBody(x, y, 1, 1, body_data_1.default['commissar-1']), {
            steps: 2,
            momentum: 7500,
            score: {
                step: 5000,
                destroy: 10000
            },
            particles: {
                name: 'smoke',
                frameRate: 18
            }
        }, noScore) || this;
    }
    return CommissarEnemy;
}(enemy_1.default));
exports.default = CommissarEnemy;


/***/ }),

/***/ "./src/entity/enemy/enemy.ts":
/*!***********************************!*\
  !*** ./src/entity/enemy/enemy.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__(/*! ../entity */ "./src/entity/entity.ts");
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy(scene, x, y, textureKey, body, destructionOptions, noScore) {
        if (destructionOptions === void 0) { destructionOptions = null; }
        if (noScore === void 0) { noScore = false; }
        var _this = _super.call(this, scene, x, y, 'enemy', textureKey, body, destructionOptions) || this;
        // теперь можно делать дождь из любых врагов (см. пятый уровень)!
        _this.noScore = noScore;
        if (!_this.noScore) {
            scene.enemies.push(_this);
        }
        return _this;
    }
    Enemy.prototype.onDestroy = function (sprite) {
        var _this = this;
        this.scene.enemies = this.scene.enemies.filter(function (e) { return e !== _this; });
    };
    return Enemy;
}(entity_1.default));
exports.default = Enemy;


/***/ }),

/***/ "./src/entity/entities-list.ts":
/*!*************************************!*\
  !*** ./src/entity/entities-list.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var commissar_enemy_1 = __webpack_require__(/*! ../entity/enemy/commissar-enemy */ "./src/entity/enemy/commissar-enemy.ts");
var commissar_boss_enemy_1 = __webpack_require__(/*! ../entity/enemy/commissar-boss-enemy */ "./src/entity/enemy/commissar-boss-enemy.ts");
var explosion_shell_1 = __webpack_require__(/*! ../entity/shell/explosion-shell */ "./src/entity/shell/explosion-shell.ts");
var fat_shell_1 = __webpack_require__(/*! ../entity/shell/fat-shell */ "./src/entity/shell/fat-shell.ts");
var recruit_shell_1 = __webpack_require__(/*! ../entity/shell/recruit-shell */ "./src/entity/shell/recruit-shell.ts");
var concrete_wall_1 = __webpack_require__(/*! ../entity/wall/concrete-wall */ "./src/entity/wall/concrete-wall.ts");
var solid_concrete_wall_1 = __webpack_require__(/*! ../entity/wall/solid-concrete-wall */ "./src/entity/wall/solid-concrete-wall.ts");
var wooden_wall_1 = __webpack_require__(/*! ../entity/wall/wooden-wall */ "./src/entity/wall/wooden-wall.ts");
var slingshot_1 = __webpack_require__(/*! ../entity/slingshot */ "./src/entity/slingshot.ts");
var PlainEntitiesList = [
    slingshot_1.SlingshotEntity,
    wooden_wall_1.default,
    concrete_wall_1.default,
    solid_concrete_wall_1.default,
    recruit_shell_1.default,
    fat_shell_1.default,
    explosion_shell_1.default,
    commissar_enemy_1.default,
    commissar_boss_enemy_1.default
];
exports.PlainEntitiesList = PlainEntitiesList;
var KeyedEntitiesList = {};
exports.KeyedEntitiesList = KeyedEntitiesList;
PlainEntitiesList.forEach(function (e) { return KeyedEntitiesList[e.name] = e; });


/***/ }),

/***/ "./src/entity/entity.ts":
/*!******************************!*\
  !*** ./src/entity/entity.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var momentum_1 = __webpack_require__(/*! ../utils/momentum */ "./src/utils/momentum.ts");
var update_score_1 = __webpack_require__(/*! ../utils/update-score */ "./src/utils/update-score.ts");
var create_score_text_1 = __webpack_require__(/*! ../ui/create-score-text */ "./src/ui/create-score-text.ts");
var random_between_1 = __webpack_require__(/*! ../utils/random-between */ "./src/utils/random-between.ts");
// Entity — это любой физический объект с текстурой
// создаёт спрайт в Phaser и объединяет его с физическим телом,
// разрушения описаны также здесь. 
// 
// PS: не Body, а Entity чтобы не путаться с Matter
var Entity = /** @class */ (function () {
    function Entity(scene, x, y, type, textureKey, body, destructionOptions) {
        if (destructionOptions === void 0) { destructionOptions = null; }
        this.noScore = false; // для дождя из военкомов из пятого уровня
        // есть только если предмет можно разрушить
        this.isDestroyed = false;
        this.currentDestructionStep = 1; // текущий этап разрушения объекта
        this.minimalMomentum = 200; // если сила меньше этого значения, то это погрешность и не уменьшаем здоровье
        this.scene = scene;
        this.type = type;
        this.body = body;
        this.textureKey = textureKey; // если объект разрушается, то у него ставим нулевой этап разрушения
        // если объект разрушается, то у него первая текстура типа entity-1
        // а если нет, то просто entity. поэтому и решаем.
        var startTextureKey = (!destructionOptions || destructionOptions.steps === 1) ? textureKey : textureKey + '-1';
        this.sprite = this.scene.matter.add.sprite(0, 0, startTextureKey, 0);
        this.sprite.entityInstance = this;
        this.sprite.depth = 10;
        // events
        this.sprite.on('destroy', this.onDestroy.bind(this));
        this.sprite.on('update', this.onDestroy.bind(this));
        this.sprite
            .setExistingBody(this.body)
            .setPosition(x, y)
            .setSizeToFrame(this.sprite.frame)
            .setTexture(startTextureKey);
        if (config_1.default.DEBUG_MODE) {
            console.log(this.textureKey, this.body.mass);
        }
        if (destructionOptions) {
            this.destructionSteps = destructionOptions.steps;
            this.destructionScores = destructionOptions.score;
            this.destructionMomentum = destructionOptions.momentum;
            this.destructionParticlesConfig = destructionOptions.particles;
            this.currentMomentum = this.destructionMomentum;
            if (this.destructionMomentum && !config_1.default.EDITOR_MODE) {
                this.scene.matterCollision.addOnCollideStart({
                    objectA: this.sprite,
                    callback: this.onCollideStart,
                    context: this
                });
            }
        }
    }
    Entity.prototype.onDestroy = function (sprite) {
    };
    // событие, чтобы внутри объектов реализовывать логику (см. CommissarBossEnemy)
    Entity.prototype.onMomentumChange = function () {
    };
    Entity.prototype.onCollideStart = function (e) {
        if (this.body.isStatic === true ||
            this.destructionMomentum === Infinity ||
            e.bodyA.label === 'editor' ||
            e.bodyB.label === 'editor') {
            return;
        }
        var m = momentum_1.default(e.bodyA, e.bodyB);
        if (m < this.minimalMomentum) {
            return;
        }
        // console.log(m);
        this.currentMomentum -= m;
        if (this.currentMomentum > 0 && this.destructionSteps > 1) {
            var destructionStep = Math.ceil(this.destructionSteps - (this.currentMomentum / this.destructionMomentum * this.destructionSteps));
            if (destructionStep <= 0) {
                destructionStep = 1;
            }
            if (this.currentDestructionStep !== destructionStep) {
                this.currentDestructionStep = destructionStep;
                if (this.destructionScores && !this.noScore) {
                    update_score_1.default(this.scene, this.destructionScores.step);
                    create_score_text_1.default(this.scene, this, this.destructionScores.step);
                }
            }
            // будет лагать, если каждое столкновение переставлять текстуру?
            // если да, то менять только при изменении порога.
            this.sprite.setTexture(this.textureKey + "-" + destructionStep);
        }
        else if (this.currentMomentum <= 0) {
            if (this.destructionParticlesConfig) {
                this.createDestroyParticles();
            }
            this.currentDestructionStep = this.destructionSteps;
            if (this.destructionScores && !this.noScore) {
                update_score_1.default(this.scene, this.destructionScores.destroy);
                create_score_text_1.default(this.scene, this, this.destructionScores.destroy);
            }
            this.scene.sound.playAudioSprite('soundsprite', "hit-" + random_between_1.default(1, 5), {
                volume: 1 - 0.25 * Math.random(),
                rate: 1 - 0.25 * Math.random() // 0.75...1.0
            });
            this.sprite.destroy(); // это удаляет и физическое тело
            this.isDestroyed = true;
        }
        if (this.onMomentumChange) {
            this.onMomentumChange();
        }
    };
    Entity.prototype.getBodyBounds = function () {
        var _a = this.body.bounds, min = _a.min, max = _a.max;
        return {
            w: max.x - min.x,
            h: max.y - min.y
        };
    };
    Entity.prototype.createDestroyParticles = function () {
        var particle = this.scene.add.sprite(this.sprite.x, this.sprite.y, this.destructionParticlesConfig.name)
            .setScale(this.sprite.scaleX);
        this.scene.anims.create({
            key: 'destroy',
            frames: this.scene.anims.generateFrameNumbers(this.destructionParticlesConfig.name),
            frameRate: this.destructionParticlesConfig.frameRate,
            hideOnComplete: true
        });
        particle.anims.play('destroy');
    };
    return Entity;
}());
exports.default = Entity;


/***/ }),

/***/ "./src/entity/shell/explosion-shell.ts":
/*!*********************************************!*\
  !*** ./src/entity/shell/explosion-shell.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../../config */ "./src/config.ts");
var body_data_1 = __webpack_require__(/*! ../body.data */ "./src/entity/body.data.ts");
var phaser_1 = __webpack_require__(/*! ../../lib/phaser */ "./src/lib/phaser.ts");
var explosion_1 = __webpack_require__(/*! ../../utils/explosion */ "./src/utils/explosion.ts");
var shell_1 = __webpack_require__(/*! ./shell */ "./src/entity/shell/shell.ts");
var Bodies = phaser_1.default.Physics.Matter.Matter.Bodies;
var PhysicsEditorParser = window.PhysicsEditorParser;
var ExplosionShell = /** @class */ (function (_super) {
    __extends(ExplosionShell, _super);
    function ExplosionShell(scene, x, y) {
        var _this = _super.call(this, scene, x, y, 'explosion-shell', PhysicsEditorParser.parseBody(x, y, 1, 1, body_data_1.default['explosion-shell']), {
            steps: 1,
            score: {
                destroy: 30000
            }
        }) || this;
        _this.velocityCutFactor = 3; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
        _this.explosionForce = 15;
        return _this;
    }
    ExplosionShell.prototype.activatePower = function () {
        if (this.isMaxTensionReached) {
            return false;
        }
        explosion_1.default(this.scene.entities, this.body.position, this.explosionForce);
        this.showSmoke();
        this.scene.cameras.main.stopFollow();
        this.scene.cameras.main.pan(this.scene.slingshot.x, this.scene.slingshot.y, 4000, config_1.default.FLIGHT_ZOOM_EASING);
        this.scene.cameras.main.shake(2000, 0.4);
        this.sprite.destroy();
        this.isDestroyed = true;
        this.isDirty = true;
        this.isShooted = true;
        this.isInSlingshot = false;
    };
    ExplosionShell.prototype.showSmoke = function () {
        var particle = this.scene.add.sprite(this.sprite.x, this.sprite.y, 'smoke');
        this.scene.anims.create({
            key: 'destroy',
            frames: this.scene.anims.generateFrameNumbers('smoke'),
            frameRate: 18,
            hideOnComplete: true
        });
        particle.anims.play('destroy');
    };
    return ExplosionShell;
}(shell_1.default));
exports.default = ExplosionShell;


/***/ }),

/***/ "./src/entity/shell/fat-shell.ts":
/*!***************************************!*\
  !*** ./src/entity/shell/fat-shell.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var body_data_1 = __webpack_require__(/*! ../body.data */ "./src/entity/body.data.ts");
var phaser_1 = __webpack_require__(/*! ../../lib/phaser */ "./src/lib/phaser.ts");
var shell_1 = __webpack_require__(/*! ./shell */ "./src/entity/shell/shell.ts");
var Bodies = phaser_1.default.Physics.Matter.Matter.Bodies;
var PhysicsEditorParser = window.PhysicsEditorParser;
var FatShell = /** @class */ (function (_super) {
    __extends(FatShell, _super);
    function FatShell(scene, x, y) {
        var _this = _super.call(this, scene, x, y, 'fat-shell', PhysicsEditorParser.parseBody(x, y, 1, 1, body_data_1.default['fat-shell']), {
            steps: 1,
            score: {
                destroy: 20000
            }
        }) || this;
        _this.velocityCutFactor = 1.5; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
        return _this;
    }
    FatShell.prototype.activatePower = function () {
        if (this.isMaxTensionReached) {
            return false;
        }
        this.sprite.setDensity(0.1);
        this.sprite.setBounce(0.1);
        this.sprite.setFriction(1);
        this.sprite.setFrictionStatic(10);
        this.sprite.applyForce({
            x: 0,
            y: 10000
        });
    };
    return FatShell;
}(shell_1.default));
exports.default = FatShell;


/***/ }),

/***/ "./src/entity/shell/recruit-shell.ts":
/*!*******************************************!*\
  !*** ./src/entity/shell/recruit-shell.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var body_data_1 = __webpack_require__(/*! ../body.data */ "./src/entity/body.data.ts");
var shell_1 = __webpack_require__(/*! ./shell */ "./src/entity/shell/shell.ts");
var PhysicsEditorParser = window.PhysicsEditorParser;
var RecruitShell = /** @class */ (function (_super) {
    __extends(RecruitShell, _super);
    function RecruitShell(scene, x, y) {
        var _this = _super.call(this, scene, x, y, 'recruit-shell', PhysicsEditorParser.parseBody(x, y, 1, 1, body_data_1.default['recruit-shell']), {
            steps: 1,
            score: {
                destroy: 15000
            }
        }) || this;
        _this.velocityCutFactor = 1; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
        return _this;
    }
    RecruitShell.prototype.activatePower = function () {
        if (this.isMaxTensionReached) {
            return false;
        }
    };
    return RecruitShell;
}(shell_1.default));
exports.default = RecruitShell;


/***/ }),

/***/ "./src/entity/shell/shell.ts":
/*!***********************************!*\
  !*** ./src/entity/shell/shell.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__(/*! ../entity */ "./src/entity/entity.ts");
var random_between_1 = __webpack_require__(/*! ../../utils/random-between */ "./src/utils/random-between.ts");
var Shell = /** @class */ (function (_super) {
    __extends(Shell, _super);
    function Shell(scene, x, y, textureKey, body, destructionOptions) {
        if (destructionOptions === void 0) { destructionOptions = null; }
        var _this = _super.call(this, scene, x, y, 'shell', textureKey, body, destructionOptions) || this;
        _this.isShooted = false; // флаг, чтобы нельзя было взять снаряд после выстрела
        _this.isDirty = false; // «девственен» ли снаряд — не было ли ещё ни одного столкновения
        _this.isInSlingshot = false; // флаг, чтобы можно было таскать только снаряд в рогатке
        _this.isMaxTensionReached = false; // флаг, чтобы можно было оборвать снаряд, который слишком сильно натянули
        _this.velocityCutFactor = 1; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
        _this.lastBlinkTime = Date.now() + random_between_1.default(1000, 5000); // чтобы увеличить разброс первого моргания
        _this.closedEyesDuration = 200;
        _this.blinkInterval = random_between_1.default(2000, 5000);
        scene.shells.push(_this);
        _this.scene.events.on('update', _this.update.bind(_this));
        _this.scene.matterCollision.addOnCollideStart({
            objectA: _this.sprite,
            callback: function () {
                _this.isDirty = true;
            }
        });
        // нет времени разбираться с анимациями фазера
        _this.lastBlinkTime = Date.now();
        return _this;
    }
    Shell.prototype.activatePower = function () { };
    Shell.prototype.update = function () {
        this.updateBlinking();
    };
    Shell.prototype.updateBlinking = function () {
        // если спрайт уничтожен, не моргаем
        if (!this.sprite.active) {
            return;
        }
        var key = this.sprite.texture.key.split('-');
        // открываю глаза
        if (Date.now() - this.lastBlinkTime > this.closedEyesDuration) {
            if (key[2] === 'sleep') {
                if (this.isShooted && this.isDirty) {
                    key[2] = 'angry';
                }
                else {
                    key = this.textureKey.split('-');
                }
            }
        }
        // закрываю глаза
        if (Date.now() - this.lastBlinkTime > this.blinkInterval) {
            if (key[2] === 'angry') {
                key[2] = 'sleep';
            }
            else {
                key.push('sleep');
            }
            this.lastBlinkTime = Date.now();
        }
        this.sprite.setTexture(key.join('-'));
    };
    return Shell;
}(entity_1.default));
exports.default = Shell;


/***/ }),

/***/ "./src/entity/slingshot.ts":
/*!*********************************!*\
  !*** ./src/entity/slingshot.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var distance_1 = __webpack_require__(/*! ../utils/distance */ "./src/utils/distance.ts");
var entity_1 = __webpack_require__(/*! ./entity */ "./src/entity/entity.ts");
var PhaserMatterCollisionPlugin = window.PhaserMatterCollisionPlugin;
var _a = phaser_1.default.Physics.Matter.Matter, Body = _a.Body, Bodies = _a.Bodies, Constraint = _a.Constraint, Vector = _a.Vector;
var Slingshot = /** @class */ (function () {
    function Slingshot(scene, x, y) {
        this.isNewShellSpawned = true; // чтобы работала задержка при спауне снаряда
        this.lastShootTime = 0;
        this.shellDirtyTime = 0;
        this.lastPathSpawnTime = 0;
        // конфиг
        this.minTensionDistance = 60; // расстояние, после которого можно отпустить рогатку
        this.maxTensionDistanceX = 800; // максильное расстояние по X, на которое можно натянуть рогатку
        this.maxTensionDistanceY = 400; // максильное расстояние по Y, на которое можно натянуть рогатку
        this.shellSpawnTime = 3500; // время, после которого можно спаунить новый снаряд
        this.pathSpawnTime = 25; // время, после которого можно спаунить часть пути полёта
        this.slingshotSpritesScaleFactor = 2;
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.createSprites();
        this.createConstraint();
        this.scene.matter.world.on('afterupdate', this.afterUpdateCallback.bind(this));
    }
    Slingshot.prototype.createSprites = function () {
        this.frontSprite = this.scene.add.sprite(this.x, this.y + 150, 'slingshot-front')
            .setScale(this.slingshotSpritesScaleFactor);
        this.backSprite = this.scene.add.sprite(this.x + 55, this.y + 35, 'slingshot-back')
            .setScale(this.slingshotSpritesScaleFactor);
        this.rubberSpriteFront = this.scene.add.sprite(this.x - 40, this.y - 50, 'slingshot-rubber')
            .setScale(this.slingshotSpritesScaleFactor)
            .setOrigin(0, 0);
        this.rubberSpriteBack = this.scene.add.sprite(this.x + 50, this.y, 'slingshot-rubber')
            .setScale(this.slingshotSpritesScaleFactor)
            .setOrigin(0, 0);
        if (config_1.default.DEBUG_MODE) {
            this.scene.add.text(this.x - this.maxTensionDistanceX, this.y - 10, '|', { fontSize: 64 });
        }
        this.frontSprite.depth = 15;
        this.rubberSpriteFront.depth = 12;
        this.backSprite.depth = 5;
    };
    Slingshot.prototype.getNewShell = function () {
        if (this.currentShell) {
            this.scene.input.removeListener('pointerdown', this.currentShell.activatePower, this.currentShell, true);
        }
        this.currentShell = this.scene.shells[0];
        this.currentShell.sprite.setPosition(this.x, this.y);
        this.currentShell.isDirty = false;
        this.currentShell.isInSlingshot = true;
        return this.currentShell;
    };
    Slingshot.prototype.createConstraint = function () {
        this.constraint = this.scene.matter.add.constraint(null, null, null, null, {
            pointA: { x: this.x, y: this.y },
            bodyB: this.getNewShell().body,
            stiffness: 0.1
        });
    };
    Slingshot.prototype.updateRubber = function () {
        // чтобы тянулась резинка у рогатки
        if (this.currentShell && !this.currentShell.isShooted) {
            var textureRotation = Math.PI / -2;
            var frontRubberPosition = { x: this.rubberSpriteFront.x, y: this.rubberSpriteFront.y };
            var backRubberPosition = { x: this.rubberSpriteBack.x, y: this.rubberSpriteBack.y };
            var shellPosition = { x: this.currentShell.body.position.x - 50, y: this.currentShell.body.position.y };
            this.rubberSpriteFront.displayHeight = distance_1.default(frontRubberPosition, shellPosition);
            this.rubberSpriteFront.rotation = textureRotation + phaser_1.default.Math.Angle.BetweenPoints(frontRubberPosition, shellPosition);
            this.rubberSpriteBack.displayHeight = distance_1.default(backRubberPosition, shellPosition);
            this.rubberSpriteBack.rotation = textureRotation + phaser_1.default.Math.Angle.BetweenPoints(backRubberPosition, shellPosition);
        }
        else {
            this.rubberSpriteFront.displayHeight = 0;
            this.rubberSpriteBack.displayHeight = 0;
        }
    };
    Slingshot.prototype.updatePrimaryPointer = function () {
        var d = distance_1.default(this.constraint.pointA, this.currentShell.body.position);
        if (this.scene.input.activePointer.primaryDown) {
            // если уже можно отпустить рогатку и снаряд заряжен, то стреляем
            var dx = Math.abs(this.constraint.pointA.x - this.currentShell.body.position.x);
            var dy = Math.abs(this.constraint.pointA.y - this.currentShell.body.position.y);
            if ((dx > this.maxTensionDistanceX || dy > this.maxTensionDistanceY) && this.isNewShellSpawned) {
                this.currentShell.isInSlingshot = false;
                this.currentShell.isMaxTensionReached = true;
                this.currentShell.isDirty = true;
                this.shootTightShell();
                this.currentShell.sprite.setIgnoreGravity(true);
                this.currentShell.sprite.setVelocity(-10, -50);
                this.scene.sound.playAudioSprite('soundsprite', 'kulak', {
                    volume: 0.75 - 0.25 * Math.random(),
                });
            }
        }
        else {
            // если уже можно отпустить рогатку и снаряд заряжен, то стреляем
            this.rubberSpriteFront.displayHeight = 0;
            if (d > this.minTensionDistance && this.isNewShellSpawned) {
                this.shootTightShell();
                this.scene.sound.playAudioSprite('soundsprite', 'scream', {
                    volume: 0.75 - 0.25 * Math.random(),
                    rate: 1 - 0.25 * Math.random() // 0.75...1.0
                });
            }
        }
    };
    Slingshot.prototype.shootTightShell = function () {
        this.isNewShellSpawned = false;
        this.constraint.bodyB = Bodies.rectangle(this.x, this.y, 1, 1);
        this.currentShell.isShooted = true;
        this.currentShell.pathGroup = this.scene.add.group();
        this.currentShell.sprite.setVelocity(this.currentShell.body.velocity.x / this.currentShell.velocityCutFactor, this.currentShell.body.velocity.y / this.currentShell.velocityCutFactor);
        this.scene.cameras.main.startFollow(this.currentShell.sprite, true, 0.5, 0.5);
        this.scene.input.once('pointerdown', this.currentShell.activatePower, this.currentShell);
    };
    Slingshot.prototype.updateOnDirtyCurrentShell = function (e) {
        var _this = this;
        // чтобы задержка после выстрела сработала только после первого столкновения у снаряда
        if (this.currentShell.isDirty && this.currentShell.isShooted && this.shellDirtyTime === 0) {
            this.scene.shells.shift();
            this.shellDirtyTime = e.timestamp;
            this.lastShootTime = e.timestamp;
            if (this.previousShell && this.previousShell.pathGroup) {
                var pathSprites = this.previousShell.pathGroup.getChildren();
                pathSprites.forEach(function (s) {
                    var tween = _this.scene.tweens.add({
                        targets: s,
                        scaleX: 5,
                        scaleY: 5,
                        alpha: 0,
                        ease: 'Quad.easeOut',
                        duration: 500,
                        onComplete: function () {
                            _this.previousShell.pathGroup.clear(true, true);
                        },
                    });
                });
            }
        }
    };
    Slingshot.prototype.updateFlightPath = function (e) {
        // рисуем путь полёта
        if (!this.isNewShellSpawned &&
            this.currentShell.sprite.scene &&
            !this.currentShell.isDirty &&
            this.currentShell.pathGroup &&
            !this.currentShell.isMaxTensionReached &&
            (e.timestamp - this.lastPathSpawnTime > this.pathSpawnTime)) {
            var pathPart = this.scene.add.sprite(this.currentShell.sprite.x, this.currentShell.sprite.y, 'path-dot');
            this.currentShell.pathGroup.add(pathPart);
            this.lastPathSpawnTime = e.timestamp;
        }
    };
    Slingshot.prototype.updateNewShellSpawn = function (e) {
        // если уже можно спаунить новый снаряд — спауним (и снаряды не закончились)
        if (e.timestamp - this.lastShootTime > this.shellSpawnTime && this.lastShootTime !== 0 && this.scene.shells.length) {
            this.previousShell = this.currentShell;
            this.previousShell.isInSlingshot = false;
            this.constraint.bodyB = this.getNewShell().body;
            this.lastShootTime = 0;
            this.shellDirtyTime = 0;
            this.isNewShellSpawned = true;
            this.scene.cameras.main.stopFollow();
            this.scene.cameras.main.pan(this.x, this.y, config_1.default.FLIGHT_ZOOM_DURATION, config_1.default.FLIGHT_ZOOM_EASING);
        }
    };
    Slingshot.prototype.afterUpdateCallback = function (e) {
        this.updateRubber();
        this.updatePrimaryPointer();
        this.updateOnDirtyCurrentShell(e);
        this.updateFlightPath(e);
        this.updateNewShellSpawn(e);
    };
    return Slingshot;
}());
exports.default = Slingshot;
// класс, чтобы можно было рогатку в редакторе выставлять
// фактически, просто обёртка над Slingshot
var SlingshotEntity = /** @class */ (function (_super) {
    __extends(SlingshotEntity, _super);
    function SlingshotEntity(scene, x, y) {
        var _this = _super.call(this, scene, x, y, 'slingshot', // type
        'slingshot-front', // textureKey
        Bodies.circle(0, 0, 50)) || this;
        _this.sprite.setScale(2);
        if (!config_1.default.EDITOR_MODE) {
            _this.sprite.destroy();
            _this.scene.slingshot = new Slingshot(_this.scene, x, y);
        }
        return _this;
    }
    return SlingshotEntity;
}(entity_1.default));
exports.SlingshotEntity = SlingshotEntity;


/***/ }),

/***/ "./src/entity/wall/concrete-wall.ts":
/*!******************************************!*\
  !*** ./src/entity/wall/concrete-wall.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../../lib/phaser */ "./src/lib/phaser.ts");
var entity_1 = __webpack_require__(/*! ../entity */ "./src/entity/entity.ts");
var Bodies = phaser_1.default.Physics.Matter.Matter.Bodies;
var ConcreteWall = /** @class */ (function (_super) {
    __extends(ConcreteWall, _super);
    function ConcreteWall(scene, x, y, w, h) {
        if (w === void 0) { w = 45; }
        if (h === void 0) { h = 250; }
        return _super.call(this, scene, x, y, 'wall', 'concrete-wall', Bodies.rectangle(0, 0, w, h, {
            density: 0.025,
            restitution: 0.1,
            friction: 1,
            frictionStatic: 1,
        }), {
            steps: 2,
            momentum: 50000,
            score: {
                step: 500,
                destroy: 1000
            },
            particles: {
                name: 'smoke',
                frameRate: 18
            }
        }) || this;
    }
    return ConcreteWall;
}(entity_1.default));
exports.default = ConcreteWall;


/***/ }),

/***/ "./src/entity/wall/solid-concrete-wall.ts":
/*!************************************************!*\
  !*** ./src/entity/wall/solid-concrete-wall.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../../lib/phaser */ "./src/lib/phaser.ts");
var entity_1 = __webpack_require__(/*! ../entity */ "./src/entity/entity.ts");
var Bodies = phaser_1.default.Physics.Matter.Matter.Bodies;
var SolidConcreteWall = /** @class */ (function (_super) {
    __extends(SolidConcreteWall, _super);
    function SolidConcreteWall(scene, x, y, w, h) {
        if (w === void 0) { w = 45; }
        if (h === void 0) { h = 250; }
        return _super.call(this, scene, x, y, 'wall', 'concrete-wall-1', Bodies.rectangle(0, 0, w, h, {
            density: 0.25,
            restitution: 0.1,
            friction: 1,
            frictionStatic: 1,
        })) || this;
    }
    return SolidConcreteWall;
}(entity_1.default));
exports.default = SolidConcreteWall;


/***/ }),

/***/ "./src/entity/wall/wooden-wall.ts":
/*!****************************************!*\
  !*** ./src/entity/wall/wooden-wall.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../../lib/phaser */ "./src/lib/phaser.ts");
var entity_1 = __webpack_require__(/*! ../entity */ "./src/entity/entity.ts");
var Bodies = phaser_1.default.Physics.Matter.Matter.Bodies;
var WoodenWall = /** @class */ (function (_super) {
    __extends(WoodenWall, _super);
    function WoodenWall(scene, x, y, w, h) {
        if (w === void 0) { w = 15; }
        if (h === void 0) { h = 250; }
        return _super.call(this, scene, x, y, 'wall', 'wooden-wall', Bodies.rectangle(0, 0, w, h, {
            density: 0.01,
            restitution: 0.15,
            friction: 1,
            frictionStatic: 1,
        }), {
            steps: 2,
            momentum: 10000,
            score: {
                step: 100,
                destroy: 200
            },
            particles: {
                name: 'smoke',
                frameRate: 18
            }
        }) || this;
    }
    return WoodenWall;
}(entity_1.default));
exports.default = WoodenWall;


/***/ }),

/***/ "./src/game.ts":
/*!*********************!*\
  !*** ./src/game.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var phaser_1 = __webpack_require__(/*! ./lib/phaser */ "./src/lib/phaser.ts");
var google_1 = __webpack_require__(/*! ./lib/google */ "./src/lib/google.ts");
var phaser_config_1 = __webpack_require__(/*! ./phaser-config */ "./src/phaser-config.ts");
var ui_1 = __webpack_require__(/*! ./ui/ui */ "./src/ui/ui.ts");
var resize_1 = __webpack_require__(/*! ./platform/resize */ "./src/platform/resize.ts");
var orientationchange_1 = __webpack_require__(/*! ./platform/orientationchange */ "./src/platform/orientationchange.ts");
var print_commissar_to_console_1 = __webpack_require__(/*! ./utils/print-commissar-to-console */ "./src/utils/print-commissar-to-console.ts");
var game;
var subpoenasElement = document.querySelector('.subpoenas');
var uiContainer = ui_1.default.getUI();
subpoenasElement.addEventListener('click', startGame, { once: true });
if (!config_1.default.DEBUG_MODE) {
    print_commissar_to_console_1.default();
}
function startGame() {
    subpoenasElement.classList.remove('subpoenas-front');
    subpoenasElement.classList.add('subpoenas-back');
    ui_1.default.get('.subpoenas h1').textContent = 'ГРУЗИСЬ УЖЕ...';
    game = new phaser_1.default.Game(phaser_config_1.default);
    game.score = 0;
    game.isGameOver = false;
    game.isLevelOver = false;
    window.addEventListener('resize', resize_1.default.bind(this, game));
    window.addEventListener('orientationchange', orientationchange_1.default.bind(this, game));
    resize_1.default(game);
    google_1.default(game);
}


/***/ }),

/***/ "./src/level/data/level-1.data.ts":
/*!****************************************!*\
  !*** ./src/level/data/level-1.data.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Generated at Wed, 03 Apr 2019 07:07:40 GMT
exports.default = [{ "type": "CommissarEnemy", "x": 4108.984607025095, "y": -359.3388068588577, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 3753.266786655608, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 3595.672323041801, "y": 727.3, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "WoodenWall", "x": 3926.442760109976, "y": 727.3, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "WoodenWall", "x": 4108.323452598636, "y": 172.07499999994283, "rotation": 1.5707963267948983, "scaleX": 3.8499999999999943, "scaleY": 1.7500000000000007 }, { "type": "WoodenWall", "x": 3743.774608712206, "y": 542.2249999999999, "rotation": -1.5707963267948966, "scaleX": 3.8499999999999943, "scaleY": 1.4500000000000004 }, { "type": "WoodenWall", "x": 4107.265258926569, "y": 542.225, "rotation": -1.5707963267948966, "scaleX": 3.8499999999999943, "scaleY": 1.4500000000000004 }, { "type": "WoodenWall", "x": 4290.51661377639, "y": 727.3000000000001, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "WoodenWall", "x": 4469.715258926569, "y": 542.225, "rotation": -1.5707963267948966, "scaleX": 3.8499999999999943, "scaleY": 1.4500000000000004 }, { "type": "WoodenWall", "x": 4616.979402718481, "y": 727.3000000000001, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "CommissarEnemy", "x": 4460.669104470453, "y": 751.936968773718, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 3924.91889497383, "y": 357.1499999998863, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "WoodenWall", "x": 4291.32096318747, "y": 357.1499999998863, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "WoodenWall", "x": 3921.796346489247, "y": -14.500229520433257, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "WoodenWall", "x": 4291.024081339669, "y": -14.50022952043389, "rotation": 0, "scaleX": 3.8499999999999943, "scaleY": 1.2500000000000002 }, { "type": "WoodenWall", "x": 4106.928350372599, "y": -199.94142602294423, "rotation": 1.5707963267948983, "scaleX": 3.8499999999999943, "scaleY": 1.7500000000000007 }, { "type": "RecruitShell", "x": 571.4501807473401, "y": 803.7467461146709, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 368.00528954676633, "y": 803.7467461146709, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 183.13808988183584, "y": 792.981639249843, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 7.071692566190899, "y": 803.7467461146712, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 101.12809543641694, "y": 656.2968481603059, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 294.706537793139, "y": 657.8711190480595, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "SlingshotEntity", "x": 1243.8379948649267, "y": 422.68136749709726, "rotation": 0, "scaleX": 2, "scaleY": 2 }];


/***/ }),

/***/ "./src/level/data/level-2.data.ts":
/*!****************************************!*\
  !*** ./src/level/data/level-2.data.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Generated at Sun, 31 Mar 2019 04:23:09 GMT
exports.default = [{ "type": "SolidConcreteWall", "x": 3620.874068184588, "y": 426.2859683524003, "rotation": 0, "scaleX": 2.3999999999999995, "scaleY": 3.649999999999995 }, { "type": "SolidConcreteWall", "x": 3664.9841525533143, "y": -489.6098633722597, "rotation": 0, "scaleX": 2.3999999999999995, "scaleY": 3.649999999999995 }, { "type": "CommissarEnemy", "x": 4704.370392100635, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 4442.772251698933, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 3804.9049078851017, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 4188.826260924021, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 421.000468001637, "y": 803.7467461146709, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 219.57215285755225, "y": 803.7467461146709, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 3426.945638344787, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 1552.6938834894727, "y": -3183.589149877497, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "SlingshotEntity", "x": 1432.4200945093437, "y": 415.18464728343986, "rotation": 0, "scaleX": 2, "scaleY": 2 }];


/***/ }),

/***/ "./src/level/data/level-3.data.ts":
/*!****************************************!*\
  !*** ./src/level/data/level-3.data.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Generated at Sun, 31 Mar 2019 11:42:33 GMT
exports.default = [{ "type": "RecruitShell", "x": 554.5531015892421, "y": 774.624781206447, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 4433.600051556149, "y": 758.5500000000051, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 4481.142882371248, "y": 758.5500000000042, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 4537.998171069056, "y": 758.5500000000029, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 4620.12001998714, "y": 611.1000000000024, "rotation": 1.5707963267948344, "scaleX": 1, "scaleY": 1.6500000000000006 }, { "type": "ConcreteWall", "x": 4802.971459275842, "y": 758.5499999999975, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 4791.258151383604, "y": 457.400000000009, "rotation": 0, "scaleX": 1.1500000000000001, "scaleY": 1.05 }, { "type": "CommissarEnemy", "x": 5294.82825829723, "y": 749.7124292022932, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 5111.760362545329, "y": 750.8184937840863, "rotation": 0, "scaleX": 3.649999999999995, "scaleY": 1.05 }, { "type": "WoodenWall", "x": 5451.365597350202, "y": 738.2423702298512, "rotation": 0, "scaleX": 3.649999999999995, "scaleY": 1.05 }, { "type": "WoodenWall", "x": 5270.753134425416, "y": 602.4946590157978, "rotation": 1.546252634188665, "scaleX": 1, "scaleY": 3.099999999999997 }, { "type": "ConcreteWall", "x": 5797.268317082465, "y": 758.5500000000026, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 6113.49482588573, "y": 758.549999999996, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 6068.54482588573, "y": 758.5499999999969, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 6162.536614542738, "y": 758.549999999995, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 5975.219538146776, "y": 611.0999999999951, "rotation": 1.5707963267948344, "scaleX": 1, "scaleY": 1.6500000000000006 }, { "type": "ConcreteWall", "x": 5295.948047419629, "y": 303.6999999999952, "rotation": 1.5707963267948344, "scaleX": 1, "scaleY": 4.3499999999999925 }, { "type": "CommissarEnemy", "x": 5282.877080570203, "y": 149.26134092980587, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 4880.706022317196, "y": 156.2500000000471, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 5727.329384256214, "y": 156.24999999999432, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 5301.517447963254, "y": 23.800000000009177, "rotation": 1.5707963267948344, "scaleX": 1, "scaleY": 3.599999999999995 }, { "type": "CommissarEnemy", "x": 4980.020178821125, "y": -144.1223808358749, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 5542.758848665005, "y": -144.12238083590992, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 5296.346274660043, "y": 8.850000000010137, "rotation": 1.5707963267948344, "scaleX": 1, "scaleY": 3.599999999999995 }, { "type": "WoodenWall", "x": 5298.805623207951, "y": -6.099999999989837, "rotation": 1.5707963267948344, "scaleX": 1, "scaleY": 3.599999999999995 }, { "type": "ConcreteWall", "x": 5803.310412059731, "y": 457.3999999999845, "rotation": 0, "scaleX": 1.1500000000000001, "scaleY": 1.05 }, { "type": "FatShell", "x": 381.95456392670707, "y": 749.1887674173935, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "FatShell", "x": 238.33125313666284, "y": 788.4921528938328, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 3498.263521329572, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 87.1562962781833, "y": 791.8686927279424, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "SlingshotEntity", "x": 1229.9431550918498, "y": 448.34001579244773, "rotation": 0, "scaleX": 2, "scaleY": 2 }];


/***/ }),

/***/ "./src/level/data/level-4.data.ts":
/*!****************************************!*\
  !*** ./src/level/data/level-4.data.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Generated at Sat, 30 Mar 2019 23:55:44 GMT
exports.default = [{ "type": "WoodenWall", "x": 3598.1498674790923, "y": 707.3253785168034, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "CommissarEnemy", "x": 3758.1737689889756, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 3921.181519311491, "y": 707.3253785168039, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 3758.7073113471274, "y": 504.62537851680077, "rotation": 1.5707963267948983, "scaleX": 3.699999999999995, "scaleY": 1.5500000000000005 }, { "type": "ConcreteWall", "x": 4144.094500491757, "y": 707.61750101055, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "CommissarEnemy", "x": 4306.896189148909, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 4465.383787237487, "y": 707.6175010105502, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 4306.221634909082, "y": 499.1237297197171, "rotation": 1.5707963267948983, "scaleX": 1.3500000000000003, "scaleY": 1.6500000000000006 }, { "type": "WoodenWall", "x": 4677.101357418204, "y": 708.55, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 4995.35149191542, "y": 708.5499999999998, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 4834.730016754697, "y": 505.7052552469855, "rotation": 1.5707963267948983, "scaleX": 3.699999999999995, "scaleY": 1.5500000000000005 }, { "type": "CommissarEnemy", "x": 4841.51728776335, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 4995.821847862352, "y": 300.4165087541695, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 4676.000149680775, "y": 300.416508754169, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 4835.042560721909, "y": 97.71650875416915, "rotation": 1.5707963267948983, "scaleX": 3.699999999999995, "scaleY": 1.5500000000000005 }, { "type": "CommissarEnemy", "x": 4831.7172016793775, "y": 347.432874411072, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 5543.510374723901, "y": 708.5499999999998, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 5203.23335175427, "y": 708.5499999999998, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 5373.660296080851, "y": 502.43048486677066, "rotation": 1.5707963267948983, "scaleX": 1.3500000000000003, "scaleY": 1.6500000000000006 }, { "type": "CommissarEnemy", "x": 5375.638500584718, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 5353.8076777804645, "y": 341.5331040308572, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 5200.044877837799, "y": 294.15225820481265, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 5542.3797354184135, "y": 294.1522582048132, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 5371.993161464649, "y": 88.82725820481284, "rotation": 1.5707963267948983, "scaleX": 1.3500000000000003, "scaleY": 1.6500000000000006 }, { "type": "WoodenWall", "x": 5888.1618066943465, "y": 505.3662963127523, "rotation": 1.5707963267948983, "scaleX": 3.699999999999995, "scaleY": 1.5500000000000005 }, { "type": "CommissarEnemy", "x": 5886.866076463794, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 5734.258819357559, "y": 302.6662963127519, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 5730.686095851547, "y": 708.5499999999998, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 6043.9304054329405, "y": 302.6662963127525, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 6047.835833504211, "y": 708.55, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 5887.818812054778, "y": 99.96629631275209, "rotation": 1.5707963267948983, "scaleX": 3.699999999999995, "scaleY": 1.5500000000000005 }, { "type": "CommissarEnemy", "x": 5892.009189615745, "y": 347.0939154768389, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "WoodenWall", "x": 5731.1893054842985, "y": -105.11836548290037, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 6043.012357142089, "y": -105.1183654828999, "rotation": 0, "scaleX": 3.699999999999995, "scaleY": 1.4000000000000004 }, { "type": "WoodenWall", "x": 5885.133592909595, "y": -307.8183654829003, "rotation": 1.5707963267948983, "scaleX": 3.699999999999995, "scaleY": 1.5500000000000005 }, { "type": "CommissarEnemy", "x": 5888.620365481796, "y": -58.30608452316167, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 6447.69752957495, "y": 752.9776191640865, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarEnemy", "x": 6443.775024650062, "y": 329.9161255839268, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ConcreteWall", "x": 6452.059341209235, "y": 502.80356545105, "rotation": 1.5707963267948983, "scaleX": 1.3500000000000003, "scaleY": 1.6500000000000006 }, { "type": "ConcreteWall", "x": 6286.187625597558, "y": 708.5499999999998, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 6615.875839547063, "y": 708.5499999999998, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 6451.162133238265, "y": 91.82872376054587, "rotation": 1.5707963267948983, "scaleX": 1.3500000000000003, "scaleY": 1.6500000000000006 }, { "type": "ConcreteWall", "x": 6451.209332879983, "y": -321.79586488022017, "rotation": 1.5707963267948983, "scaleX": 1.3500000000000003, "scaleY": 1.6500000000000006 }, { "type": "ConcreteWall", "x": 6611.804958216262, "y": 297.15372376054626, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 6288.02223242397, "y": -116.47086488022028, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 6286.380782236928, "y": 297.1537237605457, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "ConcreteWall", "x": 6614.342116567047, "y": -116.47086488021978, "rotation": 0, "scaleX": 1.3500000000000003, "scaleY": 1.4000000000000004 }, { "type": "CommissarEnemy", "x": 6442.669034681458, "y": -69.06865707536758, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "ExplosionShell", "x": 646.1452853140022, "y": 799.777451328162, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 409.9400335846683, "y": 796.2548686059121, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "SlingshotEntity", "x": 1441.8677011269986, "y": 468.5960682468504, "rotation": 0, "scaleX": 2, "scaleY": 2 }];


/***/ }),

/***/ "./src/level/data/level-5.data.ts":
/*!****************************************!*\
  !*** ./src/level/data/level-5.data.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Generated at Wed, 03 Apr 2019 09:51:50 GMT
exports.default = [{ "type": "RecruitShell", "x": 762.3022519200728, "y": 803.7467461146709, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "CommissarBossEnemy", "x": 3848.1456466209984, "y": 145.81604827717715, "rotation": 0, "scaleX": 6.099999999999986, "scaleY": 5.649999999999988 }, { "type": "RecruitShell", "x": 350.2918176394894, "y": 803.3584318078324, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 188.8518784660052, "y": 801.6483442530814, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 27.230582653646017, "y": 803.7467461146709, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 514.0177366689247, "y": 803.7467461146707, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "RecruitShell", "x": 1028.079640122355, "y": -327.5671318099787, "rotation": 0, "scaleX": 1, "scaleY": 1 }, { "type": "SlingshotEntity", "x": 1007.7108733705651, "y": 480.42508750929863, "rotation": 0, "scaleX": 2, "scaleY": 2 }];


/***/ }),

/***/ "./src/level/level-1.ts":
/*!******************************!*\
  !*** ./src/level/level-1.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var level_2_1 = __webpack_require__(/*! ./level-2 */ "./src/level/level-2.ts");
var level_1_data_1 = __webpack_require__(/*! ./data/level-1.data */ "./src/level/data/level-1.data.ts");
var add_environment_1 = __webpack_require__(/*! ./shared/add-environment */ "./src/level/shared/add-environment.ts");
var create_1 = __webpack_require__(/*! ./shared/create */ "./src/level/shared/create.ts");
var init_debug_camera_1 = __webpack_require__(/*! ./shared/init-debug-camera */ "./src/level/shared/init-debug-camera.ts");
var preload_1 = __webpack_require__(/*! ./shared/preload */ "./src/level/shared/preload.ts");
var update_1 = __webpack_require__(/*! ./shared/update */ "./src/level/shared/update.ts");
var create_disappearing_event_1 = __webpack_require__(/*! ../ui/create-disappearing-event */ "./src/ui/create-disappearing-event.ts");
var Level1 = /** @class */ (function (_super) {
    __extends(Level1, _super);
    function Level1(config) {
        var _this = _super.call(this, config) || this;
        _this.enemies = [];
        _this.shells = [];
        _this.levelData = level_1_data_1.default;
        _this.nextLevel = level_2_1.default;
        _this.winTimeout = 2500;
        _this.score = 0;
        _this.zoom = 0.425;
        _this.preload = preload_1.default.bind(_this);
        _this.update = update_1.default.bind(_this);
        _this.initDebugCamera = init_debug_camera_1.default.bind(_this);
        _this.addEnvironment = add_environment_1.default.bind(_this);
        return _this;
    }
    Level1.prototype.create = function () {
        var _this = this;
        var events = [
            {
                type: 'text',
                data: 'бурдж-халифа',
                x: 4125,
                y: -600,
                delay: 500,
                duration: 3000,
                scale: 1
            },
        ];
        events.forEach(function (v) {
            _this.time.addEvent({
                delay: v.delay,
                callback: create_disappearing_event_1.default.bind(_this, _this, v.x, v.y, v.type, v.data, v.scale, v.duration),
            });
        });
        create_1.default.bind(this)();
        var FONT_SIZE = 24;
        var tutorialText = this.add.text(300, -500, '', {
            fontSize: FONT_SIZE,
            fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
        }).setScale(2.5, 2.5);
        var tutorialTexts = [
            'ПризываНет.ру представляет\n\nкомпьютерную игру «ЗЛОЙ ПРИЗЫВНИК»',
            'Воспользуйтесь рогаткой, чтобы\n\nзапустить призывника в военкомов',
            'Но не натягивайте рогатку слишком сильно!\n\nОна может порваться...',
        ];
        tutorialTexts.forEach(function (v, i) {
            _this.time.addEvent({
                delay: 5000 * i,
                callback: function () {
                    tutorialText.text = v;
                },
            });
        });
    };
    return Level1;
}(phaser_1.default.Scene));
exports.default = Level1;


/***/ }),

/***/ "./src/level/level-2.ts":
/*!******************************!*\
  !*** ./src/level/level-2.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var level_3_1 = __webpack_require__(/*! ./level-3 */ "./src/level/level-3.ts");
var level_2_data_1 = __webpack_require__(/*! ./data/level-2.data */ "./src/level/data/level-2.data.ts");
var add_environment_1 = __webpack_require__(/*! ./shared/add-environment */ "./src/level/shared/add-environment.ts");
var create_1 = __webpack_require__(/*! ./shared/create */ "./src/level/shared/create.ts");
var init_debug_camera_1 = __webpack_require__(/*! ./shared/init-debug-camera */ "./src/level/shared/init-debug-camera.ts");
var preload_1 = __webpack_require__(/*! ./shared/preload */ "./src/level/shared/preload.ts");
var update_1 = __webpack_require__(/*! ./shared/update */ "./src/level/shared/update.ts");
var create_disappearing_event_1 = __webpack_require__(/*! ../ui/create-disappearing-event */ "./src/ui/create-disappearing-event.ts");
var Level2 = /** @class */ (function (_super) {
    __extends(Level2, _super);
    function Level2(config) {
        var _this = _super.call(this, config) || this;
        _this.enemies = [];
        _this.shells = [];
        _this.levelData = level_2_data_1.default;
        _this.nextLevel = level_3_1.default;
        _this.winTimeout = 2500;
        _this.score = 0;
        _this.zoom = 0.4;
        _this.preload = preload_1.default.bind(_this);
        _this.update = update_1.default.bind(_this);
        _this.initDebugCamera = init_debug_camera_1.default.bind(_this);
        _this.addEnvironment = add_environment_1.default.bind(_this);
        return _this;
    }
    Level2.prototype.create = function () {
        var _this = this;
        var events = [
            {
                type: 'sprite',
                data: 'dagestan-sign-1',
                x: 2000,
                y: -400,
                delay: 5000,
                duration: 0,
                scale: 3
            },
            {
                type: 'sprite',
                data: 'ingush-sign-1',
                x: 2000,
                y: -400,
                delay: 10000,
                duration: 0,
                scale: 3
            },
            {
                type: 'sprite',
                data: 'dagestan-sign-2',
                x: 2000,
                y: -400,
                delay: 15000,
                duration: 0,
                scale: 3
            },
            {
                type: 'sprite',
                data: 'ingush-sign-2',
                x: 2000,
                y: -400,
                delay: 20000,
                duration: 0,
                scale: 3
            }
        ];
        events.forEach(function (v) {
            _this.time.addEvent({
                delay: v.delay,
                callback: create_disappearing_event_1.default.bind(_this, _this, v.x, v.y, v.type, v.data, v.scale, v.duration),
            });
        });
        create_1.default.bind(this)();
    };
    return Level2;
}(phaser_1.default.Scene));
exports.default = Level2;


/***/ }),

/***/ "./src/level/level-3.ts":
/*!******************************!*\
  !*** ./src/level/level-3.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var level_4_1 = __webpack_require__(/*! ./level-4 */ "./src/level/level-4.ts");
var level_3_data_1 = __webpack_require__(/*! ./data/level-3.data */ "./src/level/data/level-3.data.ts");
var add_environment_1 = __webpack_require__(/*! ./shared/add-environment */ "./src/level/shared/add-environment.ts");
var create_1 = __webpack_require__(/*! ./shared/create */ "./src/level/shared/create.ts");
var init_debug_camera_1 = __webpack_require__(/*! ./shared/init-debug-camera */ "./src/level/shared/init-debug-camera.ts");
var preload_1 = __webpack_require__(/*! ./shared/preload */ "./src/level/shared/preload.ts");
var update_1 = __webpack_require__(/*! ./shared/update */ "./src/level/shared/update.ts");
var create_disappearing_event_1 = __webpack_require__(/*! ../ui/create-disappearing-event */ "./src/ui/create-disappearing-event.ts");
var Level3 = /** @class */ (function (_super) {
    __extends(Level3, _super);
    function Level3(config) {
        var _this = _super.call(this, config) || this;
        _this.enemies = [];
        _this.shells = [];
        _this.levelData = level_3_data_1.default;
        _this.nextLevel = level_4_1.default;
        _this.winTimeout = 2500;
        _this.score = 0;
        _this.zoom = 0.35;
        _this.preload = preload_1.default.bind(_this);
        _this.update = update_1.default.bind(_this);
        _this.initDebugCamera = init_debug_camera_1.default.bind(_this);
        _this.addEnvironment = add_environment_1.default.bind(_this);
        return _this;
    }
    Level3.prototype.create = function () {
        var _this = this;
        var events = [
            this.commissarText('братан', 5000),
            this.commissarText('попусти', 7500),
            this.commissarText('всё', 10000),
            this.commissarText('будет', 10500),
            this.commissarText('путём', 11000),
            this.commissarText('нормалёк', 13000),
            this.commissarText('прорвёмся', 14500),
            this.commissarText('вместе', 16500),
            this.commissarText('я не голубой', 20000),
            this.commissarText('ну короче не важно))', 22000),
            this.commissarText('погнали к нам', 23000),
            this.commissarText('сирия', 24000),
            this.commissarText('донбасс', 25000),
            this.commissarText('омск', 26000),
            this.commissarText('правда загран заберём   ', 28000),
            this.commissarText('не стреляй', 32000),
            this.commissarText('я свой', 34000),
            this.commissarText('ты кстати где живёшь  ', 36000),
            this.commissarText('я вот тут недалеко', 39000),
            this.commissarText('заходи на чаёк)', 41000),
            this.commissarText('если', 45000),
            this.commissarText('ты', 46000),
            this.commissarText('не', 47000),
            this.commissarText('голубой', 48000),
            this.commissarText('дорисуй', 49000),
            this.commissarText('вагон', 50000),
            this.commissarText('другой', 51000),
            this.commissarText(')))', 52000),
            this.commissarText('🇷🇺', 57000),
            this.commissarText('🇷🇺', 57500),
            this.commissarText('🇷🇺', 58000),
            this.commissarText('🇷🇺', 58500),
            {
                type: 'text',
                data: 'сука он заебал',
                x: 700,
                y: 200,
                delay: 52000,
                duration: 2000,
                scale: 1.5
            },
            {
                type: 'text',
                data: 'ёбни его уже',
                x: 700,
                y: 200,
                delay: 54000,
                duration: 2000,
                scale: 1.5
            }
        ];
        events.forEach(function (v) {
            _this.time.addEvent({
                delay: v.delay,
                callback: function () {
                    if (_this.commissarWithDialog && !_this.commissarWithDialog.isDestroyed) {
                        create_disappearing_event_1.default(_this, v.x, v.y, v.type, v.data, v.scale, v.duration);
                    }
                }
            });
        });
        create_1.default.bind(this)();
        this.commissarWithDialog = this.enemies[4];
        this.add.sprite(5300, 465, 'lenin');
        var tutorialText = this.add.text(300, -500, 'Во время полёта пухлого призывника лучше нажать на экран!', {
            fontSize: 13,
            fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
        }).setScale(5, 5);
    };
    Level3.prototype.commissarText = function (t, d) {
        return {
            type: 'text',
            data: t,
            x: 3300,
            y: 550,
            delay: d,
            duration: 2500,
            scale: 1
        };
    };
    return Level3;
}(phaser_1.default.Scene));
exports.default = Level3;


/***/ }),

/***/ "./src/level/level-4.ts":
/*!******************************!*\
  !*** ./src/level/level-4.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var level_5_1 = __webpack_require__(/*! ./level-5 */ "./src/level/level-5.ts");
var level_4_data_1 = __webpack_require__(/*! ./data/level-4.data */ "./src/level/data/level-4.data.ts");
var add_environment_1 = __webpack_require__(/*! ./shared/add-environment */ "./src/level/shared/add-environment.ts");
var create_1 = __webpack_require__(/*! ./shared/create */ "./src/level/shared/create.ts");
var init_debug_camera_1 = __webpack_require__(/*! ./shared/init-debug-camera */ "./src/level/shared/init-debug-camera.ts");
var preload_1 = __webpack_require__(/*! ./shared/preload */ "./src/level/shared/preload.ts");
var update_1 = __webpack_require__(/*! ./shared/update */ "./src/level/shared/update.ts");
var create_disappearing_event_1 = __webpack_require__(/*! ../ui/create-disappearing-event */ "./src/ui/create-disappearing-event.ts");
var Level4 = /** @class */ (function (_super) {
    __extends(Level4, _super);
    function Level4(config) {
        var _this = _super.call(this, config) || this;
        _this.enemies = [];
        _this.shells = [];
        _this.levelData = level_4_data_1.default;
        _this.nextLevel = level_5_1.default;
        _this.winTimeout = 2500;
        _this.score = 0;
        _this.zoom = 0.3;
        _this.preload = preload_1.default.bind(_this);
        _this.update = update_1.default.bind(_this);
        _this.initDebugCamera = init_debug_camera_1.default.bind(_this);
        _this.addEnvironment = add_environment_1.default.bind(_this);
        return _this;
    }
    Level4.prototype.create = function () {
        var _this = this;
        var events = [
            {
                type: 'text',
                data: 'я',
                x: 2500,
                y: -100,
                delay: 20000,
                duration: 1000,
                scale: 1
            },
            {
                type: 'text',
                data: 'искала',
                x: 2500,
                y: -200,
                delay: 21000,
                duration: 1000,
                scale: 1
            },
            {
                type: 'text',
                data: 'тебя',
                x: 2500,
                y: -300,
                delay: 22000,
                duration: 1000,
                scale: 1
            },
            {
                type: 'text',
                data: 'ночами',
                x: 2500,
                y: -400,
                delay: 23000,
                duration: 1000,
                scale: 1
            },
            {
                type: 'text',
                data: 'чами',
                x: 2500,
                y: -500,
                delay: 24000,
                duration: 1000,
                scale: 1
            },
            {
                type: 'text',
                data: 'чами',
                x: 2500,
                y: -600,
                delay: 25000,
                duration: 1000,
                scale: 1
            },
            {
                type: 'text',
                data: 'чами',
                x: 2500,
                y: -700,
                delay: 26000,
                duration: 1000,
                scale: 1
            }
        ];
        events.forEach(function (v) {
            _this.time.addEvent({
                delay: v.delay,
                callback: create_disappearing_event_1.default.bind(_this, _this, v.x, v.y, v.type, v.data, v.scale, v.duration),
            });
        });
        create_1.default.bind(this)();
        var tutorialText = this.add.text(300, -500, 'Как запустишь чёрного призывника, жми на экран!', {
            fontSize: 26,
            fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
        }).setScale(2.5, 2.5);
    };
    return Level4;
}(phaser_1.default.Scene));
exports.default = Level4;


/***/ }),

/***/ "./src/level/level-5.ts":
/*!******************************!*\
  !*** ./src/level/level-5.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var commissar_enemy_1 = __webpack_require__(/*! ../entity/enemy/commissar-enemy */ "./src/entity/enemy/commissar-enemy.ts");
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var level_5_data_1 = __webpack_require__(/*! ./data/level-5.data */ "./src/level/data/level-5.data.ts");
var add_environment_1 = __webpack_require__(/*! ./shared/add-environment */ "./src/level/shared/add-environment.ts");
var create_1 = __webpack_require__(/*! ./shared/create */ "./src/level/shared/create.ts");
var init_debug_camera_1 = __webpack_require__(/*! ./shared/init-debug-camera */ "./src/level/shared/init-debug-camera.ts");
var preload_1 = __webpack_require__(/*! ./shared/preload */ "./src/level/shared/preload.ts");
var update_1 = __webpack_require__(/*! ./shared/update */ "./src/level/shared/update.ts");
var random_between_1 = __webpack_require__(/*! ../utils/random-between */ "./src/utils/random-between.ts");
var create_disappearing_event_1 = __webpack_require__(/*! ../ui/create-disappearing-event */ "./src/ui/create-disappearing-event.ts");
var Level5 = /** @class */ (function (_super) {
    __extends(Level5, _super);
    function Level5(config) {
        var _this = _super.call(this, config) || this;
        _this.enemies = [];
        _this.shells = [];
        _this.levelData = level_5_data_1.default;
        _this.score = 0;
        _this.winTimeout = 3000;
        _this.zoom = 0.4;
        _this.commissarsCount = 0;
        _this.preload = preload_1.default.bind(_this);
        _this.initDebugCamera = init_debug_camera_1.default.bind(_this);
        _this.addEnvironment = add_environment_1.default.bind(_this);
        _this.enemyWidth = 700;
        return _this;
    }
    Level5.prototype.create = function () {
        var _this = this;
        this.time.addEvent({
            delay: 250,
            callback: this.spawnCommissar,
            callbackScope: this,
            loop: true
        });
        var events = [
            this.commissarText('слыш пездюк', 3000),
            this.commissarText('я генерал-майор', 5000),
            this.commissarText('диванных войск', 7000),
            this.commissarText('трава себя не покрасит', 9000),
            this.commissarText('моя дача сама не построится', 11000),
            this.commissarText('сюда подошёл', 15000),
            this.commissarText('один на один', 17000),
            this.commissarText('только ты и я', 19000),
            this.commissarText('встречаемся в военкомате', 21000),
            this.commissarText('ну чё стоишь пердишь', 27000),
            this.commissarText('давай шакал', 30000),
            this.commissarText('я тут уже 30 лет сижу', 32000),
            this.commissarText('знаешь сколько таких видал', 34000),
            this.commissarText('знаешь...', 38000),
            this.commissarText('знаешь ли ты', 42000),
            this.commissarText('вдоль ночных дорог', 43000),
            this.commissarText('шла босиком', 44000),
            this.commissarText('не жалея ног', 45000),
            this.commissarText('это не слёзы', 47000),
            this.commissarText('просто дождь...', 49000),
        ];
        events.forEach(function (v) {
            _this.time.addEvent({
                delay: v.delay,
                callback: function () {
                    if (_this.commissarWithDialog && !_this.commissarWithDialog.isDestroyed) {
                        create_disappearing_event_1.default(_this, v.x, v.y, v.type, v.data, v.scale, v.duration);
                    }
                }
            });
        });
        create_1.default.bind(this)();
        this.commissarWithDialog = this.enemies[0];
        this.commissarsCount = 0;
    };
    Level5.prototype.update = function () {
        update_1.default.bind(this)();
    };
    Level5.prototype.commissarText = function (t, d) {
        return {
            type: 'text',
            data: t,
            x: 3850,
            y: -700,
            delay: d,
            duration: 2500,
            scale: 1.55
        };
    };
    Level5.prototype.spawnCommissar = function () {
        if (this.commissarsCount > 20) {
            return;
        }
        var x = random_between_1.default(0, 3000); // 3500 — это чтобы не падали военкомы на главного военкома
        var y = -2000;
        var commissar = new commissar_enemy_1.default(this, x, y, true);
        // всё, победа
        if (!this.enemies.length) {
            this.commissarsCount += 1;
            commissar.destructionMomentum = Infinity;
            commissar.body.collisionFilter.category = 0x0002;
            this.entities.forEach(function (e) {
                if (e.type === 'shell') {
                    e.body.collisionFilter.mask = 0x0001;
                }
            });
        }
        var angularVelocityDirection = (Math.random() > 0.5) ? 1 : -1;
        commissar.sprite
            .setScale(random_between_1.default(0.5, 1))
            .setAngularVelocity(0.3 * angularVelocityDirection)
            .setDensity(1)
            .applyForce({
            x: 0,
            y: random_between_1.default(0, 100)
        });
    };
    return Level5;
}(phaser_1.default.Scene));
exports.default = Level5;


/***/ }),

/***/ "./src/level/levels-list.ts":
/*!**********************************!*\
  !*** ./src/level/levels-list.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var level_1_1 = __webpack_require__(/*! ./level-1 */ "./src/level/level-1.ts");
var level_2_1 = __webpack_require__(/*! ./level-2 */ "./src/level/level-2.ts");
var level_3_1 = __webpack_require__(/*! ./level-3 */ "./src/level/level-3.ts");
var level_4_1 = __webpack_require__(/*! ./level-4 */ "./src/level/level-4.ts");
var level_5_1 = __webpack_require__(/*! ./level-5 */ "./src/level/level-5.ts");
exports.default = [
    level_1_1.default,
    level_2_1.default,
    level_3_1.default,
    level_4_1.default,
    level_5_1.default
];


/***/ }),

/***/ "./src/level/shared/add-environment.ts":
/*!*********************************************!*\
  !*** ./src/level/shared/add-environment.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(nextLevel) {
    var w = this.game.config.width;
    var h = this.game.config.height;
    // let skyTile = this.add.sprite(0, 0, (nextLevel) ? 'sky' : 'sky-end')
    var skyTile = this.add.sprite(0, 0, 'sky')
        .setDisplaySize(w * 4, h * 4)
        .setPosition(w * 4, h)
        .setOrigin(1);
    // .setScrollFactor(0.5);
    // 87 — высота картинки верхней части травы
    // 193 — высота картинки нижней части травы
    var grassBottomTile = this.add.tileSprite(w / 2, h - 100, w * 10, 193, 'grass-bottom');
    var grassBottomSprite = this.matter.add.gameObject(grassBottomTile)
        .setStatic(true);
    var grassBottomTop = this.add.tileSprite(w / 2, h - 240, w * 10, 87, 'grass-top');
    grassBottomSprite.body.label = 'grassBottomSprite';
    this.cameras.main.setBounds(0, -h * 3, w * 4, h * 4);
    this.game.ambientSound = this.sound.play('ambient', {
        volume: 0.75,
        seek: 25 * Math.random(),
        loop: true
    });
}
exports.default = default_1;


/***/ }),

/***/ "./src/level/shared/count-shells-score.ts":
/*!************************************************!*\
  !*** ./src/level/shared/count-shells-score.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = __webpack_require__(/*! ../../ui/ui */ "./src/ui/ui.ts");
var create_score_text_1 = __webpack_require__(/*! ../../ui/create-score-text */ "./src/ui/create-score-text.ts");
function default_1(scene, callback) {
    var shells = [];
    var animationDuration = 2500;
    scene.entities.forEach(function (e) {
        if (e.type === 'shell' && !e.isShooted) {
            scene.score += e.destructionScores.destroy;
            ui_1.default.get('.score-screen .score-text-value').textContent = scene.score;
            create_score_text_1.default(scene, e, e.destructionScores.destroy);
        }
    });
    scene.time.addEvent({
        delay: animationDuration,
        callback: callback,
        callbackScope: this
    });
}
exports.default = default_1;


/***/ }),

/***/ "./src/level/shared/create.ts":
/*!************************************!*\
  !*** ./src/level/shared/create.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../../config */ "./src/config.ts");
var generate_entities_1 = __webpack_require__(/*! ./generate-entities */ "./src/level/shared/generate-entities.ts");
var random_between_1 = __webpack_require__(/*! ../../utils/random-between */ "./src/utils/random-between.ts");
var ui_1 = __webpack_require__(/*! ../../ui/ui */ "./src/ui/ui.ts");
function default_1() {
    var _this = this;
    this.game.isLevelOver = false;
    // здесь я поправил Phaser.Physics.Matter.PointerConstraint#getBodyPart
    // чтобы можно было брать только ещё невыпущенные снаряды
    this.matter.add.mouseSpring();
    this.cameras.main.setBackgroundColor(config_1.default.BACKGROUND_COLOR);
    if (config_1.default.DEBUG_MODE) {
        this.matter.world.createDebugGraphic();
        this.initDebugCamera();
    }
    this.score = this.game.score;
    this.enemies = [];
    this.shells = [];
    this.sound.stopAll();
    this.winTimeEvent = null;
    this.cameras.main.setZoom(config_1.default.DEFAULT_ZOOM);
    this.addEnvironment(this.nextLevel);
    this.entities = generate_entities_1.default(this.levelData, this);
    this.cameras.main.setZoom(this.zoom);
    this.cameras.main.pan(this.enemies[0].sprite.x, this.enemies[0].sprite.y, 0);
    this.time.addEvent({
        delay: config_1.default.SLINGSHOT_PAN_DELAY,
        callback: function () {
            _this.cameras.main.pan(_this.slingshot.x, _this.slingshot.y, config_1.default.FLIGHT_ZOOM_DURATION, config_1.default.FLIGHT_ZOOM_EASING);
        },
        callbackScope: this
    });
    this.time.addEvent({
        delay: 5000,
        callback: function () {
            if (_this.enemies.length) {
                _this.sound.playAudioSprite('soundsprite', "commissar-" + random_between_1.default(1, 12), {
                    volume: 1 - 0.25 * Math.random(),
                    rate: (_this.nextLevel) ? 1 : 0.75 - 0.25 * Math.random(),
                    delay: Math.random() * 7
                });
            }
        },
        callbackScope: this,
        loop: true
    });
    var restartButton = ui_1.default.get('.restart-button');
    restartButton.onclick = function () {
        _this.game.isGameOver = false;
        _this.game.isLevelOver = false;
        _this.scene.restart();
        ui_1.default.get('.score-screen .score-text-value').textContent = _this.game.score;
    };
}
exports.default = default_1;


/***/ }),

/***/ "./src/level/shared/generate-entities.ts":
/*!***********************************************!*\
  !*** ./src/level/shared/generate-entities.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var entities_list_1 = __webpack_require__(/*! ../../entity/entities-list */ "./src/entity/entities-list.ts");
function default_1(levelData, level) {
    var entities = [];
    levelData.forEach(function (e) {
        var entity = new entities_list_1.KeyedEntitiesList[e.type](level, e.x, e.y);
        // потому что SlingshotEntity — это обёртка для того
        // чтобы можно было рогатку выставить в редакторе, а не настоящая сущность
        if (e.type !== 'SlingshotEntity') {
            entity.sprite
                .setScale(e.scaleX, e.scaleY)
                .setRotation(e.rotation);
            entities.push(entity);
        }
    });
    return entities;
}
exports.default = default_1;
;


/***/ }),

/***/ "./src/level/shared/init-debug-camera.ts":
/*!***********************************************!*\
  !*** ./src/level/shared/init-debug-camera.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../../lib/phaser */ "./src/lib/phaser.ts");
function default_1() {
    var cursors = this.input.keyboard.createCursorKeys();
    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.Q),
        zoomOut: this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.E),
        acceleration: 0.1,
        drag: 0.0005,
        maxSpeed: 2.0
    };
    this.cameraControls = new phaser_1.default.Cameras.Controls.SmoothedKeyControl(controlConfig);
}
exports.default = default_1;


/***/ }),

/***/ "./src/level/shared/is-all-sleeping.ts":
/*!*********************************************!*\
  !*** ./src/level/shared/is-all-sleeping.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MOTION_SLEEP_THRESHOLD = 0.1; // from Matter.Sleeping
// у нас выключен sleeping, потому что иногда тела не обновляются, поэтому
// считаем сами: http://brm.io/matter-js/docs/classes/Body.html#property_motion
function getMotion(body) {
    return body.speed * body.speed + body.angularSpeed * body.angularSpeed;
}
function isSleeping(body) {
    var timeFactor = body.timeScale * body.timeScale * body.timeScale;
    if (getMotion(body) > MOTION_SLEEP_THRESHOLD * timeFactor) {
        return false;
    }
    else {
        return true;
    }
}
function default_1(scene) {
    var isEntitiesSleeping = scene.entities
        .filter(function (e) { return !e.isDestroyed && !e.body.ignoreGravity; })
        .every(function (e) { return isSleeping(e.body); });
    return isEntitiesSleeping;
}
exports.default = default_1;


/***/ }),

/***/ "./src/level/shared/is-win.ts":
/*!************************************!*\
  !*** ./src/level/shared/is-win.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_all_sleeping_1 = __webpack_require__(/*! ./is-all-sleeping */ "./src/level/shared/is-all-sleeping.ts");
function default_1(scene) {
    var isNeedToCheckSleeping = scene.enemies.length === 0 || scene.shells.length === 0;
    if (isNeedToCheckSleeping) {
        if (is_all_sleeping_1.default(scene)) { // микрооптимизации :)))
            if (scene.enemies.length === 0) {
                return true;
            }
            else if (scene.shells.length === 0 && scene.enemies.length > 0) {
                return false;
            }
        }
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/level/shared/preload.ts":
/*!*************************************!*\
  !*** ./src/level/shared/preload.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var assets_1 = __webpack_require__(/*! ../../assets */ "./src/assets.ts");
var on_assets_loading_progress_1 = __webpack_require__(/*! ../../ui/on-assets-loading-progress */ "./src/ui/on-assets-loading-progress.ts");
var on_assets_loading_complete_1 = __webpack_require__(/*! ../../ui/on-assets-loading-complete */ "./src/ui/on-assets-loading-complete.ts");
function default_1() {
    this.load.on('progress', on_assets_loading_progress_1.default);
    this.load.on('complete', on_assets_loading_complete_1.default);
    for (var k in assets_1.default.IMAGES) {
        this.load.image(k, assets_1.default.IMAGES[k]);
    }
    for (var k in assets_1.default.SPRITESHEETS) {
        this.load.spritesheet(k, assets_1.default.SPRITESHEETS[k].url, assets_1.default.SPRITESHEETS[k].options);
    }
    for (var k in assets_1.default.SOUNDS) {
        this.load.audio(k, assets_1.default.SOUNDS[k]);
        // this.load.audioSprite('sound', ASSETS.SOUNDS[k].json, [ASSETS.SOUNDS[k].mp3]);
    }
    for (var k in assets_1.default.SOUNDSPRITES) {
        this.load.audioSprite(k, assets_1.default.SOUNDSPRITES[k].json, [assets_1.default.SOUNDSPRITES[k].mp3]);
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/level/shared/update.ts":
/*!************************************!*\
  !*** ./src/level/shared/update.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_win_1 = __webpack_require__(/*! ./is-win */ "./src/level/shared/is-win.ts");
var count_shells_score_1 = __webpack_require__(/*! ./count-shells-score */ "./src/level/shared/count-shells-score.ts");
var ui_1 = __webpack_require__(/*! ../../ui/ui */ "./src/ui/ui.ts");
// смотреть sleeping всех тел, а не только врагов и снарядов
function default_1(time, delta) {
    // camera update
    if (this.cameraControls) {
        this.cameraControls.update(delta);
    }
    // на случай, если кто-то (жирный призывник) пробьёт землю и захочет улететь вниз
    this.entities.forEach(function (e) {
        if (!e.isDestroyed && e.type === 'shell' && e.sprite.y > 10000) {
            e.sprite.y = -5000;
        }
    });
    // win check
    var currentWinStatus = is_win_1.default(this);
    var timeout;
    var callback;
    if (this.isWin !== currentWinStatus && this.winTimeEvent) {
        this.winTimeEvent.remove();
    }
    this.isWin = currentWinStatus;
    if (this.isWin !== undefined && this.isWin !== null) {
        if (this.isWin === true) {
            callback = win;
        }
        else if (this.isWin === false) {
            callback = fail;
        }
        this.winTimeEvent = this.time.addEvent({
            delay: this.winTimeout,
            callback: callback,
            callbackScope: this
        });
    }
}
exports.default = default_1;
function win() {
    var _this = this;
    if (!this.game.isGameOver && !this.game.isLevelOver) {
        // console.log('win');
        this.game.isLevelOver = true;
        count_shells_score_1.default(this, function () {
            _this.game.score = _this.score;
            if (_this.nextLevel) {
                ui_1.default.hide('.score-screen');
                ui_1.default.enableUIInteraction();
                ui_1.default.get('.next-level-screen-score-text-value').textContent = _this.game.score;
                var nextLevelScreen_1 = ui_1.default.show('.next-level-screen');
                nextLevelScreen_1.addEventListener('click', function () {
                    ui_1.default.hide(nextLevelScreen_1);
                    ui_1.default.show('.score-screen');
                    ui_1.default.disableUIInteraction();
                    _this.scene.start(_this.nextLevel.name);
                }, { once: true });
            }
            else {
                _this.game.isGameOver = true;
                _this.sound.playAudioSprite('soundsprite', 'maxim', {
                    volume: 0.6,
                });
                ui_1.default.enableUIInteraction();
                ui_1.default.hide('.score-screen');
                ui_1.default.get('.win-screen .score-text-value').textContent = _this.game.score;
                var comicsScreen_1 = ui_1.default.get('.comics-end');
                ui_1.default.show(comicsScreen_1);
                comicsScreen_1.addEventListener('click', function () {
                    ui_1.default.hide(comicsScreen_1);
                    ui_1.default.show('.win-screen');
                });
            }
        });
    }
}
function fail() {
    var _this = this;
    if (!this.game.isGameOver && !this.game.isLevelOver) {
        this.game.isGameOver = true;
        this.game.isLevelOver = true;
        // console.log('fail');
        ui_1.default.enableUIInteraction();
        ui_1.default.hide('.score-screen');
        ui_1.default.get('.fail-screen-score-text-value').textContent = this.score;
        var failScreen_1 = ui_1.default.show('.fail-screen');
        failScreen_1.addEventListener('click', function () {
            _this.game.isGameOver = false;
            _this.game.isLevelOver = false;
            ui_1.default.disableUIInteraction();
            ui_1.default.hide(failScreen_1);
            ui_1.default.show('.score-screen');
            _this.scene.restart();
            ui_1.default.get('.score-screen .score-text-value').textContent = _this.game.score;
        });
    }
}


/***/ }),

/***/ "./src/lib/google.ts":
/*!***************************!*\
  !*** ./src/lib/google.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
function default_1(game) {
    window['onGoogleSignIn'] = function (user) {
        if (!game.isGameOver) {
            return;
        }
        ;
        var userProfile = user.getBasicProfile();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', config_1.default.SCORE_URL, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            alert('Результат сохранён :)');
            console.log(xhr.responseText);
        };
        xhr.send(JSON.stringify({
            userId: userProfile.getId(),
            email: userProfile.getEmail(),
            firstName: userProfile.getGivenName(),
            lastName: userProfile.getFamilyName(),
            photoUrl: userProfile.getImageUrl(),
            hash: user.getAuthResponse().id_token,
            score: game.score
        }));
    }.bind(this);
}
exports.default = default_1;
;


/***/ }),

/***/ "./src/lib/phaser.ts":
/*!***************************!*\
  !*** ./src/lib/phaser.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// lib/phaser.ts
// тут я модифицирую некоторые методы фазера (стараясь попутно всё не сломать),
// иначе пиздец как больно делать элементарные вещи 
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var Phaser = window['Phaser'];
var Constraint = Phaser.Physics.Matter.Matter.Constraint;
Phaser.Physics.Matter.Factory.prototype.constraint = function (bodyA, bodyB, length, stiffness, options) {
    if (stiffness === undefined) {
        stiffness = 1;
    }
    if (options === undefined) {
        options = {};
    }
    if (bodyA) {
        options.bodyA = (bodyA.type === 'body') ? bodyA : bodyA.body;
    }
    if (bodyB) {
        options.bodyB = (bodyB.type === 'body') ? bodyB : bodyB.body;
    }
    if (length) {
        options.length = length;
    }
    if (stiffness) {
        options.stiffness = stiffness;
    }
    var constraint = Constraint.create(options);
    this.world.add(constraint);
    return constraint;
};
Phaser.Cameras.Controls.SmoothedKeyControl.prototype.update = function (delta) {
    if (!this.active) {
        return;
    }
    if (delta === undefined) {
        delta = 1;
    }
    var cam = this.camera;
    //  Apply Deceleration
    if (this._speedX > 0) {
        this._speedX -= this.dragX * delta;
        if (this._speedX < 0) {
            this._speedX = 0;
        }
    }
    else if (this._speedX < 0) {
        this._speedX += this.dragX * delta;
        if (this._speedX > 0) {
            this._speedX = 0;
        }
    }
    if (this._speedY > 0) {
        this._speedY -= this.dragY * delta;
        if (this._speedY < 0) {
            this._speedY = 0;
        }
    }
    else if (this._speedY < 0) {
        this._speedY += this.dragY * delta;
        if (this._speedY > 0) {
            this._speedY = 0;
        }
    }
    //  Check for keys
    if (this.up && this.up.isDown) {
        this._speedY += this.accelY;
        if (this._speedY > this.maxSpeedY) {
            this._speedY = this.maxSpeedY;
        }
    }
    else if (this.down && this.down.isDown) {
        this._speedY -= this.accelY;
        if (this._speedY < -this.maxSpeedY) {
            this._speedY = -this.maxSpeedY;
        }
    }
    if (this.left && this.left.isDown) {
        this._speedX += this.accelX;
        if (this._speedX > this.maxSpeedX) {
            this._speedX = this.maxSpeedX;
        }
    }
    else if (this.right && this.right.isDown) {
        this._speedX -= this.accelX;
        if (this._speedX < -this.maxSpeedX) {
            this._speedX = -this.maxSpeedX;
        }
    }
    //  Camera zoom
    if (this.zoomIn && this.zoomIn.isDown) {
        this._zoom = -this.zoomSpeed;
    }
    else if (this.zoomOut && this.zoomOut.isDown) {
        this._zoom = this.zoomSpeed;
    }
    else {
        this._zoom = 0;
    }
    //  Apply to Camera
    if (this._speedX !== 0) {
        cam.scrollX -= ((this._speedX * delta) | 0);
    }
    if (this._speedY !== 0) {
        cam.scrollY -= ((this._speedY * delta) | 0);
    }
    if (this._zoom !== 0) {
        cam.zoom += this._zoom;
        if (cam.zoom < config_1.default.MIN_ZOOM) {
            cam.zoom = config_1.default.MIN_ZOOM;
        }
        if (cam.zoom > config_1.default.MAX_ZOOM) {
            cam.zoom = config_1.default.MAX_ZOOM;
        }
    }
};
exports.default = Phaser;


/***/ }),

/***/ "./src/phaser-config.ts":
/*!******************************!*\
  !*** ./src/phaser-config.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./src/config.ts");
var phaser_1 = __webpack_require__(/*! ./lib/phaser */ "./src/lib/phaser.ts");
var PhaserMatterCollisionPlugin = window.PhaserMatterCollisionPlugin;
var levels_list_1 = __webpack_require__(/*! ./level/levels-list */ "./src/level/levels-list.ts");
var level_1 = __webpack_require__(/*! ./editor/level */ "./src/editor/level.ts");
exports.default = {
    type: phaser_1.default.AUTO,
    resolution: window.devicePixelRatio,
    pixelArt: true,
    backgroundColor: '#000',
    parent: 'game',
    disableContextMenu: true,
    input: {
        mouse: {
            target: window
        },
        touch: {
            target: window
        }
    },
    physics: {
        default: 'matter',
        matter: {
            enableSleeping: false,
            debug: (config_1.default.DEBUG_MODE) ? true : false,
            debugBodyColor: 0xffffff,
        }
    },
    // если редактор включён, то запускаем уровень с редактором.
    // нет? запускаем все остальные уровни
    scene: (config_1.default.EDITOR_MODE) ? new level_1.default({ key: level_1.default.name }) : levels_list_1.default.map(function (L) { return new L({ key: L.name }); }),
    scale: {
        // здесь какая-то хуйня с Phaser.Scale.FIT, поэтому всё хендлю сам
        mode: phaser_1.default.Scale.NONE,
        width: 1920,
        height: 1080,
        resolution: window.devicePixelRatio
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
};


/***/ }),

/***/ "./src/platform/is-mobile.ts":
/*!***********************************!*\
  !*** ./src/platform/is-mobile.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
exports.default = default_1;
;


/***/ }),

/***/ "./src/platform/orientationchange.ts":
/*!*******************************************!*\
  !*** ./src/platform/orientationchange.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = __webpack_require__(/*! ../ui/ui */ "./src/ui/ui.ts");
var resize_1 = __webpack_require__(/*! ./resize */ "./src/platform/resize.ts");
var is_mobile_1 = __webpack_require__(/*! ./is-mobile */ "./src/platform/is-mobile.ts");
var request_fullscreen_1 = __webpack_require__(/*! ./request-fullscreen */ "./src/platform/request-fullscreen.ts");
function default_1(game) {
    var orientation = window.orientation; // под файрфоксом не работает — флексим
    var appealScreen = ui_1.default.get('.wrong-orientation-screen');
    resize_1.default(game);
    if (is_mobile_1.default()) {
        request_fullscreen_1.default();
        if (Math.abs(orientation) !== 90) {
            // ui.enableUIInteraction();
            ui_1.default.show(appealScreen);
        }
        else {
            // ui.disableUIInteraction();
            ui_1.default.hide(appealScreen);
        }
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/platform/request-fullscreen.ts":
/*!********************************************!*\
  !*** ./src/platform/request-fullscreen.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var el = document.documentElement;
    if (el.requestFullscreen) {
        el.requestFullscreen();
    }
    else {
        if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        }
        else {
            if (el.webkitRequestFullscreen) {
                el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/platform/resize.ts":
/*!********************************!*\
  !*** ./src/platform/resize.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = __webpack_require__(/*! ../ui/ui */ "./src/ui/ui.ts");
function default_1(game) {
    if (!game) {
        return;
    }
    var scale = Math.min(window.innerWidth / game.config.width, window.innerHeight / game.config.height);
    var transformRule = "translate(-50%, -50%) scale(" + scale + ")";
    game.canvas.style.transform = transformRule;
    game.scale.resize(game.config.width, game.config.height);
    ui_1.default.getUI().style.transform = transformRule;
}
exports.default = default_1;


/***/ }),

/***/ "./src/ui/create-disappearing-event.ts":
/*!*********************************************!*\
  !*** ./src/ui/create-disappearing-event.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FONT_SIZE = 48;
// types: text & sprite
function default_1(scene, x, y, type, data, scale, animationDuration) {
    if (scale === void 0) { scale = 1; }
    if (animationDuration === void 0) { animationDuration = 2500; }
    var e;
    switch (type) {
        case 'text':
            e = scene.add.text(x, y, data, {
                fontSize: FONT_SIZE,
                fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
            }).setOrigin(0.5, 0.5)
                .setScale(scale, scale);
            break;
        case 'sprite':
            e = scene.add.sprite(x, y, data).setOrigin(0.5, 0.5)
                .setScale(scale, scale);
            break;
    }
    if (animationDuration) {
        scene.tweens.add({
            targets: e,
            y: y - 150,
            scaleX: 1.5,
            scaleY: 1.5,
            alpha: 0,
            ease: 'Quad.easeOut',
            duration: animationDuration,
            onComplete: function () {
                e.destroy();
            },
        });
    }
    else {
        scene.time.addEvent({
            delay: 2000,
            callback: function () {
                e.destroy();
            },
            callbackScope: this
        });
    }
}
exports.default = default_1;


/***/ }),

/***/ "./src/ui/create-score-text.ts":
/*!*************************************!*\
  !*** ./src/ui/create-score-text.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ANIMATION_DURATION = 2500;
var FONT_SIZE = 48;
function default_1(scene, entity, score) {
    var text = scene.add.text(entity.sprite.x, entity.sprite.y, score, {
        fontSize: FONT_SIZE,
        fontFamily: '"Press Start 2P"' // двойные кавычки тут неспроста: https://github.com/photonstorm/phaser/blob/v3.16.1/src/gameobjects/text/static/Text.js#L31
    }).setOrigin(0.5, 0.5);
    var tween = scene.tweens.add({
        targets: text,
        y: entity.sprite.y - 150,
        scaleX: 2,
        scaleY: 2,
        alpha: 0,
        ease: 'Quad.easeOut',
        duration: 1000,
        onComplete: function () {
            text.destroy();
        },
    });
}
exports.default = default_1;


/***/ }),

/***/ "./src/ui/on-assets-loading-complete.ts":
/*!**********************************************!*\
  !*** ./src/ui/on-assets-loading-complete.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = __webpack_require__(/*! ./ui */ "./src/ui/ui.ts");
var orientationchange_1 = __webpack_require__(/*! ../platform/orientationchange */ "./src/platform/orientationchange.ts");
function default_1() {
    var _this = this;
    this.systems.scene.scene.pause();
    ui_1.default.hide('.subpoenas');
    ui_1.default.hide('.score-screen');
    var comicsStart = ui_1.default.get('.comics-start');
    comicsStart.addEventListener('click', function () {
        ui_1.default.disableUIInteraction();
        ui_1.default.hide(comicsStart);
        ui_1.default.show('#game');
        ui_1.default.show('.score-screen');
        ui_1.default.showUI();
        _this.systems.scene.scene.resume();
        orientationchange_1.default(_this.systems.game);
    });
}
exports.default = default_1;


/***/ }),

/***/ "./src/ui/on-assets-loading-progress.ts":
/*!**********************************************!*\
  !*** ./src/ui/on-assets-loading-progress.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(progress) {
    var MAX_SATURATION = 200;
    var subpoenasBack = document.querySelector('.subpoenas-back'); // ну такое каждый раз тут это вызывать...
    subpoenasBack.style.filter = "saturate(" + progress * MAX_SATURATION + ")";
}
exports.default = default_1;


/***/ }),

/***/ "./src/ui/ui.ts":
/*!**********************!*\
  !*** ./src/ui/ui.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    hiddenClassName: 'hidden',
    noInteractionClassName: 'no-interaction',
    uiContainerID: '#ui-container',
    get: function (query) {
        return document.querySelector(query);
    },
    show: function (element, showUI) {
        if (showUI === void 0) { showUI = true; }
        if (typeof element === 'string') {
            element = this.get(element);
        }
        element.classList.remove(this.hiddenClassName);
        if (showUI) {
            this.showUI();
        }
        return element;
    },
    hide: function (element, hideUI) {
        if (hideUI === void 0) { hideUI = true; }
        if (typeof element === 'string') {
            element = this.get(element);
        }
        ;
        element.classList.add(this.hiddenClassName);
        if (hideUI) {
            this.hideUI();
        }
        return element;
    },
    getUI: function () {
        return this.get(this.uiContainerID);
    },
    showUI: function () {
        this.show(this.uiContainerID, false);
    },
    hideUI: function () {
        this.show(this.uiContainerID, false);
    },
    enableUIInteraction: function () {
        this.getUI().classList.remove(this.noInteractionClassName);
    },
    disableUIInteraction: function () {
        this.getUI().classList.add(this.noInteractionClassName);
    }
};


/***/ }),

/***/ "./src/utils/distance.ts":
/*!*******************************!*\
  !*** ./src/utils/distance.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(a, b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
}
exports.default = default_1;


/***/ }),

/***/ "./src/utils/explosion.ts":
/*!********************************!*\
  !*** ./src/utils/explosion.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var distance_1 = __webpack_require__(/*! ./distance */ "./src/utils/distance.ts");
var _a = phaser_1.default.Physics.Matter.Matter, Body = _a.Body, Common = _a.Common, Composite = _a.Composite, Vector = _a.Vector;
function default_1(entities, position, force) {
    for (var i = 0; i < entities.length; i++) {
        var body = entities[i].body;
        if (body && !body.isStatic) {
            var forceMagnitude = force * body.mass;
            var angle = Vector.angle(body.position, position);
            var dist = distance_1.default(body.position, position);
            Body.applyForce(body, position, {
                x: Math.cos(angle) * -forceMagnitude / dist,
                y: Math.sin(angle) * -forceMagnitude / dist
            });
        }
    }
}
exports.default = default_1;
;


/***/ }),

/***/ "./src/utils/momentum.ts":
/*!*******************************!*\
  !*** ./src/utils/momentum.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! ../lib/phaser */ "./src/lib/phaser.ts");
var Vector = phaser_1.default.Physics.Matter.Matter.Vector;
// by @liabru: https://github.com/liabru/matter-js/issues/155#issuecomment-143433353
// a & b — bodies
function default_1(a, b) {
    a = a.parent;
    b = b.parent;
    var aMass = (a.mass !== Infinity) ? a.mass : 1;
    var bMass = (b.mass !== Infinity) ? b.mass : 1;
    var aMomentum = Vector.mult(a.velocity, aMass);
    var bMomentum = Vector.mult(b.velocity, bMass);
    var relativeMomentum = Vector.sub(aMomentum, bMomentum);
    return Vector.magnitude(relativeMomentum);
}
exports.default = default_1;


/***/ }),

/***/ "./src/utils/print-commissar-to-console.ts":
/*!*************************************************!*\
  !*** ./src/utils/print-commissar-to-console.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var image = "                                                                                                    \n                                                                                                    \n                                                   `.:+o++/:-.                                      \n                                               `/shddmmmmmmmddhs/.                                  \n                                             `+hhdddmhyhhddmmmmmmms.                                \n                                            `+yhhhhhyo//+sydmmmmmmmd+                               \n                                           `+ooossso/:----::+oshhddmmy`                             \n                                          `+ooooo++/:::--------//+shhdh-                            \n                                          :oo++o+++/::::----------:://yh`                           \n                                        --oso+++///::::::-------------/y.                           \n                                       .s+///+/-:::::::::--:::::------/+                            \n                                       -/oo:----://+ooo+/::-::::-----:+.                            \n                                       :/+/---:::+oyyhhdhyo+/::::----:-                             \n                                       .:::-:-::::/+osshdhsooosyyhys+:                              \n                                        ./::::::::::/++oo+/::sddhoso:`                              \n                                       -+::/:///////:///:::--:+oo/::`                               \n                                     .+ho/////+++ooooos+/:---::::---                                \n                              ./oyyyyhhdy/+++++oosyss++sso/::oo+/::`                                \n                         `-/ohddmmmmdddmm+ooooooooossso+oso++oys+/.                                 \n                    `-:oyhhddddhdmmmmmmmmhosssssoo++osyhyysoosoo+-                                  \n                .:+shhhdddddddy./dmmmmmmmNhssyyyso+/++ossso++oosyhhs+:.`                            \n            -/ssoshhsoydddddddddmmmmmmmmmNNhyyhhhyso++++++++oymNmmdddhhy/-:`                        \n        `-+hdhhysoshssyddddmmmmmmmmNmmmmmmNdhyyyhhhhhyysosyddmNMNmNmmmdddhys:/:`                    \n       :syhhdmmddyssdmmmmmmmmmmmmmNNmmmmmmmNdhhyyyyyyyyshhNNddmNNmmNNmmmdmddyshh/                   \n      +dddhddmmmmmmmmmmmmmmmmmmmmNNNmmmmmmmmmhhhhyyyhhdhymMmddmmNNmdmNNmmmddddddm:                  \n      +hdmNmmmmmmmmmmmmmmmmmmmmmmNNNmmmmmmmmddhyyyyhdyssmMNmmdyoyNNddmNNNmmmdddmmy                  \n     -yyhmmNNNmmmmmmmmmmmmmmmmmmmNNNmdo-.:dmmddhyhmNdssmMNmmmdyoymmmddmNNNmmmddNmh`                 \n    `yyyhdmmNNNNNmmmmmmmmmmmmmmmmmNNmdddmmmmmmddmMNmNmymNmmmmmmmmNNmmdmmNNNNmmmNmd/                 \n    :hhhhddmmNNMNNmmmmmmmmmmmmmmmmNNNNNNNNNmmmmmmNMmmmmmNmmmmmmmmmmmmddmmNNNNmmNmNm+                \n   .shdmmmmmmmmNMMNmNmmmmmmmmmmmmmmNMMNmmmmmmmmmmmmNdhdNmmmmmmmmmmmmmddmmNNNNmNmmmmd:               \n  `oyhmmNNNNNNmNNNNNNNmmmmNNNmmmmmmNNNNNmmmmmmmmmmmmNddNmmmmmmmmmmmmmdddmNNNNNNNmmNmds              \n.odyddmmmmNNNNNNNMNNNNNmmNNNNNNmmmmmNNNMMNmmmmmmmmmmNMmmmmmmmmmmmmNmmddddmNNNNNNNNmmmd.             \nyNmhddmmNNNmmNNNNNNMMMNNmNNNNNNNmmmmmmNNNMMNmmmmmmmmmMMmmmmmmmmmmNmmmmddddmNNNNMNNNNNdmh-           \nhhddddmmmmNNmmmmNNNNMMNNNNNNNNNNNNNmmmmmNNNNMNNmmmmmmNNmmmmmmmmmmmmmmmdysosyNNNNNNNNmmNNd+`         \ndddmmmmmmmNNNNmmmmmNmMNNNNNNNNNNNNNNNNmmmmmmNNNNmmmmmNNmmmmmmmmNhyy+/::/ommmmNMMNNNNNNNNNNd/`       \nmmmmmmNNNNNNNNNNNNNNNMMNNNNNNNNNNNNNNNNNNNmmNNNNNNmmNNmmmmmmmmmNmNNdhdmmmmmmmmNNNNNNNNNNmmmms       \nddmmNNNmNNNNNNmmmmNMMMMMNMNmNNNNNNNNNNNNNNNNNNNNNNNNNNmmmmmmNNmmmmmmmmmmmmmmmmNMMMNNNNNmmmmddo      ";
function default_1() {
    console.log(image);
}
exports.default = default_1;


/***/ }),

/***/ "./src/utils/random-between.ts":
/*!*************************************!*\
  !*** ./src/utils/random-between.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function default_1(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.default = default_1;


/***/ }),

/***/ "./src/utils/update-score.ts":
/*!***********************************!*\
  !*** ./src/utils/update-score.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ../config */ "./src/config.ts");
var ui_1 = __webpack_require__(/*! ../ui/ui */ "./src/ui/ui.ts");
function default_1(scene, score) {
    if (config_1.default.EDITOR_MODE || scene.game.isGameOver === true || scene.game.isLevelOver === true) {
        return;
    }
    scene.score += score;
    ui_1.default.get('.score-screen .score-text-value').textContent = scene.score;
}
exports.default = default_1;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/game.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/upisfree/p/angry-recruits/src/game.ts */"./src/game.ts");


/***/ })

/******/ });
//# sourceMappingURL=angry-recruits.js.map