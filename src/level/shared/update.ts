import isWin from './is-win';
import isAllSleeping from './is-all-sleeping';

// смотреть sleeping всех тел, а не только врагов и снарядов
export default function() {
  let currentWinStatus = isWin(this.shells, this.enemies, this.slingshot, this.shellsQueue);
  let timeout;
  let callback;

  if (this.winStatus !== currentWinStatus && this.winTimeout) {
    this.winTimeout.remove();
  }

  this.winStatus = currentWinStatus;

  if (this.winStatus !== undefined && this.winStatus !== null) {
    if (this.winStatus === true) {
      callback = win;
    } else if (this.winStatus === false) {
      callback = fail;
    }

    this.winTimeout = this.time.addEvent({
      delay: 5000,
      callback: callback,
      callbackScope: this
    });
  }
}

function win() {
  console.log('win', this.nextLevel.name);

  this.scene.start(this.nextLevel.name);
}

function fail() {
  console.log('fail');

  location.reload();
}