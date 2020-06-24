import P5 from "p5";
import "p5.sound";
import "p5.collide2d";

import bgMusic from "./soundtrack/bg-track.mp3";
import Character from "./objects/Character";
import Scene from "./objects/Scene";
import Enemy from "./objects/Enemy";

const getGame = (() => {
  let game;

  const sketch = (_game) => {
    game = _game;
    let scene = null;
    let character = null;
    let enemy = null;
    let music = null;

    game.preload = () => {
      Scene.preload();
      Character.preload();
      Enemy.preload();
      music = game.loadSound(bgMusic);
    };

    game.setup = () => {
      game.createCanvas(game.windowWidth, game.windowHeight);
      scene = new Scene(6, music);
      character = new Character(220, 270, Scene.getScale());
      enemy = new Enemy(105, 100, Scene.getScale());

      game.frameRate(30);
      music.loop();
    };

    game.keyPressed = () => {
      character.keyPressed(game.key);
    };

    game.draw = () => {
      scene.draw();
      scene.animate();
      character.draw();
      character.animate();
      enemy.draw();
      enemy.animate();

      if (character.isColliding(enemy)) {
        game.noLoop();
      }
    };
  };

  return () => {
    if (!game) {
      const p5 = new P5(sketch);
    }
    return game;
  };
})();

export default getGame;
