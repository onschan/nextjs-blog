// components/Seo.tsx
import Head from "next/head";

import { DOMAIN } from "@/constants";

import { colors } from "@/styles";

interface Props {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  image?: string;
}

export default function SEO(props: Props) {
  const { title, description, url, keywords, image } = props;

  const ogImage = image ? `${DOMAIN}${image}` : `${DOMAIN}/assets/images/character.webp`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${url}`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="onschan blog" />
      <meta property="og:locale" content="ko_KR" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={title} />
      <link rel="canonical" href={`${DOMAIN}${url}`} />
      <meta name="robots" content="index,follow" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="theme-color" content={colors.white} />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Head>
  );
}
