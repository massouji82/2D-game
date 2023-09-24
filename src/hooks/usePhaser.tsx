import { useEffect } from "react";

export const usePhaser = (
  game: Phaser.Game | null,
  setGame: React.Dispatch<React.SetStateAction<Phaser.Game | null>>,
  config: Phaser.Types.Core.GameConfig,
  setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  useEffect(() => {
    const initializeGame = async () => {
      const Phaser = await import("phaser");

      if (!game) {
        const newGame = new Phaser.Game(config);
        setGame(newGame);
      }
    };

    const handleUserGesture = async () => {
      if (typeof window !== "undefined") {
        await initializeGame();
        setGameIsRunning(true);
        window.removeEventListener("keydown", handleUserGesture);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleUserGesture);
    }

    return () => {
      game?.destroy(true);
    };
  }, [config, game, setGameIsRunning, setGame]);
};
