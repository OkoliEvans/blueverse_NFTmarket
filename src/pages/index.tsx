import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFT market</title>
        <meta
          content="NFT market place built by Evans"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className="">
        <ConnectButton />

        <h1 className="text-2xl text-gray-900 ">
          Welcome to Blue-verse NFT market
        </h1>

       </main>
    </div>
  );
};

export default Home;
