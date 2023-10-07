import { scene } from "@/scenes/create";

let level: Phaser.Tilemaps.Tilemap;
let music: Phaser.Sound.NoAudioSound | Phaser.Sound.HTML5AudioSound | Phaser.Sound.WebAudioSound;

export const initLevel = (levelKey: number): Phaser.Tilemaps.Tilemap => {
  scene.physics.world.colliders.destroy();
  level?.destroy();
  scene.events.emit("startLevel");

  level = scene.make.tilemap({ key: `level-${levelKey}` });
  level.addTilesetImage("level-tileset", "tiles");

  for (let i = 0; i < level.layers.length; i++) {
    level.createLayer(i, "level-tileset", 0, 0);
  }

  music = scene.sound.add('theme', { loop: true });
  music.play();

  return level;
};
