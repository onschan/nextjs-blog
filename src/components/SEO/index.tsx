// components/Seo.tsx
import Head from "next/head";

import {
  AUTHOR_ALTERNATE_NAME,
  AUTHOR_JOB_TITLE,
  AUTHOR_NAME,
  AUTHOR_SAME_AS,
  DOMAIN,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
} from "@/constants";

interface Props {
  /** 페이지 제목. `${title} | ${SITE_NAME}` 형태로 조합된다. */
  title: string;
  /** 조합 규칙을 무시하고 그대로 사용할 제목. */
  fullTitle?: string;
  description?: string;
  url: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  /** type이 article일 때의 발행일 (YYYY-MM-DD). */
  publishedTime?: string;
  /** 구조화 데이터 breadcrumb에 사용할 상위 경로. */
  breadcrumb?: { name: string; url: string }[];
}

const toAbsoluteUrl = (pathOrUrl: string) =>
  pathOrUrl.startsWith("http") ? pathOrUrl : `${DOMAIN}${pathOrUrl}`;

const author = {
  "@type": "Person",
  name: AUTHOR_NAME,
  alternateName: AUTHOR_ALTERNATE_NAME,
  jobTitle: AUTHOR_JOB_TITLE,
  url: `${DOMAIN}/about`,
  sameAs: AUTHOR_SAME_AS,
};

export default function SEO(props: Props) {
  const {
    title,
    fullTitle,
    description = SITE_DESCRIPTION,
    url,
    keywords,
    image,
    type = "website",
    publishedTime,
    breadcrumb = [],
  } = props;

  const pageTitle = fullTitle ?? `${title} | ${SITE_NAME}`;
  const canonical = toAbsoluteUrl(url);
  const absoluteOgImage = toAbsoluteUrl(image || OG_IMAGE.path);
  const isArticle = type === "article";
  const isHome = url === "/";

  const jsonLd: Record<string, unknown>[] = [
    isArticle
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          image: absoluteOgImage,
          datePublished: publishedTime,
          dateModified: publishedTime,
          author,
          publisher: author,
          mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
          inLanguage: "ko-KR",
          ...(keywords?.length ? { keywords: keywords.join(", ") } : {}),
        }
      : {
          "@context": "https://schema.org",
          "@type": isHome ? "WebSite" : "WebPage",
          name: isHome ? SITE_NAME : title,
          url: canonical,
          description,
          inLanguage: "ko-KR",
          author,
          publisher: author,
          ...(isHome ? {} : { isPartOf: { "@type": "WebSite", name: SITE_NAME, url: DOMAIN } }),
        },
  ];

  if (breadcrumb.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: SITE_NAME, url: "/" }, ...breadcrumb].map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: toAbsoluteUrl(item.url),
      })),
    });
  }

  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href={canonical} />
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${SITE_NAME} RSS Feed`}
        href={`${DOMAIN}/rss.xml`}
      />

      <meta name="robots" content="index,follow,max-image-preview:large" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      <title>{pageTitle}</title>
      <meta name="author" content={AUTHOR_NAME} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}

      <meta name="google-site-verification" content="1PJzMSI5K7M4SZKOU9SK1EvrQMwNmUtUZAfKUYFmqaA" />
      <meta name="naver-site-verification" content="41b9c8e93210d6d41b083d1b410e0474ca9b4235" />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={isArticle ? "article" : "website"} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta property="og:image:type" content={OG_IMAGE.type} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="ko_KR" />

      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && <meta property="article:author" content={AUTHOR_NAME} />}
      {isArticle &&
        keywords?.map(keyword => <meta key={keyword} property="article:tag" content={keyword} />)}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOgImage} />
      <meta name="twitter:image:alt" content={pageTitle} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
