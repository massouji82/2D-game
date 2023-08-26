import { scene } from "@/scenes/create";
import { coins } from "@/utils/initObjects";
import { startGame } from "@/utils/startGame";
import React, { useCallback, useEffect, useRef } from "react";

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
  const totalLevels = 2;

  const startInterval = useCallback(() => {
    const startTime = Date.now();

    const interval = setInterval((): void => {
      const delta = Date.now() - startTime; // milliseconds elapsed since start
      const seconds = Math.floor(delta / 1000);

      const clearIntervalAndIncreaseTime = (): void => {
        clearInterval(interval);
        totalSeconds.current += seconds;
      };

      const startNextLevel = () => {
        clearIntervalAndIncreaseTime();
        alert(`It took you ${seconds} seconds to clear the level!`);
        level.current++;
        startGame(scene.gridEngine, level.current);
        startInterval();
      };

      const endGame = () => {
        clearIntervalAndIncreaseTime();
        finishMessage.current = `Congratulations! Your total time was ${totalSeconds.current} seconds!`;
        setGameIsRunning(false);
        scene.game.destroy(true);
      };

      if (coins.amount === 0 && level.current < totalLevels) {
        startNextLevel();
      }

      if (coins.amount === 0 && level.current === totalLevels) {
        endGame();
      }
    }, 1000);
  }, [finishMessage, totalSeconds, setGameIsRunning]);

  useEffect(() => {
    startInterval();
  }, [startInterval]);

  return null;
};
