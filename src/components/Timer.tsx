import { scene } from "@/scenes/create";
import { coins } from "@/utils/initObjects";
import { checkBestTimes } from "@/utils/bestTimes";
import { startGame } from "@/utils/startGame";
import React, { useCallback, useEffect, useRef } from "react";

type TimerTypeProps = {
  setGame: React.Dispatch<React.SetStateAction<Phaser.Game | null>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Timer: React.FC<TimerTypeProps> = ({
  setGame,
  setGameOver,
  setGameIsRunning,
}): null => {
  const totalSeconds = useRef(0);
  const level = useRef(1);
  const totalLevels = 4;

  const startInterval = useCallback(() => {
    const startTime = Date.now();

    const interval = setInterval((): void => {
      const delta = Date.now() - startTime; // milliseconds elapsed since start
      const seconds = Math.floor(delta / 1000);

      const clearIntervalAndIncreaseTotalTime = (): void => {
        clearInterval(interval);
        totalSeconds.current += seconds;
      };

      const startNextLevel = () => {
        clearIntervalAndIncreaseTotalTime();
        level.current++;
        startGame(scene.gridEngine, level.current);
        startInterval();
      };

      const gameOver = () => {
        clearIntervalAndIncreaseTotalTime();
        checkBestTimes(totalSeconds.current);
        scene.scene.stop();
        setGameOver(true);
        setGame(null);
        setGameIsRunning(false);
      };

      if (coins.amount === 0 && level.current < totalLevels) {
        scene.events.emit("endLevel");
        startNextLevel();
      }

      if (coins.amount === 0 && level.current === totalLevels) {
        gameOver();
      }
    }, 1000);
  }, [setGame, setGameOver, setGameIsRunning]);

  useEffect(() => {
    startInterval();
  }, [startInterval]);

  return null;
};
