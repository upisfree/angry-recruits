export default function() {
  let w = this.game.config.width;
  let h = this.game.config.height;

  // let tileSprite = this.add.tileSprite(this.game.config.width / 2, 1920, 20000, 290, 'grass');
  // console.log(tileSprite);
  // this.matter.add.tileBody(tileSprite, {});
  // let grass = this.matter.add.image(this.game.config.width / 2, this.game.config.height, 'grass', null, { isStatic: true });

  let skyTile = this.add.sprite(0, 0, 'sky')
    .setDisplaySize(w * 4, h * 4)
    .setPosition(w * 4, h)
    .setOrigin(1);
    // .setScrollFactor(0.5);

  let grassTile = this.add.tileSprite(w / 2, h - 100, w * 10, 280, 'grass');
  let grassSprite = this.matter.add.gameObject(grassTile).setStatic(true);

  this.cameras.main.setBounds(0, -h * 3, w * 4, h * 4);

  // this.matter.add.image(this.game.config.width / 2, this.game.config.height, 'grass', null, { isStatic: true });
}