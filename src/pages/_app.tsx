import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "@/components/Header";

import globalStyle from "@/styles/globalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Head>
        <title>OnStar.Dev</title>
        <meta name="description" content="기술 블로그" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}
