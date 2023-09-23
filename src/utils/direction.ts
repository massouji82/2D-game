import { Direction, GridEngine, Position } from "grid-engine";

export let slidingDirection = "none";

export const startMoving = (gridEngine: GridEngine, direction: Direction | "none"): void => {
  gridEngine.setWalkingAnimationMapping("player");
  slidingDirection = direction;
};

export const stopMoving = (gridEngine: GridEngine): void => {
  gridEngine.setWalkingAnimationMapping("player");
  slidingDirection = "none";
};

export const getDirection = (fromPos: Position, toPos: Position): Direction | "none" => {
  if (fromPos.x < toPos.x) {
    return "left" as Direction;
  } else if (fromPos.x > toPos.x) {
    return "right" as Direction;
  } else if (fromPos.y < toPos.y) {
    return "up" as Direction;
  } else if (fromPos.y > toPos.y) {
    return "down" as Direction;
  }
  return "none";
}

