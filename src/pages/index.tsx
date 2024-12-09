import { HomeView } from "@/views";

import { SEO } from "@/components";

export default function HomePage() {
  return (
    <>
      <SEO title="온승찬 블로그" description="안녕하세요" url="/" />
      <HomeView />
    </>
  );
}
