import { AboutView } from "@/views";

import { SEO } from "@/components";

export default function About() {
  return (
    <>
      <SEO
        fullTitle="About | 프론트엔드 개발자 온승찬"
        title="About"
        description="프론트엔드 개발자 온승찬의 이력. 식스샵에서의 마이크로 프론트엔드 전환, 우아한테크코스 리뷰어 활동, 사이드 프로젝트를 정리했습니다."
        url="/about"
        breadcrumb={[{ name: "About", url: "/about" }]}
      />
      <AboutView />
    </>
  );
}
