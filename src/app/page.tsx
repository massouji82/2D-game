// import Head from 'next/head';

import RootLayout from "@/app/layout";
import { Game } from "@/components/Game";

const Home: React.FC = () => {
  return (
    <RootLayout>
      {/* <Head>
        <title>My Phaser Game</title>
      </Head> */}
      <div id="game-container" className="w-screen h-screen flex justify-center items-center">
        <Game />
      </div>
    </RootLayout>
  );
};

export default Home;
