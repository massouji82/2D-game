import { BestTime } from "@/typings/types";
import { getBestTimes } from "@/utils/bestTimes";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { sortTimes } from "@/utils/sortTimes";
import { RestartGame } from "./RestartGame";

export const BestTimes: React.FC = (): React.JSX.Element => {
  const [bestTimes, setBestTimes] = useState<Array<BestTime>>([]);
  const [isGettingBestTimes, setIsGettingBestTimes] = useState(true);

  useEffect(() => {
    const fetchBestTimes = async () => {
      const times = await getBestTimes();
      sortTimes(times);
      setBestTimes(times);
      setIsGettingBestTimes(false);
    };

    fetchBestTimes();
  }, []);

  if (isGettingBestTimes) {
    return <Loading />;
  }

  return <RestartGame bestTimes={bestTimes} />;
};
