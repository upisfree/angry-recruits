import Phaser from '../../lib/phaser';
import Shell from './shell';
const { Bodies } = Phaser.Physics.Matter.Matter;

export default class RecruitShell extends Shell {
  constructor(scene, x, y) {
    super(
      scene,
      x,
      y,
      'recruit',
      Bodies.circle(0, 0, 80, {
        density: 0.015, // масса тела — 74 кг
        restitution: 0.25,
        plugin: {
          wrap: {
            min: {
              x: 0,
              y: 0
            },
            max: {
              x: scene.game.config.width,
              y: scene.game.config.height
            }
          }
        }
      })
    );
  }
}