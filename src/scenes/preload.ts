function preload(this: Phaser.Scene): void {
  this.load.image("tiles", "/assets/level-tileset.png");
  this.load.tilemapTiledJSON("level-1", "/assets/level-1.json");
  this.load.tilemapTiledJSON("level-2", "/assets/level-2.json");
  this.load.spritesheet("player", "/assets/characters.png", {
    frameWidth: 52,
    frameHeight: 72,
  });
  this.load.spritesheet("coin", "/assets/objects.png", {
    frameWidth: 16,
    frameHeight: 16,
  });

  this.load.audio("sfx:coin", '/media/retro-coin.wav');
}

export default preload;