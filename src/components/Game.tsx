"use client";

import React, { useState } from "react";
import config from "@/app/config";
import { usePhaser } from "@/hooks/usePhaser";
import { Timer } from "./Timer";
import { BestTimes } from "./BestTimes";

export const Game: React.FC = (): React.JSX.Element => {
  const [game, setGame] = useState<Phaser.Game | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameIsRunning, setGameIsRunning] = useState(false);

  usePhaser(game, setGame, config, setGameIsRunning);

  return (
    <>
      {gameIsRunning ? (
        <Timer setGame={setGame} setGameOver={setGameOver} setGameIsRunning={setGameIsRunning} />
      ) : gameOver ? (
        <BestTimes />
      ) : (
        <div className="font-bold text-xl">Click any button to start!</div>
      )}
    </>
  );
};
