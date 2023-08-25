import { Timer } from "@/components/Timer";
import { timer } from "@/utils/timer";
import { useState, useEffect } from "react";

export const usePhaser = (
  config: Phaser.Types.Core.GameConfig,
  setStartGame: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  const [game, setGame] = useState<Phaser.Game | null>(null);
  // const [levelNumber, setLevelNumber] = useState(1);

  // game?.events.on("COIN_AMOUNT", (event: Phaser.Events.EventEmitter) => {
  //   if ((event as unknown as number) === 0) setLevelNumber((prevLevelNumer) => prevLevelNumer++);

  //   game.events.emit("START_NEW_LEVEL", levelNumber);
  // });

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
};
