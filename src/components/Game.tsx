"use client";

import React, { useState } from "react";
import config from "@/app/config";
import { usePhaser } from "@/hooks/usePhaser";
import { Timer } from "./Timer";

export const Game: React.FC = (): React.JSX.Element => {
  const [startGame, setStartGame] = useState(false);

  usePhaser(config, setStartGame);

  return <>{startGame ? <Timer /> : "click any button to start"}</>;
};
