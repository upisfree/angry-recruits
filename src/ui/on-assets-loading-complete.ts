import ui from './ui';
import orientationchange from '../platform/orientationchange';
import isMobile from '../platform/is-mobile';
import fullscreenFunction from '../platform/fullscreen-function';

export default function() {
  this.systems.scene.scene.pause();

  ui.hide('.subpoenas');

  // iOS?
  let comicsStart = ui.get('.comics-start');

  comicsStart.addEventListener('click', () => {
    ui.disableUIInteraction();

    ui.hide(comicsStart);

    ui.show('#game');

    ui.showUI();
  
    this.systems.scene.scene.resume();

    if (isMobile()) {
      document.documentElement[fullscreenFunction]();

      orientationchange(this.systems.game);      
    }
  });
}