//////////////////////////////////////////////////////////
// нажать на сущность в левом углу, чтобы создать новую //
// чтобы выбрать сущность, кликни на неё                //
// чтобы перетащить — тащи                              //
//                                                      //
// Q & E — зум камеры                                   //
// A & D — поворот сущности                             //
// BracketLeft & BracketRight — скейл по X              //
// Quote & Backslash — скейл по Y                       //
//////////////////////////////////////////////////////////

import CONFIG from '../config';
import Phaser from '../lib/phaser';
import preload from '../level/shared/preload';
import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import { PlainEntitiesList, KeyedEntitiesList } from '../entity/list';
const { Body } = Phaser.Physics.Matter.Matter;

// к сожалению, модули в es6 только статичные и генерировать их нельзя :(
import Level1Data from '../level/data/level-1.data';
import Level2Data from '../level/data/level-2.data';

const LEVEL_NAME = 'level-1';
const LEVEL_DATA = Level1Data;

const ENTITY_SELECTED_COLOR = 0x00ffff;

const NEW_ENTITY_START_POSITION_X = 1820;
const NEW_ENTITY_START_POSITION_Y = 150;

export default class LevelEditor extends (<any>Phaser.Scene) {
  preload = preload.bind(this);

  enemies: Array<Entity> = [];
  shells: Array<Shell> = [];
  entities: Array<Entity> = [];
  currentEntity: Entity;
  entitiesListWithKeys: any;

  keyA: any;
  keyD: any;
  keyPlus: any;
  keyMinus: any;
  keyBracketLeft: any;
  keyBracketRight: any;
  keyQuote: any;
  keyBackslash: any;
  keyBackspace: any;
  keyDelete: any;

  cameraControls: any;

  constructor(config) {
    super(config);

    CONFIG.MAX_ZOOM = 2;
  }

  create() {
    this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
    this.matter.add.mouseSpring();
    this.matter.world.disableGravity();
    this.matter.world.createDebugGraphic();

    this.add.tileSprite(
      this.game.config.width / 2,
      this.game.config.height / 2,
      this.game.config.width * 6,
      this.game.config.height * 6,
      'transparency'
    );

    let grassTile = this.add.tileSprite(this.game.config.width / 2, this.game.config.height - 100, this.game.config.width * 10, 280, 'grass');

    this.cameras.main.setBackgroundColor('#f0f0f0')

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyPlus = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS);
    this.keyMinus = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
    this.keyBracketLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.OPEN_BRACKET);
    this.keyBracketRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CLOSED_BRACKET);
    this.keyQuote = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.QUOTES);
    this.keyBackslash = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACK_SLASH);
    this.keyBackspace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    this.keyDelete = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DELETE);

    this.initCamera();
    this.displayAllEnities();

    if (LEVEL_DATA) {
      LEVEL_DATA.forEach((e) => {
        this.newEntity(e);
      });
    }

    setInterval(() => {
      fetch(CONFIG.EDITOR_URL, {
        method: 'POST',
        body: this.generateJson(),
        // credentials: 'include'
      });
    }, 2500);
  }

  update(time, delta) {
    this.cameraControls.update(delta);

    let rotationStep = Math.PI / 128;
    let scaleStep = 0.05;
    let keyDownDuration = 100;

    let cur = this.currentEntity;

    if (cur) {
      if (Phaser.Input.Keyboard.DownDuration(this.keyBracketLeft, keyDownDuration)) {
        cur.sprite.scaleX -= scaleStep;
      } else if (Phaser.Input.Keyboard.DownDuration(this.keyBracketRight, keyDownDuration)) {
        cur.sprite.scaleX += scaleStep;
      } else if (Phaser.Input.Keyboard.DownDuration(this.keyQuote, keyDownDuration)) {
        cur.sprite.scaleY -= scaleStep;
      } else if (Phaser.Input.Keyboard.DownDuration(this.keyBackslash, keyDownDuration)) {
        cur.sprite.scaleY += scaleStep;
      } else if (Phaser.Input.Keyboard.DownDuration(this.keyA)) {
        cur.sprite.rotation -= rotationStep;
      } else if (Phaser.Input.Keyboard.DownDuration(this.keyD, keyDownDuration)) {
        cur.sprite.rotation += rotationStep;
      } else if (Phaser.Input.Keyboard.DownDuration(this.keyBackspace, keyDownDuration) || Phaser.Input.Keyboard.DownDuration(this.keyDelete, keyDownDuration)) {
        this.entities = this.entities.filter(e => e !== cur);
        cur.sprite.destroy();
      }
    }
  }

  initCamera() {
    var cursors = this.input.keyboard.createCursorKeys();

    var controlConfig = {
        camera: this.cameras.main,
        left: cursors.left,
        right: cursors.right,
        up: cursors.up,
        down: cursors.down,
        zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
        zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
        acceleration: 0.06,
        drag: 0.0005,
        maxSpeed: 1.0
    };

    this.cameraControls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
  }

  displayAllEnities() {
    let x = 100;
    let y = 150;

    for (let i = 0; i < PlainEntitiesList.length; i++) {
      let entity = new PlainEntitiesList[i](this, x, y);
      entity.body.isStatic = true;
      entity.destructionMomentum = Infinity;

      entity.sprite.setInteractive();

      entity.sprite.on('pointerdown', function() {
        let ne = new KeyedEntitiesList[entity.constructor.name](
          this.scene,
          NEW_ENTITY_START_POSITION_X,
          NEW_ENTITY_START_POSITION_Y
        );
        ne.body.frictionAir = 1;
        ne.destructionMomentum = Infinity;
        ne.sprite.setInteractive();

        this.scene.entities.forEach(e => e.sprite.clearTint());
        ne.sprite.setTint(ENTITY_SELECTED_COLOR);

        this.scene.entities.push(ne);
        this.scene.currentEntity = ne;

        ne.sprite.on('pointerdown', this.scene.onNewEntityClick);
      });

      x += entity.sprite.displayWidth + 100;
    }
  }

  generateJson() {
    let out = {
      name: LEVEL_NAME,
      entities: [],
    };

    this.entities.forEach(v => {
      out.entities.push({
        type: v.constructor.name,
        x: v.sprite.x,
        y: v.sprite.y,
        rotation: v.sprite.rotation,
        scaleX: v.sprite.scaleX,
        scaleY: v.sprite.scaleY
      });
    });

    return JSON.stringify(out);
  }

  newEntity(e) {
    let ne = new KeyedEntitiesList[e.type](this, e.x, e.y);

    ne.sprite
      .setScale(e.scaleX, e.scaleY)
      .setRotation(e.rotation);

    ne.body.frictionAir = 1;
    ne.destructionMomentum = Infinity;
    ne.sprite.setInteractive();

    this.entities.push(ne);

    ne.sprite.on('pointerdown', this.onNewEntityClick);
  }

  getEntityData(e) {
    return {
      type: e.constructor.name,
      x: e.sprite.x,
      y: e.sprite.y,
      rotation: e.sprite.rotation,
      scaleX: e.sprite.scaleX,
      scaleY: e.sprite.scaleY
    };
  }

  onNewEntityClick(e) {
    if (e.primaryDown) { // левая кнопочка
      this.scene.entities.forEach(e => e.sprite.clearTint());

      this.setTint(ENTITY_SELECTED_COLOR);

      this.scene.currentEntity = this.entityInstance;
    } else { // правая кнопочка
      let copyData = this.scene.getEntityData(this.entityInstance);

      copyData.x = NEW_ENTITY_START_POSITION_X;
      copyData.y = NEW_ENTITY_START_POSITION_Y;

      this.scene.newEntity(copyData);
    }
  }
}