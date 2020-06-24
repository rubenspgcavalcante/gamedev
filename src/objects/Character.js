import getGame from "../game";
import charSprites from "../images/character/running.png";
import { animationFactory } from "../factories/animation-factory";

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

    this.animator = animationFactory(
      Character.charImg,
      0,
      this.charHeight,
      this.charWidth,
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
