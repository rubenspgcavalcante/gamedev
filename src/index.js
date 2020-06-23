import P5 from "p5";
import "p5.sound";
import "./style.css";

import forestSprite from "./imagens/cenario/floresta.png";
import charSprites from "./imagens/personagem/correndo.png";
import bgMusic from "./soundtrack/bg-track.mp3";

import Character from "./objects/Character";
import Scene from "./objects/Scene";

function sketch(game) {
  let sceneBg = null;
  let charImg = null;
  let scene = null;
  let music = null;
  let character = null;
  let scale = null;

  game.preload = () => {
    sceneBg = game.loadImage(forestSprite);
    charImg = game.loadImage(charSprites);
    music = game.loadSound(bgMusic);
  };

  game.setup = () => {
    game.createCanvas(game.windowWidth, game.windowHeight);
    scene = new Scene(game, sceneBg, 6, music);
    scale = sceneBg.height / sceneBg.width;
    character = new Character(game, charImg, 220, 270, 135, 110, scale);

    game.frameRate(30);
    music.loop();
  };

  game.draw = () => {
    scene.draw();
    scene.animate();
    character.draw();
  };
}


// Boot on!
const p5 = new P5(sketch);
