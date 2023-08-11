"use client";

import React, { useEffect, useRef, useState } from "react";
import config from "@/app/config";

const Game: React.FC = () => {
  const gameRef = useRef<Phaser.Game | null>(null);

  useEffect(() => {
    const initializeGame = async () => {
      const Phaser = await import("phaser");

      const game = new Phaser.Game(config);
      gameRef.current = game;
    };

    // const handleUserGesture = async () => {
    //   await initializeGame();
    //   window.removeEventListener("click", handleUserGesture);
    // };

    // if (typeof window !== "undefined") {
    //   window.addEventListener("click", handleUserGesture);
    // }

    initializeGame();

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
