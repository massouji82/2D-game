"use client";

import React, { useState } from "react";
import config from "@/app/config";
import { usePhaser } from "@/hooks/usePhaser";
import { Timer } from "./Timer";
import { BestTimes } from "./BestTimes";
import { Loading } from "./Loading";
import { StartGame } from "./StartGame";

export const Game: React.FC = (): React.JSX.Element => {
  const [isCheckingBestTimes, setIsCheckingBestTimes] = useState(false);
  const [game, setGame] = useState<Phaser.Game | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameIsRunning, setGameIsRunning] = useState(false);

  usePhaser(game, setGame, config, setGameIsRunning);

  return (
    <>
      {gameIsRunning ? (
        <Timer
          setGame={setGame}
          setGameOver={setGameOver}
          setGameIsRunning={setGameIsRunning}
          setIsCheckingBestTimes={setIsCheckingBestTimes}
        />
      ) : gameOver ? (
        isCheckingBestTimes ? (
          <Loading />
        ) : (
          <BestTimes />
        )
      ) : (
        <StartGame />
      )}
    </>
  );
};
