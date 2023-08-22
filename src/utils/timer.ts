import { initLevel } from "./initLevel";
import { coins, initObjects } from "./initObjects";

export const timer = (): null => {
  const start = Date.now();

  const interval = setInterval(() => {
    const delta = Date.now() - start; // milliseconds elapsed since start
    const totalSeconds = Math.floor(delta / 1000);

    if (coins.amount === 0) {
      clearInterval(interval);
      alert(`It took you ${totalSeconds} seconds to clear the level!`);
      initLevel("level-two");
      initObjects();
    };
  }, 1000);

  return null;
};