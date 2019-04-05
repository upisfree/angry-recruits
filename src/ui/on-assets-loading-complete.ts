import ui from './ui';
import orientationchange from '../platform/orientationchange';
import isMobile from '../platform/is-mobile';

export default function() {
  this.systems.scene.scene.pause();

  ui.hide('.subpoenas');
  ui.hide('.score-screen');

  let comicsStart = ui.get('.comics-start');

  comicsStart.addEventListener('click', () => {
    ui.disableUIInteraction();

    ui.hide(comicsStart);

    ui.show('#game');

    ui.show('.score-screen');

    ui.showUI();
  
    this.systems.scene.scene.resume();

    orientationchange(this.systems.game);      
  });
}