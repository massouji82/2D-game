import { getDirection, startMoving, stopMoving, } from "@/utils/direction";
import { initLevel } from "@/utils/initLevel";
import { initObjects, playerSprite } from "@/utils/initObjects";

function create(this: Phaser.Scene): void {
  const gridEngine = this.gridEngine;
  let levelKey = "level-one";
  let level: Phaser.Tilemaps.Tilemap;

  level = initLevel.call(this, levelKey);

  initObjects.call(this);

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
