export function preload(this: Phaser.Scene): void {
  this.load.image("tiles", "/assets/level-tileset.png");

  this.load.tilemapTiledJSON("level-1", "/assets/level-1.json");
  this.load.tilemapTiledJSON("level-2", "/assets/level-2.json");
  this.load.tilemapTiledJSON("level-3", "/assets/level-3.json");
  this.load.tilemapTiledJSON("level-4", "/assets/level-4.json");
  this.load.tilemapTiledJSON("level-5", "/assets/level-5.json");
  this.load.tilemapTiledJSON("level-6", "/assets/level-6.json");
  this.load.tilemapTiledJSON("level-7", "/assets/level-7.json");
  this.load.tilemapTiledJSON("level-8", "/assets/level-8.json");
  this.load.tilemapTiledJSON("level-9", "/assets/level-9.json");
  this.load.tilemapTiledJSON("level-10", "/assets/level-10.json");

  this.load.spritesheet("player", "/assets/characters.png", {
    frameWidth: 52,
    frameHeight: 72,
  });

  this.load.spritesheet("coin", "/assets/objects-tileset.png", {
    frameWidth: 16,
    frameHeight: 16,
  });

  this.load.audio("sfx:coin", '/media/retro-coin.wav');
}
