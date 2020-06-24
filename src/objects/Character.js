import getGame from "../game";
import charSprites from "../images/character/running.png";
import jumpFX from "../soundtrack/jump.mp3";

import animationFactory from "../utils/animation-factory";
import { GRAVITY, JUMP_SPEED, CHARACTER_GROUND_OFFSET } from "../utils/constants";

export default class Character {
  static JUMP_LIMIT = 2;
  static HEIGHT = 132;
  static WIDTH = 162;

  static img = null;
  static jumpFX = null;

  static preload() {
    const game = getGame();

    Character.img = game.loadImage(charSprites);
    Character.jumpFX = game.loadSound(jumpFX);
  }

  constructor(spriteWidth, spriteHeight, scale) {
    const game = getGame();

    this.width = Character.HEIGHT / scale;
    this.height = Character.WIDTH / scale;
    this.defaultY = game.height - this.width - CHARACTER_GROUND_OFFSET;
    this.posX = 0;
    this.posY = this.defaultY;

    this.scale = scale;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;

    this.jumpCounter = 0;
    this.jumpSpeed = 0;

    this.animator = animationFactory(
      Character.img,
      this.width,
      this.height,
      spriteWidth,
      spriteHeight
    );
  }

  keyPressed(key) {
    if (key === " " || key === "ArrowUp") {
      this.jump();
    }
  }

  draw() {
    this.animator.draw(this.posX, this.posY);
    this.applyGravity();
  }

  animate() {
    this.animator.animate();
  }

  isColliding({ posX, posY, width, height }) {
    const game = getGame();
    const precision = 0.7;

    return game.collideRectRect(
      this.posX,
      this.posY,
      this.width * precision,
      this.height * precision,
      posX,
      posY,
      width * precision,
      height * precision
    );
  }

  jump() {
    if (this.jumpCounter < Character.JUMP_LIMIT) {
      this.jumpSpeed = JUMP_SPEED;
      this.jumpCounter++;
      Character.jumpFX.play();
    }
  }

  applyGravity() {
    this.posY += this.jumpSpeed;
    this.jumpSpeed += GRAVITY;

    if (this.posY > this.defaultY) {
      this.posY = this.defaultY;
      this.jumpCounter = 0;
    }
  }
}
