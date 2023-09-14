
/***************************
 * Phaser Config
 ****************************/
const scaleConfig: Phaser.Types.Core.ScaleConfig = {
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: 'game',
  width: 960,
  height: 640,
};

export type IPhaserConfig = Phaser.Types.Core.GameConfig;

export const phaserConfig: IPhaserConfig = {
  type: Phaser.AUTO,
  backgroundColor: 0x222222,
  transparent: true,
  scale: scaleConfig,
  scene: [],
};