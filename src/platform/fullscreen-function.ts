let html = (<any>document).documentElement;
let functionString;

if (html.requestFullscreen) {
  functionString = 'requestFullscreen';
} else if (html.webkitRequestFullscreen) {
  functionString = 'webkitRequestFullscreen';
} else if (html.mozRequestFullScreen) {
  functionString = 'mozRequestFullScreen';
} else if (html.msRequestFullscreen) {
  functionString = 'msRequestFullscreen';
}

export default functionString