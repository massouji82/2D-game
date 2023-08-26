import { scene } from "@/scenes/create";
import { coins } from "@/utils/initObjects";
import { startGame } from "@/utils/startGame";
import React, { useCallback, useEffect, useRef, useState } from "react";

type TimerType = {
  finishMessage: React.MutableRefObject<string>;
  totalSeconds: React.MutableRefObject<number>;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Timer: React.FC<TimerType> = ({
  finishMessage,
  totalSeconds,
  setGameIsRunning,
}): null => {
  const level = useRef(1);
  const totalLevels = 10;

  const startInterval = useCallback(() => {
    const start = Date.now();

    const interval = setInterval((): void => {
      const delta = Date.now() - start; // milliseconds elapsed since start
      const seconds = Math.floor(delta / 1000);

      if (coins.amount === 0 && level.current < totalLevels) {
        clearInterval(interval);
        totalSeconds.current += seconds;
        alert(`It took you ${seconds} seconds to clear the level!`);
        level.current++;
        startGame(scene.gridEngine, level.current);
        startInterval();
      }

      if (coins.amount === 0 && level.current === totalLevels) {
        clearInterval(interval);
        totalSeconds.current += seconds;
        finishMessage.current = `Congratulations! Your total time was ${totalSeconds.current} seconds!`;
        setGameIsRunning(false);
        scene.game.destroy(true);
      }
    }, 1000);
  }, [finishMessage, totalSeconds, setGameIsRunning]);

  useEffect(() => {
    startInterval();
  }, [startInterval]);

  return null;
};
