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
      this.game.score = this.score;

      if (this.nextLevel) {
        ui.hide('.score-screen');

        ui.enableUIInteraction();

        ui.get('.next-level-screen-score-text-value').textContent = this.game.score;
        let nextLevelScreen = ui.show('.next-level-screen');
        nextLevelScreen.addEventListener('click', () => {
          ui.hide(nextLevelScreen);
          ui.show('.score-screen');

          ui.disableUIInteraction();

          this.scene.start(this.nextLevel.name);
        }, { once: true });
      } else {
        this.game.isGameOver = true;

        this.sound.playAudioSprite('soundsprite', 'maxim', {
          volume: 0.6,
        });

        ui.enableUIInteraction();
        ui.hide('.score-screen');

        ui.get('.win-screen .score-text-value').textContent = this.game.score;

        let comicsScreen = ui.get('.comics-end');

        ui.show(comicsScreen);

        comicsScreen.addEventListener('click', () => {
          ui.hide(comicsScreen);
          ui.show('.win-screen');
        });

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

    ui.enableUIInteraction();
    ui.hide('.score-screen');

    ui.get('.fail-screen-score-text-value').textContent = this.score;

    let failScreen = ui.show('.fail-screen');
    failScreen.addEventListener('click', () => {
      this.game.isGameOver = false;
      this.game.isLevelOver = false;

      ui.disableUIInteraction();
      ui.hide(failScreen);
      ui.show('.score-screen');

      this.scene.restart();

      ui.get('.score-screen .score-text-value').textContent = this.game.score;
    });
  }
}