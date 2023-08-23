import create, { scene } from "@/scenes/create";
import { coins } from "./initObjects";

export const timer = (
  setLevelKey: React.Dispatch<React.SetStateAction<number>>
): null => {
  const start = Date.now();

  const interval = setInterval(() => {
    const delta = Date.now() - start; // milliseconds elapsed since start
    const totalSeconds = Math.floor(delta / 1000);

    if (coins.amount === 0) {
      clearInterval(interval);
      alert(`It took you ${totalSeconds} seconds to clear the level!`);
      create.call(scene);
    };
  }, 1000);

  return null;
};