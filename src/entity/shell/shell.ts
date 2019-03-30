import { default as Entity, IDestructionOptions } from '../entity';

export default class Shell extends Entity {
  isShooted: boolean = false; // флаг, чтобы нельзя было взять снаряд после выстрела
  isDirty: boolean = false; // «девственен» ли снаряд — не было ли ещё ни одного столкновения
  isInSlingshot: boolean = false; // флаг, чтобы можно было таскать только снаряд в рогатке
  isMaxTensionReached: boolean = false; // флаг, чтобы можно было оборвать снаряд, который слишком сильно натянули
  velocityCutFactor: number = 1; // во сколько раз нужно уменьшить силу полёта снаряда (т.к. я не могу нормально это сделать через constraint)
  pathGroup: any; // группа, в которой хранятся все спрайты, показывающие путь полёта

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

    this.scene.matterCollision.addOnCollideStart({
      objectA: this.sprite,
      callback: () => {
        this.isDirty = true;
      }
    });
  }

  activatePower() { }
}