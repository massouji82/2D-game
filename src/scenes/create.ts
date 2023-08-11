import { GridEngine } from "grid-engine";

function create(this: Phaser.Scene): void {
  const gridEngine: GridEngine = (<any>this).gridEngine;

  const jungleTilemap = this.make.tilemap({ key: "jungle" });
  jungleTilemap.addTilesetImage("level-one", "tiles");
  for (let i = 0; i < jungleTilemap.layers.length; i++) {
    const layer = jungleTilemap.createLayer(i, "level-one", 0, 0);
    layer!.scale = 3;
  }

  const playerSprite = this.add.sprite(0, 0, "player");
  playerSprite.scale = 1.5;
  this.cameras.main.startFollow(playerSprite, true);
  this.cameras.main.setFollowOffset(-playerSprite.width, -playerSprite.height);

  const gridEngineConfig = {
    characters: [
      {
        id: "player",
        sprite: playerSprite,
        walkingAnimationMapping: 6,
        startPosition: { x: 8, y: 12 },
      },
    ],
  };

  gridEngine.create(jungleTilemap, gridEngineConfig);
}

export default create;
