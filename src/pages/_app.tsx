import { css, Global } from "@emotion/react";
import type { AppProps } from "next/app";

import { ThemeModeScript, ThemeProvider } from "@/theme";

import { Grain } from "@/components";

import { globalStyle } from "@/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Global styles={globalStyle} />
      <ThemeModeScript />
      <Grain />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
