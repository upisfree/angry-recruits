import isWin from './is-win';
import { initVKWidget } from '../../lib/vk';
import countShellsScore from './count-shells-score';
import ui from '../../ui/ui';

// смотреть sleeping всех тел, а не только врагов и снарядов
export default function(time, delta) {
  // camera update
  if (this.cameraControls) {
    this.cameraControls.update(delta);    
  }

  // win check
  let currentWinStatus = isWin(this);
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
      callback = win; // ВРЕМЕННО ПОКА НЕ ПОЧИНИЛ ОПРЕДЕЛЕНИЕ ПОБЕДЫ
      // callback = fail;
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
        ui.hide('.score-screen');

        ui.enableUIInteraction();

        ui.get('.next-level-screen .score-text-value').textContent = this.game.score;
        let nextLevelScreen = ui.show('.next-level-screen');
        nextLevelScreen.addEventListener('click', () => {
          ui.hide(nextLevelScreen);
          ui.show('.score-screen');

          ui.disableUIInteraction();

          this.scene.start(this.nextLevel.name);
        }, { once: true });
      } else {
        this.game.isGameOver = true;

        showScoreScreenAfterComics(this, 'win');

        initVKWidget(this);
      }
    });
  }
}

function fail() {
  if (!this.game.isGameOver && !this.game.isLevelOver) {
    this.game.isGameOver = true;
    this.game.isLevelOver = true;

    console.log('fail');

    showScoreScreenAfterComics(this, 'fail');
  }
}

function showScoreScreenAfterComics(scene, screen) {
    ui.enableUIInteraction();
    ui.hide('.score-screen');
    ui.get(`.${ screen }-screen .score-text-value`).textContent = scene.game.score;

    let comicsScreen = ui.get('.comics-end');

    ui.show(comicsScreen);

    // iOS?
    comicsScreen.addEventListener('click', () => {
      ui.hide(comicsScreen);
      ui.show(`.${ screen }-screen`);      
    });
}