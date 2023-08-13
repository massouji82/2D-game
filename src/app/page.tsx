// import Head from 'next/head';
import Game from "@/components/Game";
import RootLayout from "@/app/layout";

const Home: React.FC = () => {
  return (
    <RootLayout>
      {/* <Head>
        <title>My Phaser Game</title>
      </Head> */}
      <Game />
    </RootLayout>
  );
};

export default Home;
