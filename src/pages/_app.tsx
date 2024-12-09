import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeModeScript } from "@/theme";

import { Footer, Header, SEO } from "@/components";

import { globalStyle } from "@/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeModeScript />
      <SEO title="온승찬 블로그" description="안녕하세요" url="/" />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
