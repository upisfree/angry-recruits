import CONFIG from '../config';
import Phaser from '../lib/phaser';
import preload from '../level/shared/preload';
import Entity from '../entity/entity';
import Shell from '../entity/shell/shell';
import { PlainEntitiesList, KeyedEntitiesList } from '../entity/list';

// к сожалению, модули в es6 только статичные и генерировать их нельзя :(
import Level1Data from '../level/data/level-1.data';
import Level2Data from '../level/data/level-2.data';

const LEVEL_NAME = 'level-1';
const LEVEL_DATA = Level1Data;

const ENTITY_SELECTED_COLOR = 0x00ffff;

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
  keyBackspace: any;
  keyDelete: any;

  cameraControls: any;

  constructor(config) {
    super(config);
  }

  create() {
    this.matter.world.setBounds(undefined, undefined, undefined, undefined, undefined, false, false, false, true);
    this.matter.add.mouseSpring();
    this.matter.world.disableGravity();
    this.matter.world.createDebugGraphic();

    this.add.tileSprite(
      this.game.config.width / 2,
      this.game.config.height / 2,
      this.game.config.width * 4,
      this.game.config.height * 4,
      'transparency'
    );

    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyPlus = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.PLUS);
    this.keyMinus = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.MINUS);
    this.keyBackspace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.BACKSPACE);
    this.keyDelete = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DELETE);

    this.initCamera();
    this.displayAllEnities();

    if (LEVEL_DATA) {
      LEVEL_DATA.forEach((e) => {
        let newEntity = new KeyedEntitiesList[e.type](this, e.x, e.y);

        newEntity.sprite
          .setRotation(e.rotation)
          .setScale(e.scaleX, e.scaleY);

        newEntity.body.frictionAir = 1;
        newEntity.destructionMomentum = Infinity;
        newEntity.sprite.setInteractive();

        this.entities.push(newEntity);

        newEntity.sprite.on('pointerdown', this.onNewEntityClick);
      });
    }

    setInterval(() => {
      fetch(CONFIG.EDITOR_URL, {
        method: 'POST',
        body: this.generateJson(),
        // credentials: 'include'
      });
    }, 1000);
  }

  update(time, delta) {
    this.cameraControls.update(delta);

    let rotationStep = 22.5;
    let scaleStep = 0.05;

    let cur = this.currentEntity;

    if (cur) {
      if (Phaser.Input.Keyboard.JustDown(this.keyA)) {
        cur.sprite.angle -= rotationStep;
      } else if (Phaser.Input.Keyboard.JustDown(this.keyD)) {
        cur.sprite.angle += rotationStep;
      } else if (Phaser.Input.Keyboard.JustDown(this.keyPlus)) {
        cur.sprite.scaleX += scaleStep;
        cur.sprite.scaleY += scaleStep;
      } else if (Phaser.Input.Keyboard.JustDown(this.keyMinus)) {
        cur.sprite.scaleX -= scaleStep;
        cur.sprite.scaleY -= scaleStep;
      } else if (Phaser.Input.Keyboard.JustDown(this.keyBackspace) || Phaser.Input.Keyboard.JustDown(this.keyDelete)) {
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
        let newEntity = new KeyedEntitiesList[entity.constructor.name](
          this.scene,
          1920 - 100,
          150
        );
        newEntity.body.frictionAir = 1;
        newEntity.destructionMomentum = Infinity;
        newEntity.sprite.setInteractive();
        newEntity.sprite.setTint(ENTITY_SELECTED_COLOR);

        this.scene.entities.push(newEntity);
        this.scene.currentEntity = newEntity;

        newEntity.sprite.on('pointerdown', this.scene.onNewEntityClick);
      });

      x += 100;
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

  onNewEntityClick() {
    this.scene.entities.forEach(e => e.sprite.clearTint());

    this.setTint(ENTITY_SELECTED_COLOR);

    this.scene.currentEntity = this.entityInstance;
  }
}