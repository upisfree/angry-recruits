import ui from './ui';

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
  });
}