import { GameContext } from "@/context/GameContext";
import { useContext } from "react";

export const useGameContext = () => {
  const gameContext = useContext(GameContext);

  if (gameContext === undefined) {
    throw new Error('useGameContext must be inside a GameProvider');
  }
  return gameContext;
};