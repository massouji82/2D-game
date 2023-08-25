import { scene } from "@/scenes/create";
import { coins } from "./initObjects";
import { startGame } from "./startGame";

export const timer = (game: Phaser.Game | null): void => {
  const start = Date.now();

  const interval = setInterval(() => {
    const delta = Date.now() - start; // milliseconds elapsed since start
    const totalSeconds = Math.floor(delta / 1000);

    if (coins.amount === 0) {
      clearInterval(interval);
      alert(`It took you ${totalSeconds} seconds to clear the level!`);
      startGame(scene.gridEngine, 2);
    };
  }, 1000);
};