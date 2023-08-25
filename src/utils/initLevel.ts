import { scene } from "@/scenes/create";

export let level: Phaser.Tilemaps.Tilemap;

export const initLevel = (levelKey: number): Phaser.Tilemaps.Tilemap => {
  scene.physics.world.colliders.destroy();
  level?.destroy();

  // scene.game.events.on(
  //   "START_NEW_LEVEL",
  //   (event: Phaser.Events.EventEmitter) => levelKey = event as unknown as number
  // );

  // scene.game.events.on(
  //   "START_NEW_GAME",
  //   (event: Phaser.Events.EventEmitter) => levelKey = event as unknown as number
  // );

  level = scene.make.tilemap({ key: `level-${levelKey}` });
  level.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < level.layers.length; i++) {
    level.createLayer(i, "level-tileset", 0, 0);
  }

  return level;
};
