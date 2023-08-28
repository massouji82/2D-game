import { showLowTimes } from "@/utils/lowTimes";

export const LowTimes: React.FC = (): React.JSX.Element => {
  const lowTimes = showLowTimes();

  return (
    <div className="text-center">
      <div className="font-bold text-xl mb-12">Lowest Times List:</div>

      {lowTimes.map((element, index: number) => {
        return (
          <li key={index}>
            {element.name}: {element.time}
          </li>
        );
      })}

      <div className="font-bold text-xl mt-12">Click any button to start a new game!</div>
    </div>
  );
};
