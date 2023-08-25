import { getDirection, startMoving, stopMoving } from "@/utils/direction";
import { initLevel } from "@/utils/initLevel";
import { initObjects, playerSprite } from "@/utils/initObjects";
import { startGame } from "@/utils/startGame";

export let scene: Phaser.Scene;

export function create(this: Phaser.Scene): void {
  scene = this;
  const gridEngine = this.gridEngine;

  startGame(gridEngine);
}
