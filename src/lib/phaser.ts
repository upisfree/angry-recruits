// lib/phaser.ts
// тут я модифицирую некоторые методы фазера (стараясь попутно всё не сломать),
// иначе пиздец как больно делать элементарные вещи 

import CONFIG from '../config';
var Phaser = window['Phaser'];
var Constraint = Phaser.Physics.Matter.Matter.Constraint;

Phaser.Physics.Matter.Factory.prototype.constraint = function(bodyA, bodyB, length, stiffness, options) {
  if (stiffness === undefined) { stiffness = 1; }
  if (options === undefined) { options = {}; }
  if (bodyA) { options.bodyA = (bodyA.type === 'body') ? bodyA : bodyA.body; }
  if (bodyB) { options.bodyB = (bodyB.type === 'body') ? bodyB : bodyB.body; }
  if (length) { options.length = length; }
  if (stiffness) { options.stiffness = stiffness; }

  var constraint = Constraint.create(options);

  this.world.add(constraint);

  return constraint;
};

Phaser.Cameras.Controls.SmoothedKeyControl.prototype.update = function(delta) {
  if (!this.active) {
    return;
  }

  if (delta === undefined) { delta = 1; }

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

    if (cam.zoom < CONFIG.MIN_ZOOM) {
      cam.zoom = CONFIG.MIN_ZOOM;
    }

    if (cam.zoom > CONFIG.MAX_ZOOM) {
      cam.zoom = CONFIG.MAX_ZOOM;
    }
  }
};

export default Phaser;