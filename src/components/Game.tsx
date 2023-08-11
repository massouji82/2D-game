"use client";

import React, { useEffect, useRef, useState } from "react";
import Phaser from "phaser";
import config from "@/app/config";

const Game: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    const initializeGame = () => {
      const game = new Phaser.Game(config);
      gameRef.current = game;
    };

    const handleUserGesture = async () => {
      initializeGame();
      setStartGame(true);
      window.removeEventListener("click", handleUserGesture);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("click", handleUserGesture);
    }

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <>{startGame ? <div /> : "click to start"}</>;
};

export default Game;
