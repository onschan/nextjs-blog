import { Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { ThemeModeScript } from "@/theme";

import { Footer, Header } from "@/components";

import { globalStyle } from "@/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <ThemeModeScript />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
