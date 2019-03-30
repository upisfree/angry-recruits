import { default as Entity, IDestructionOptions } from '../entity';
import randomBetween from '../../utils/random-between';

export default class Shell extends Entity {
  isShooted: boolean = false; // флаг, чтобы нельзя было взять снаряд после выстрела
  isDirty: boolean = false; // «девственен» ли снаряд — не было ли ещё ни одного столкновения
  isInSlingshot: boolean = false; // флаг, чтобы можно было таскать только снаряд в рогатке
  isMaxTensionReached: boolean = false; // флаг, чтобы можно было оборвать снаряд, который слишком сильно натянули
  velocityCutFactor: number = 1; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
  pathGroup: any; // группа, в которой хранятся все спрайты, показывающие путь полёта

  lastBlinkTime: number = Date.now() + randomBetween(1000, 5000); // чтобы увеличить разброс первого моргания
  closedEyesDuration: number = 200;
  blinkInterval: number = randomBetween(2000, 5000);

  constructor(
    scene: any,
    x: number,
    y: number,
    textureKey: string,
    body: any,
    destructionOptions: IDestructionOptions = null
  ) {
    super(scene, x, y, 'shell', textureKey, body, destructionOptions);

    scene.shells.push(this);

    this.scene.events.on('update', this.update.bind(this));

    this.scene.matterCollision.addOnCollideStart({
      objectA: this.sprite,
      callback: () => {
        this.isDirty = true;
      }
    });

    // нет времени разбираться с анимациями фазера
    this.lastBlinkTime = Date.now();
  }

  activatePower() { }

  update() {
    this.updateBlinking();
  }

  private updateBlinking() {
    // если спрайт уничтожен, не моргаем
    if (!this.sprite.active) {
      return;
    }

    let key = this.sprite.texture.key.split('-');

    // открываю глаза
    if (Date.now() - this.lastBlinkTime > this.closedEyesDuration) {
      if (key[2] === 'sleep') {
        if (this.isShooted && this.isDirty) {
          key[2] = 'angry';
        } else {
          key = this.textureKey.split('-');
        }
      }
    }

    // закрываю глаза
    if (Date.now() - this.lastBlinkTime > this.blinkInterval) {
      if (key[2] === 'angry') {
        key[2] = 'sleep';
      } else {
        key.push('sleep');        
      }

      this.lastBlinkTime = Date.now();
    }

    this.sprite.setTexture(key.join('-'));
  }
}