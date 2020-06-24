import getGame from "../game";
import dropletImg from "../images/enemies/droplet.png";
import animationFactory from "../utils/animation-factory";
import { ENEMY_GROUND_OFFSET } from "../utils/constants";

export default class Enemy {
  static WIDTH = 52;
  static HEIGHT = 50;
  static img = null;

  static preload() {
    const game = getGame();
    Enemy.img = game.loadImage(dropletImg);
  }

  constructor(spriteWidth, spriteHeight, scale) {
    const game = getGame();

    this.width = Enemy.WIDTH / scale;
    this.height = Enemy.HEIGHT / scale;
    this.posX = game.width;
    this.posY = game.height - this.height - ENEMY_GROUND_OFFSET;

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

    this.animator.draw(this.posX, this.posY);
  }

  animate() {
    this.animator.animate();
  }
}
