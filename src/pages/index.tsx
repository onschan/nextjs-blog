import { HomeView } from "@/views";

import { SEO } from "@/components";

export default function HomePage() {
  return (
    <>
      <SEO title="Home" url="/" />
      <HomeView />
    </>
  );
}
