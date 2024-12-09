import { Html, Head, Main, NextScript } from "next/document";

import { SEO } from "@/components";

export default function Document() {
  return (
    <Html lang="ko">
      <SEO title="온승찬 블로그" description="안녕하세요" url="" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
