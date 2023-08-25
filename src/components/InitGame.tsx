import { Game } from "./Game";
import { GameProvider } from "./GameProvider";

export const InitGame: React.FC = (): React.JSX.Element => {
  return (
    <GameProvider>
      <div id="game-container" className="w-screen h-screen flex justify-center items-center">
        <Game />
      </div>
    </GameProvider>
  );
};
