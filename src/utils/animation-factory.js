import getGame from "../game";

export default function animationFactory(
  img,
  width,
  height,
  spriteWidth,
  spriteHeight
) {
  const game = getGame();
  let [currentFrame, spriteX, spriteY] = [0, 0, 0];
  const cols = Math.floor(img.width / spriteWidth);
  const rows = Math.floor(img.height / spriteHeight);

  return {
    draw(posX = 0, posY = 0) {
      spriteX = (currentFrame % cols) * spriteWidth;
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
      currentFrame += 1;
      if (currentFrame === rows * cols - 1) {
        currentFrame = 0;
      }
    },
  };
  1;
}
