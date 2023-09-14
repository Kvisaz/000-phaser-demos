
export class GameScene extends Phaser.Scene {

  create() {
    console.log(`create game}`)
    this.add.text(0,0, 'Hello World').setOrigin(0);
  }
}
