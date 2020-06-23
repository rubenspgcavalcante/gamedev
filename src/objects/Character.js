export default class Character {
  constructor(game, img, sizeX, sizeY, charHeight, charWidth, scale) {
    this.game = game;
    this.img = img;
    this.scale = scale;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.charHeight = charHeight / scale;
    this.charWidth = charWidth / scale;

    this.currFrame = 0;

    this.colSize = Math.floor(this.img.width / this.sizeX);
    this.lineSize = Math.floor(this.img.height / this.sizeY);
  }

  draw() {
    const {
      currFrame,
      colSize,
      sizeX,
      sizeY,
      img,
      game,
      charHeight,
      charWidth,
    } = this;

    let x = (currFrame % colSize) * sizeX;
    let y = Math.floor(currFrame / colSize) * sizeY;

    game.image(
      img,
      0,
      game.height - charHeight,
      charWidth,
      charHeight,
      x,
      y,
      sizeX,
      sizeY
    );

    this.animate();
  }

  animate() {
    this.currFrame++;

    if (this.currFrame === this.colSize * this.lineSize - 1) {
      this.currFrame = 0;
    }
  }
}
