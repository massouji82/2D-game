"use client";

import React, { useState } from "react";
import { GameContext } from "@/context/GameContext";

interface Props {
  children: React.ReactNode;
}

export const GameProvider: React.FC<Props> = ({ children }): React.JSX.Element => {
  const [levelNumber, setLevelNumber] = useState<number | null>(1);

  return (
    <GameContext.Provider value={{ levelNumber, setLevelNumber }}>{children}</GameContext.Provider>
  );
};
