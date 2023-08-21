import { coins } from "./createUtils";

export const timer = (): null => {
  const start = Date.now();

  const interval = setInterval(function () {
    const delta = Date.now() - start; // milliseconds elapsed since start
    const totalSeconds = Math.floor(delta / 1000);

    if (coins.amount === 0) {
      clearInterval(interval);
      alert(`It took you ${totalSeconds} seconds to clear the level!`);
    };
  }, 1000);

  return null;
};