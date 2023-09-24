import RootLayout from "@/app/layout";
import { Game } from "@/components/Game";
import NoSSr from "@/components/NoSsr";

const Home: React.FC = () => {
  return (
    <RootLayout>
      <div id="game-container" className="w-screen h-screen flex justify-center items-center">
        <NoSSr>
          <Game />
        </NoSSr>
      </div>
    </RootLayout>
  );
};

export default Home;
