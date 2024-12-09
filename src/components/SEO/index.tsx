// components/Seo.tsx
import Head from "next/head";

import { DOMAIN } from "@/constants";

interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export default function SEO(props: Props) {
  const { title, description, url, image } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}${url}`} />
      <meta property="og:image" content={image || "/assets/images/character.webp"} />
      <meta property="og:site_name" content="사이트 이름" />
      <meta property="og:locale" content="ko_KR" />

      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={title} />

      <link rel="canonical" href={`${DOMAIN}${url}`} />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content="관련 키워드들" />
    </Head>
  );
}
