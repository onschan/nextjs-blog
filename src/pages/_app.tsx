import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import { theme, themeCSS, ThemeModeScript } from "@/theme";
import { themeVariables } from "@/theme/theme";

import { Header } from "@/components";

import { globalStyle } from "@/styles";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      <Global styles={globalStyle} />
      <Head>
        <title>OnStar.Dev</title>
        <meta name="description" content="기술 블로그" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeModeScript />
      {pathname !== "/" && <Header />}
      <main>
        <Component {...pageProps} />
      </main>
      {pathname !== "/" && (
        <footer>
          <p>©onschan.dev</p>
        </footer>
      )}
    </>
  );
}
