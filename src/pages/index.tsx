import dynamic from "next/dynamic";

import { SEO } from "@/components";

const LazyHomeView = dynamic(() => import("@/views/HomeView"), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  return (
    <>
      <SEO title="Home" url="/" />
      <LazyHomeView />
    </>
  );
}
