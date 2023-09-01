import { scene } from "@/scenes/create";

let level: Phaser.Tilemaps.Tilemap;

export const initLevel = (levelKey: number): Phaser.Tilemaps.Tilemap => {
  scene.physics.world.colliders.destroy();
  level?.destroy();

  level = scene.make.tilemap({ key: `level-${levelKey}` });
  level.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < level.layers.length; i++) {
    level.createLayer(i, "level-tileset", 0, 0);
  }

  return level;
};
