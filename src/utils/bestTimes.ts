import { kv } from "@vercel/kv";

const NUM_OF_BEST_TIMES = 10;
const BEST_TIMES = 'bestTimes';
const DEFAULT_TIME = 1000;

interface BestTime {
  time: number,
  name: string | null;
}

export const checkBestTimes = async (time: number) => {
  const bestTimes = await kv.get(BEST_TIMES) as Array<BestTime> | [];
  // const bestTimes: Array<BestTime> = bestTimesString ?? [];
  const worstBestTime = bestTimes[NUM_OF_BEST_TIMES - 1]?.time ?? DEFAULT_TIME;

  if (time < worstBestTime) {
    _saveBestTimes(time, bestTimes);
    showBestTimes();
  }
};

const _saveBestTimes = async (time: number, bestTimes: Array<BestTime>) => {
  let name;
  while (!name) {
    name = prompt('You got a great time! Please enter your name:');
  };

  const newTime = { time, name };

  bestTimes.push(newTime);

  bestTimes.sort((a: any, b: any) => a.time - b.time);

  bestTimes.splice(NUM_OF_BEST_TIMES);

  try {
    await kv.set(BEST_TIMES, bestTimes);
  } catch (error) {
    console.error(error);
  }

  // localStorage.setItem(BEST_TIMES, JSON.stringify(bestTimes));
};

export const showBestTimes = async (): Promise<BestTime[]> => {
  console.log("kv.get(BEST_TIMES)", await kv.get(BEST_TIMES));
  return await kv.get(BEST_TIMES) ?? [];
  // return JSON.parse(localStorage.getItem(BEST_TIMES) as string) ?? [];
};    