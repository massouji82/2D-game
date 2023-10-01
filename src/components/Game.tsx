"use client";

import React, { useState } from "react";
import config from "@/app/config";
import { usePhaser } from "@/hooks/usePhaser";
import { Timer } from "./Timer";
import { BestTimes } from "./BestTimes";
import { Loading } from "./Loading";

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
        <main className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl block">
            Welcome to{" "}
            <span className="uppercase">
              <span className="text-red-500">P</span>
              <span className="text-blue-500">i</span>
              <span className="text-yellow-500">x</span>
              <span className="text-green-500">e</span>
              <span className="text-teal-500">l</span> <span className="text-gray-500">C</span>
              <span className="text-amber-500">o</span>
              <span className="text-orange-500">i</span>
              <span className="text-pink-500">n</span>
              <span className="text-fuchsia-500">s</span>
            </span>
          </h1>

          <span className="py-20">Collect all the coins as fast as possible!</span>

          <span className="font-bold text-xl uppercase blink block">
            Click any button to start!
          </span>
        </main>
      )}
    </>
  );
};
