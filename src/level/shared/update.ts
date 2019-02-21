import isWin from './is-win';

// смотреть sleeping всех тел, а не только врагов и снарядов
export default function() {
  let win = isWin(this.shells, this.enemies, this.slingshot, this.shellsQueue);

  if (win === true) {
    console.log('win', this.nextLevel.name);

    this.scene.start(this.nextLevel.name);
  } else if (win === false) {
    console.log('fail');

    location.reload();
  }
}