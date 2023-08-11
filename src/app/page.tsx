// import Head from 'next/head';
import GameComponent from "@/components/Game";
import RootLayout from "@/app/layout";

const Home: React.FC = () => {
  return (
    <RootLayout>
      {/* <Head>
        <title>My Phaser Game</title>
      </Head> */}
      <div id="game-container">
        <GameComponent />
      </div>
    </RootLayout>
  );
};

export default Home;
