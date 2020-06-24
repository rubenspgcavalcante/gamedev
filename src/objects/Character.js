import getGame from "../game";
import charSprites from "../images/character/running.png";

export default class Character {
  static charImg = null;
  static height = 135;
  static width = 110;

  static preload() {
    const game = getGame();
    Character.charImg = game.loadImage(charSprites);
  }

  constructor(sizeX, sizeY, scale) {
    this.scale = scale;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.charHeight = Character.height / scale;
    this.charWidth = Character.width / scale;
    this.currFrame = 0;

    this.colSize = Math.floor(Character.charImg.width / this.sizeX);
    this.lineSize = Math.floor(Character.charImg.height / this.sizeY);
  }

  draw() {
    const game = getGame();
    const { currFrame, colSize, sizeX, sizeY, charHeight, charWidth } = this;

    let x = (currFrame % colSize) * sizeX;
    let y = Math.floor(currFrame / colSize) * sizeY;

    game.image(
      Character.charImg,
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
