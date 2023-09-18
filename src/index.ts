import * as Phaser from "phaser";
import "./style.css";
import {
  AnimationScene,
  HelloWorld,
  AnimationMovingScene,
  SpriteScene, PhysicMove, PhysicCollision,
} from "./scenes";
import { phaserConfig } from "./config";

/**
 *  Phaser entry point - like
 *  ReactDOM
 *  .createRoot('document.getElementById('game'))
 *  .render(Start)
 *
 *  param - Phaser.Types.Core.GameConfig
 *  - scenes
 *  - width/heihgt
 *  - align
 */
const game = new Phaser.Game({
  ...phaserConfig,
  scene: [
    // first scene run automatically
    new HelloWorld(HelloWorld.name),
    new SpriteScene(SpriteScene.name),
    new AnimationScene(AnimationScene.name),
    new AnimationMovingScene(AnimationMovingScene.name),
    new PhysicMove(PhysicMove.name),
    new PhysicCollision(PhysicCollision.name),
  ],
});
