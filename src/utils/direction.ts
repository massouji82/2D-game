import { Direction, GridEngine, Position } from "grid-engine";

export let slidingDirection = "none";

export function startMoving(gridEngine: GridEngine, direction: Direction | "none"): void {
  gridEngine.setWalkingAnimationMapping("player", undefined);
  slidingDirection = direction;
}

export function stopMoving(gridEngine: GridEngine): void {
  gridEngine.setWalkingAnimationMapping("player", 6);
  slidingDirection = "none";
}

export function getDirection(fromPos: Position, toPos: Position): Direction | "none" {
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

