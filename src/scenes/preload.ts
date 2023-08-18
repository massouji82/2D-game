function preload(this: Phaser.Scene): void {
  this.load.image("tiles", "/assets/level-tileset.png");
  this.load.tilemapTiledJSON("level-one", "/assets/level-01.json");
  this.load.spritesheet("player", "/assets/characters.png", {
    frameWidth: 52,
    frameHeight: 72,
  });
  this.load.spritesheet("coin", "/assets/objects.png", {
    frameWidth: 16,
    frameHeight: 16,
  });
}

export default preload;