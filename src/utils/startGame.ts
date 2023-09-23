import { GridEngine } from "grid-engine";
import { initLevel } from "./initLevel";
import { initObjects, playerSprite } from "./initObjects";
import { getDirection, startMoving, stopMoving } from "./direction";
import { setStartPosition } from "./setStartPosition";
import { levelTransition } from "./levelTransition";

export const startGame = (gridEngine: GridEngine, levelKey: number = 1): void => {
  levelTransition();

  const level = initLevel(levelKey);

  initObjects(level);

  const gridEngineConfig = {
    characters: [
      {
        id: "player",
        sprite: playerSprite,
        startPosition: setStartPosition(levelKey),
      },
    ],
  };

  gridEngine.create(level, gridEngineConfig);

  gridEngine.positionChangeStarted().subscribe(({ charId, exitTile, enterTile }) => {
    startMoving(gridEngine, getDirection(enterTile, exitTile));
  });

  gridEngine.movementStopped().subscribe(({ charId, direction }) => {
    stopMoving(gridEngine);
  });
};