import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import HomeContainer from "./Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Lotto create app - 로또 자동생성기</title>
        <meta name="description" content="Lotto create app - 로또 자동생성기" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeContainer />
      </main>
    </>
  );
}
