// components/Seo.tsx
import Head from "next/head";

import { DOMAIN } from "@/constants";

interface Props {
  title: string;
  description?: string;
  url: string;
  keywords?: string[];
  image?: string;
}

export default function SEO(props: Props) {
  const { title, description = "Deep Reflection.", url, keywords, image } = props;

  const ogImage = image ? image : `/assets/images/character.webp`;

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`${DOMAIN}${url}`} />

      <meta name="robots" content="index,follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      <title>{`${title} | On's Tech Blog`}</title>
      <meta name="author" content="SeungChan On" />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      <meta name="google-site-verification" content="1PJzMSI5K7M4SZKOU9SK1EvrQMwNmUtUZAfKUYFmqaA" />
      <meta name="naver-site-verification" content="41b9c8e93210d6d41b083d1b410e0474ca9b4235" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${url}`} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="On's Tech Blog" />
      <meta property="og:locale" content="ko_KR" />
    </Head>
  );
}
