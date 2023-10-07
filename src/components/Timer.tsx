import { scene } from "@/scenes/create";
import { coins } from "@/utils/initObjects";
import { checkBestTimes } from "@/utils/bestTimes";
import { startGame } from "@/utils/startGame";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { music } from "@/utils/initLevel";
import { stopMoving } from "@/utils/direction";

type TimerTypeProps = {
  setGame: React.Dispatch<React.SetStateAction<Phaser.Game | null>>;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCheckingBestTimes: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Timer: React.FC<TimerTypeProps> = ({
  setGame,
  setGameOver,
  setGameIsRunning,
  setIsCheckingBestTimes,
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

      const gameOver = async () => {
        setIsCheckingBestTimes(true);
        stopMoving(scene.gridEngine);
        scene.scene.stop();
        music.stop();
        setGameOver(true);
        setGame(null);
        setGameIsRunning(false);
        clearIntervalAndIncreaseTotalTime();
        await checkBestTimes(totalSeconds.current);
        setIsCheckingBestTimes(false);
      };

      if (coins.amount === 0 && level.current < totalLevels) {
        stopMoving(scene.gridEngine);
        scene.events.emit("endLevel");
        startNextLevel();
      }

      if (coins.amount === 0 && level.current === totalLevels) {
        gameOver();
      }
    }, 1000);
  }, [setGame, setGameOver, setGameIsRunning, setIsCheckingBestTimes]);

  useEffect(() => {
    startInterval();
  }, [startInterval]);

  return null;
};
