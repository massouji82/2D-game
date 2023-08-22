import { scene } from "@/scenes/create";

export let level: Phaser.Tilemaps.Tilemap;

export const initLevel = (levelKey: string): Phaser.Tilemaps.Tilemap => {
  scene.physics.world.colliders.destroy();
  level?.destroy();
  level = scene.make.tilemap({ key: levelKey });
  level.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < level.layers.length; i++) {
    level.createLayer(i, "level-tileset", 0, 0);
  }

  return level;
};