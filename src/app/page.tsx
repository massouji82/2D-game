// import Head from 'next/head';

import RootLayout from "@/app/layout";
import { InitGame } from "@/components/InitGame";

const Home: React.FC = () => {
  return (
    <RootLayout>
      {/* <Head>
        <title>My Phaser Game</title>
      </Head> */}
      <InitGame />
    </RootLayout>
  );
};

export default Home;
