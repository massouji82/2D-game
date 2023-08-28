const NUM_OF_LOW_TIMES = 10;
const LOW_TIMES = 'lowTimes';
const DEFAULT_TIME = 1000;

interface LowTime {
  time: number,
  name: string | null;
}

export const checkLowTimes = (time: number) => {
  const lowTimesString = localStorage.getItem(LOW_TIMES);
  const lowTimes: Array<LowTime> = JSON.parse(lowTimesString as string) ?? [];
  const highestTime = lowTimes[NUM_OF_LOW_TIMES - 1]?.time ?? DEFAULT_TIME;

  if (time < highestTime) {
    _saveLowTimes(time, lowTimes);
    showLowTimes();
  }
};

const _saveLowTimes = (time: number, lowTimes: Array<LowTime>) => {
  let name;
  while (!name) {
    name = prompt('You got a low time! Please enter your name:');
  };

  const newTime = { time, name };

  lowTimes.push(newTime);

  lowTimes.sort((a: any, b: any) => a.time - b.time);

  lowTimes.splice(NUM_OF_LOW_TIMES);

  localStorage.setItem(LOW_TIMES, JSON.stringify(lowTimes));
};

export const showLowTimes = (): LowTime[] => {
  return JSON.parse(localStorage.getItem(LOW_TIMES) as string) ?? [];
};    