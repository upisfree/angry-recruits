import Phaser from '../../lib/phaser';

export default function() {
  var cursors = this.input.keyboard.createCursorKeys();

  var controlConfig = {
    camera: this.cameras.main,
    left: cursors.left,
    right: cursors.right,
    up: cursors.up,
    down: cursors.down,
    zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
    zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
    acceleration: 0.1,
    drag: 0.0005,
    maxSpeed: 2.0
  };

  this.cameraControls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
}