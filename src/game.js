import P5 from "p5";
import "p5.sound";

import bgMusic from "./soundtrack/bg-track.mp3";
import Character from "./objects/Character";
import Scene from "./objects/Scene";

const getGame = (() => {
  let game;

  const sketch = (_game) => {
    game = _game;
    let sceneBg = null;
    let charImg = null;
    let scene = null;
    let music = null;
    let character = null;

    game.preload = () => {
      sceneBg = Scene.preload();
      charImg = Character.preload();
      music = game.loadSound(bgMusic);
    };

    game.setup = () => {
      game.createCanvas(game.windowWidth, game.windowHeight);
      scene = new Scene(6, music);
      character = new Character(220, 270, Scene.getScale());
      game.frameRate(30);
      music.loop();
    };

    game.draw = () => {
      scene.draw();
      scene.animate();
      character.draw();
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
