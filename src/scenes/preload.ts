export function preload(this: Phaser.Scene): void {
  this.load.image("tiles", "/assets/level-tileset.png");

  this.load.tilemapTiledJSON("level-1", "/assets/level-1.json");
  this.load.tilemapTiledJSON("level-2", "/assets/level-2.json");
  this.load.tilemapTiledJSON("level-3", "/assets/level-3.json");
  this.load.tilemapTiledJSON("level-4", "/assets/level-4.json");

  this.load.image("player", "/assets/ufo.png");

  this.load.spritesheet("coin", "/assets/objects-tileset.png", {
    frameWidth: 16,
    frameHeight: 16,
  });

  this.load.audio("sfx:coin", '/media/retro-coin.wav');
  this.load.audio("theme", '/media/music.m4a');
}
