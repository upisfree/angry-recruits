export default function(progress) {
  const MAX_SATURATION = 200;
  let subpoenasBack = <any>document.querySelector('.subpoenas-back'); // ну такое каждый раз тут это вызывать...

  subpoenasBack.style.filter = `hue-rotate(1030deg) saturate(${ progress * MAX_SATURATION })`;
}