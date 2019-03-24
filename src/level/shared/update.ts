import isWin from './is-win';
import onWin from './on-win';
import countShellsScore from './count-shells-score';

// смотреть sleeping всех тел, а не только врагов и снарядов
export default function(time, delta) {
  // camera update
  if (this.cameraControls) {
    this.cameraControls.update(delta);    
  }

  // win check
  let currentWinStatus = isWin(this.shells, this.enemies, this.slingshot);
  let timeout;
  let callback;

  if (this.isWin !== currentWinStatus && this.winTimeEvent) {
    this.winTimeEvent.remove();
  }

  this.isWin = currentWinStatus;

  if (this.isWin !== undefined && this.isWin !== null) {
    if (this.isWin === true) {
      callback = win;
    } else if (this.isWin === false) {
      callback = fail;
    }

    this.winTimeEvent = this.time.addEvent({
      delay: this.winTimeout,
      callback: callback,
      callbackScope: this
    });
  }
}

function win() {
  if (!this.game.isGameOver && !this.game.isLevelOver) {
    console.log('win');

    this.game.isLevelOver = true;

    countShellsScore(this, () => {
      if (this.nextLevel) {
        this.scene.start(this.nextLevel.name);
      } else {
        this.game.isGameOver = true;

        onWin(this);
      }
    });
  }
}

function fail() {
  if (!this.game.isGameOver && !this.game.isLevelOver) {
    this.game.isGameOver = true;
    this.game.isLevelOver = true;

    console.log('fail');

    location.reload();
  }
}