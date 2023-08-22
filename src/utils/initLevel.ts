export let level: Phaser.Tilemaps.Tilemap;

export function initLevel(this: Phaser.Scene, levelKey: string): Phaser.Tilemaps.Tilemap {
  this.physics.world.colliders.destroy();
  level?.destroy();
  level = this.make.tilemap({ key: levelKey });
  level.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < level.layers.length; i++) {
    level.createLayer(i, "level-tileset", 0, 0);
  }

  return level;
}