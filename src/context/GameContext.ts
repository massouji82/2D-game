import { createContext } from "react";

interface GameContextValue {
  levelNumber: number | null;
  setLevelNumber: React.Dispatch<React.SetStateAction<number | null>>;
}

export const GameContext = createContext<GameContextValue
  | undefined>(undefined);