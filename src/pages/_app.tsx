import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "@/components/Header";

import globalStyle from "@/styles/globalStyle";

const ColorModeScript = () => {
  const script = `(function () {
  var persistedPreferMode = window.localStorage.getItem('theme-mode');
  var hasPersistedPreference = typeof persistedPreferMode === 'string' && ['light', 'dark'].includes(persistedPreferMode);
  if (hasPersistedPreference) {
    document.body.dataset.theme = persistedPreferMode;
    return;
  }
  var mql = window.matchMedia('(prefers-color-scheme: dark)');
  var hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    document.body.dataset.theme = 'system';
    window.localStorage.setItem('theme-mode', 'system');
    return;
  }
  document.body.dataset.theme = 'system';
  window.localStorage.setItem('theme-mode', 'system');
})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

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
      <ColorModeScript />
      <main>
        <Component {...pageProps} />
      </main>
      <footer></footer>
    </>
  );
}
