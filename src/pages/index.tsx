import { HomeView } from "@/views";

import { SEO } from "@/components";

export default function HomePage() {
  return (
    <>
      <SEO fullTitle="On's Tech Blog | 프론트엔드 개발자 온승찬" title="Home" url="/" />
      <HomeView />
    </>
  );
}
