import { startGame } from "@/utils/startGame";

export let scene: Phaser.Scene;

export function create(this: Phaser.Scene): void {
  scene = this;
  const gridEngine = this.gridEngine;

  startGame(gridEngine);
}
