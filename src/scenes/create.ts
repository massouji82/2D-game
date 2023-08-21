import { coins, getDirection, initCoins, loadLevel, playerSprite, startMoving, stopMoving, } from "@/utils/createUtils";

function create(this: Phaser.Scene): void {
  const gridEngine = this.gridEngine;
  let levelKey = "level-one";
  let level: Phaser.Tilemaps.Tilemap;

  level = loadLevel.call(this, levelKey);

  initCoins.call(this);

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

  gridEngine.create(level, gridEngineConfig);

  gridEngine
    .positionChangeStarted()
    .subscribe(({ charId, exitTile, enterTile }) => {
      startMoving(gridEngine, getDirection(enterTile, exitTile),
      );
    });

  gridEngine
    .movementStopped()
    .subscribe(({ charId, direction }) => {
      stopMoving(gridEngine);
    });
}

export default create;
