function preload(this: Phaser.Scene): void {
  this.load.image("tiles", "/assets/level-tileset.png");
  this.load.tilemapTiledJSON("jungle", "/assets/level-one.json");
  this.load.spritesheet("player", "/assets/characters.png", {
    frameWidth: 52,
    frameHeight: 72,
  });
}

export default preload;