import getGame from "../game";
import dropletImg from "../images/enemies/droplet.png";
import animationFactory from "../utils/animation-factory";

export default class Enemy {
  static img = null;

  static width = 52;
  static height = 50;

  static preload() {
    const game = getGame();
    Enemy.img = game.loadImage(dropletImg);
  }

  constructor(spriteWidth, spriteHeight, scale) {
    const game = getGame();

    this.posX = game.width;
    this.width = Enemy.width / scale;
    this.height = Enemy.height / scale;
    this.speed = 8;

    this.animator = animationFactory(
      Enemy.img,
      this.width,
      this.height,
      spriteWidth,
      spriteHeight
    );
  }

  draw() {
    const game = getGame();

    this.posX = this.posX - this.speed;
    if (this.posX < -game.width) {
      this.posX = game.width;
    }

    this.animator.draw(this.posX);
  }

  animate() {
    this.animator.animate();
  }
}
