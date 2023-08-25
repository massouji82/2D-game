import { scene } from "@/scenes/create";
import { coins } from "@/utils/initObjects";
import { startGame } from "@/utils/startGame";
import React, { useRef } from "react";

export const Timer: React.FC = (): React.JSX.Element => {
  const level = useRef(1);

  const startInterval = () => {
    const start = Date.now();

    const interval = setInterval(() => {
      const delta = Date.now() - start; // milliseconds elapsed since start
      const totalSeconds = Math.floor(delta / 1000);

      if (coins.amount === 0 && level.current <= 10) {
        clearInterval(interval);
        alert(`It took you ${totalSeconds} seconds to clear the level!`);
        level.current++;
        startGame(scene.gridEngine, level.current);
        startInterval();
      }
    }, 1000);
  };

  startInterval();

  return <></>;
};
