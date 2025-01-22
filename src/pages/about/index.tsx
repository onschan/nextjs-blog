import { AboutView } from "@/views";

import { SEO } from "@/components";

export default function About() {
  return (
    <>
      <SEO title="About" url="/about" />
      <AboutView />
    </>
  );
}
