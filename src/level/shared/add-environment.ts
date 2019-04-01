export default function(nextLevel) {
  let w = this.game.config.width;
  let h = this.game.config.height;

  // let tileSprite = this.add.tileSprite(this.game.config.width / 2, 1920, 20000, 290, 'grass');
  // console.log(tileSprite);
  // this.matter.add.tileBody(tileSprite, {});
  // let grass = this.matter.add.image(this.game.config.width / 2, this.game.config.height, 'grass', null, { isStatic: true });

  let skyTile = this.add.sprite(0, 0, (nextLevel) ? 'sky' : 'sky-end')
    .setDisplaySize(w * 4, h * 4)
    .setPosition(w * 4, h)
    .setOrigin(1);
    // .setScrollFactor(0.5);

  // 87 — высота картинки верхней части травы
  // 193 — высота картинки нижней части травы
  let grassBottomTile = this.add.tileSprite(w / 2, h - 100, w * 10, 193, (nextLevel) ? 'grass-bottom' : 'grass-bottom-end');
  let grassBottomSprite = this.matter.add.gameObject(grassBottomTile)
    .setStatic(true);
  let grassBottomTop = this.add.tileSprite(w / 2, h - 240, w * 10, 87, (nextLevel) ? 'grass-top' : 'grass-top-end');

  grassBottomSprite.body.label = 'grassBottomSprite';

  this.cameras.main.setBounds(0, -h * 3, w * 4, h * 4);
}