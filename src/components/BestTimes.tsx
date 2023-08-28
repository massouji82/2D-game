import { showBestTimes } from "@/utils/bestTimes";

export const BestTimes: React.FC = (): React.JSX.Element => {
  const bestTimes = showBestTimes();

  return (
    <div className="text-center">
      <div className="font-bold text-xl mb-12">Best Times list:</div>

      {bestTimes.map((element, index: number) => {
        return (
          <li key={index}>
            {element.name}: {element.time} seconds
          </li>
        );
      })}

      <div className="font-bold text-xl mt-12">Click any button to start a new game!</div>
    </div>
  );
};
