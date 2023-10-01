import { BestTime } from "@/typings/types";

export const sortTimes = (timesArray: BestTime[]): BestTime[] => {
  return timesArray.sort((a, b) => a.time - b.time);
};