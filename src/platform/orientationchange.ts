import ui from '../ui/ui';
import isMobile from './is-mobile';
import fullscreenFunction from './fullscreen-function';

export default function(game) {
  let orientation: any = window.orientation; // под файрфоксом не работает — флексим
  let appealScreen = ui.get('.wrong-orientation-screen');

  if (isMobile()) {
    if (Math.abs(orientation) !== 90 {
      ui.enableUIInteraction();
      ui.show(appealScreen);
    } else {
      ui.disableUIInteraction();
      ui.hide(appealScreen);

      document.documentElement[fullscreenFunction]();
    }
  }
}