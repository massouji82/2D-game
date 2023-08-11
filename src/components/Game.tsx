"use client";

import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import config from "@/app/config";

const Game: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    const game = new Phaser.Game(config);
    gameRef.current = game;

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div />;
};

export default Game;
