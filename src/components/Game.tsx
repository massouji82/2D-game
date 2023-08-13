"use client";

import React, { useRef, useState } from "react";
import config from "@/app/config";
import { usePhaser } from "@/hooks/usePhaser";

const Game = (): React.JSX.Element => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [startGame, setStartGame] = useState(false);

  usePhaser(config, gameContainerRef, setStartGame);

  return (
    <>
      {startGame ? (
        <div ref={gameContainerRef}></div>
      ) : (
        "click any button to start"
      )}
    </>
  );
};

export default Game;
