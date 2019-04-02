import ui from '../ui/ui';
import resize from './resize';
import isMobile from './is-mobile';
import requestFullscreen from './request-fullscreen';

export default function(game) {
  let orientation: any = window.orientation; // под файрфоксом не работает — флексим
  let appealScreen = ui.get('.wrong-orientation-screen');

  resize(game);

  if (isMobile()) {
    requestFullscreen();

    if (Math.abs(orientation) !== 90) {
      ui.enableUIInteraction();
      ui.show(appealScreen);
    } else {
      ui.disableUIInteraction();
      ui.hide(appealScreen);
    }
  }
}