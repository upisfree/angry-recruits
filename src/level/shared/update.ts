import isWin from './is-win';
import isAllSleeping from './is-all-sleeping';

// смотреть sleeping всех тел, а не только врагов и снарядов
export default function() {
  // console.log(this);


  // win check
  let currentWinStatus = isWin(this.shells, this.enemies, this.slingshot, this.shellsQueue);
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
  console.log('win', this.nextLevel.name);

  this.scene.start(this.nextLevel.name);
}

function fail() {
  console.log('fail');

  location.reload();
}