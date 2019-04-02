export default function() {
  const el = <any>document.documentElement;

  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else {
    if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else {
      if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen((<any>Element).ALLOW_KEYBOARD_INPUT);
      }
    }
  }
}