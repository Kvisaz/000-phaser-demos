import * as Phaser from 'phaser';
import './style.css';
import {GameScene} from "./scenes/GameScene";
import {phaserConfig} from "./config";

console.log('Game starting...');


enum SCENES {
    Game = 'Game',
  };

const game = new Phaser.Game({
    ...phaserConfig,
    scene: [
        new GameScene(SCENES.Game),
    ],
})
  

console.log('....Game started!')