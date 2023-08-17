"use client";

import React, { useState } from "react";
import config from "@/app/config";
import { usePhaser } from "@/hooks/usePhaser";

const Game = (): React.JSX.Element => {
  const [startGame, setStartGame] = useState(false);

  usePhaser(config, setStartGame);

  return <>{startGame ? <></> : "click any button to start"}</>;
};

export default Game;
