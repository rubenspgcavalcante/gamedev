import getGame from "../game";

export function animationFactory(
  img,
  posX,
  width,
  height,
  spriteWidth,
  spriteHeight
) {
  const game = getGame();
  let [currentFrame, spriteX, spriteY] = [0, 0, 0];

  const offset = 72;
  const posY = game.height - height - offset;

  const cols = Number(img.width / spriteWidth);
  const rows = Number(img.height / spriteHeight);

  return {
    draw() {
      spriteX = currentFrame % (spriteWidth * cols);
      spriteY = Math.floor(currentFrame / cols) * spriteHeight;

      game.image(
        img,
        posX,
        posY,
        width,
        height,
        spriteX,
        spriteY,
        spriteWidth,
        spriteHeight
      );
    },

    animate() {
      currentFrame = currentFrame === cols * rows ? currentFrame + 1 : 0;
    },
  };
}
