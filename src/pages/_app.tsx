import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "@/components/Header";

import globalStyle from "@/styles/globalStyle";

const ColorModeScript = () => {
  const script = `(function() {
    const persistedPreferDark = window.localStorage.getItem('isDark');
    const hasPersistedPreference = persistedPreferDark && typeof JSON.parse(persistedPreferDark) === 'boolean';

    if (hasPersistedPreference) {
      const isDark = JSON.parse(persistedPreferDark);      
      document.body.dataset.theme = isDark ? 'dark' : 'light';
      return;
    }

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';

    if (hasMediaQueryPreference) {
      document.body.dataset.theme = mql.matches ? 'dark' : 'light';
      window.localStorage.setItem('isDark', mql.matches);
      return;
    }

    document.body.dataset.theme = 'light';
    window.localStorage.setItem('isDark', false);
})()`;

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
