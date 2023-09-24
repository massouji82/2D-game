const NUM_OF_BEST_TIMES = 10;
const BEST_TIMES = 'bestTimes';
const DEFAULT_TIME = 1000;

interface BestTime {
  time: number,
  name: string | null;
}

export const checkBestTimes = (time: number) => {
  const bestTimesString = localStorage.getItem(BEST_TIMES);
  const bestTimes: Array<BestTime> = JSON.parse(bestTimesString as string) ?? [];
  const worstBestTime = bestTimes[NUM_OF_BEST_TIMES - 1]?.time ?? DEFAULT_TIME;

  if (time < worstBestTime) {
    _saveBestTimes(time, bestTimes);
    showBestTimes();
  }
};

const _saveBestTimes = (time: number, bestTimes: Array<BestTime>) => {
  let name;
  while (!name) {
    name = prompt('You got a great time! Please enter your name:');
  };

  const newTime = { time, name };

  bestTimes.push(newTime);

  bestTimes.sort((a: any, b: any) => a.time - b.time);

  bestTimes.splice(NUM_OF_BEST_TIMES);

  localStorage.setItem(BEST_TIMES, JSON.stringify(bestTimes));
};

export const showBestTimes = (): BestTime[] => {
  return JSON.parse(localStorage.getItem(BEST_TIMES) as string) ?? [];
};    