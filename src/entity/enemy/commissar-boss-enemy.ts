import BODY_DATA from '../body.data';
import Enemy from './enemy';
const PhysicsEditorParser = (<any>window).PhysicsEditorParser;

export default class CommissarBossEnemy extends Enemy {
  healthBar: any;
  healthBarWidth: number = 1000;

  constructor(scene, x, y, noScore = false) {
    super(
      scene,
      x,
      y,
      'commissar',
      PhysicsEditorParser.parseBody(x, y, 1, 1, BODY_DATA['commissar-1']),
      {
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
      },
      noScore
    );

    let healthBarWidth = 1000;

    this.healthBar = this.scene.add.graphics();
    this.healthBar.fillStyle(0x598e24).fillRect(0, 0, this.healthBarWidth, 50);
    this.healthBar.depth = 20;
  }

  onMomentumChange() {
    this.healthBar.setScale(this.currentMomentum / this.destructionMomentum, 1);
    this.healthBar.setPosition(this.body.position.x - this.healthBarWidth / 2, this.body.position.y - 850);
  }

  onDestroy(sprite) {
    this.healthBar.destroy();

    this.scene.enemies = this.scene.enemies.filter(e => e !== this);
  }
}