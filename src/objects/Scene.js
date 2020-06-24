import getGame from "../game";
import forestSprite from "../images/scene/forest.png";

export default class Scene {
  static bgImg = null;

  static preload() {
    const game = getGame();
    Scene.bgImg = game.loadImage(forestSprite);
  }

  static getScale() {
    return Scene.bgImg.height / Scene.bgImg.width;
  }

  constructor(speed) {
    const game = getGame();
    this.speed = speed;
    this.x1 = 0;
    this.x2 = game.width;
  }

  draw() {
    const game = getGame();
    game.image(Scene.bgImg, this.x1, 0, game.width, game.height);
    game.image(Scene.bgImg, this.x2, 0, game.width, game.height);
  }

  animate() {
    const game = getGame();
    const { speed } = this;

    this.x1 = this.x1 - speed;
    this.x2 = this.x2 - speed;

    if (this.x1 < -game.width) {
      this.x1 = game.width;
    }
    if (this.x2 < -game.width) {
      this.x2 = game.width;
    }
  }
}
