import { useState, useEffect } from "react";

export function usePhaser(
  config: Phaser.Types.Core.GameConfig,
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>
): Phaser.Game | null {
  const [game, setGame] = useState<Phaser.Game | null>(null);

  useEffect(() => {
    const initializeGame = async () => {
      const Phaser = await import("phaser");

      if (!game) {
        const newGame = new Phaser.Game(config);
        setGame(newGame);
      }
    };

    const handleUserGesture = async () => {
      await initializeGame();
      setStartGame(true);
      window.removeEventListener("keydown", handleUserGesture);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleUserGesture);
    }

    return () => {
      game?.destroy(true);
    };
  }, [config, setStartGame, game]);

  return game;
}
