import getGame from "../game";
import charSprites from "../images/character/running.png";
import animationFactory from "../utils/animation-factory";
//132, 162, 220, 270
export default class Character {
  static img = null;
  static height = 162;
  static width = 132;

  static preload() {
    const game = getGame();
    Character.img = game.loadImage(charSprites);
  }

  constructor(sizeX, sizeY, scale) {
    this.scale = scale;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.charHeight = Character.height / scale;
    this.charWidth = Character.width / scale;
    this.currFrame = 0;

    this.colSize = Math.floor(Character.img.width / this.sizeX);
    this.lineSize = Math.floor(Character.img.height / this.sizeY);

    this.animator = animationFactory(
      Character.img,
      this.charWidth,
      this.charHeight,
      sizeX,
      sizeY
    );
  }

  draw() {
    this.animator.draw();
  }

  animate() {
    this.animator.animate();
  }
}
