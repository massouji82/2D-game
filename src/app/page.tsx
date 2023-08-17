// import Head from 'next/head';
import Game from "@/components/Game";
import RootLayout from "@/app/layout";

const Home: React.FC = () => {
  return (
    <RootLayout>
      {/* <Head>
        <title>My Phaser Game</title>
      </Head> */}
      <div
        id="game-container"
        className="w-screen h-screen flex justify-center items-center"
      >
        <Game />
      </div>
    </RootLayout>
  );
};

export default Home;
