export default class Scene {
  constructor(game, img, speed) {
    this.game = game;
    this.img = img;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = game.width;
  }

  draw() {
    const { game } = this;

    game.image(this.img, this.x1, 0, game.width, game.height);
    game.image(this.img, this.x2, 0, game.width, game.height);
  }

  animate() {
    const { game, speed, x1, x2 } = this;

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
