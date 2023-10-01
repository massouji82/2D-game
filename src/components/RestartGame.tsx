import { BestTime } from "@/typings/types";

export const RestartGame: React.FC<{ bestTimes: BestTime[] }> = ({
  bestTimes,
}): React.JSX.Element => {
  return (
    <div className="text-center w-1/2 bg-blue-50 bg-opacity-10 p-12 rounded-md">
      <span className="font-bold text-2xl mb-12 uppercase block">Best Times</span>

      <ul>
        {bestTimes.map((element, index: number) => {
          return (
            <li key={index} className="flex justify-between">
              <span className="pr-2">{index + 1}.</span>
              <span className="truncate max-w-xs">{element.name} </span>
              <span>{element.time} seconds</span>
            </li>
          );
        })}
      </ul>

      <span className="font-bold text-xl mt-12 block text-blue-300 uppercase blink">
        Click any button to start a new game!
      </span>
    </div>
  );
};
