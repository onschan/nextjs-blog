import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { colors, typography } from "@/styles";

import { Bio } from "./components";
import Layout from "./layout";

const containerStyle = css`
  font-size: 16px;
  max-width: 72em;
  padding: 2em 1.5em 4em;
  display: flex;
  flex-direction: column;
  gap: 3.5em;

  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: 10px;
  }
`;

const sectionStyle = css`
  ${typography.body}
  display:flex;
  flex-direction: column;
  gap: 1.5em;
`;

const title = css`
  ${typography.large}

  strong {
    font-weight: bold;
    color: ${colors.primary[500]};
  }
`;

const headingStyle = css`
  ${typography.medium}
  margin-top: 1em;
`;

const subheadingStyle = css`
  ${typography.subsection}
`;

const listStyle = css`
  padding-left: 1.5em;
  list-style-type: circle;
`;

const contentStyle = css`
  display: flex;
  gap: 32px;
  border-left: 2px solid ${colors.primary[500]};
  padding-left: 1.2em;

  @media screen and (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
  }
`;

const contentTitleStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15em;
`;

const subContentStyle = css`
  ${typography.caption}
  color: ${theme.text.secondary};
`;

export default function AboutView() {
  return (
    <Layout>
      <div css={containerStyle}>
        <section css={sectionStyle}>
          <h1 css={title}>
            안녕하세요. 개발자 <strong>온승찬</strong>입니다.
          </h1>
          <p>
            법학을 전공하며 논리적인 사고를 배우고, 소프트웨어를 복수 전공하며 개발자로서의 길을
            걷게 되었습니다. <br />
            사용자에게 좋은 경험을 제공하는 것에 흥미를 느끼며, <strong>프론트엔드 개발자</strong>
            로서 성장하고 있습니다.
            <br />
            개발자로서 <strong>'Why?'</strong>를 중요하게 생각하며 개발을 합니다. 선택의 이유를
            고민하고 더 나은 사용자 경험을 제공하기 위해 노력합니다.
            <br />
            <strong>함께 자라기</strong>의 힘을 믿으며 깊이 있는 탐구와 공유를 통해 함께 성장하는
            개발자가 되고자 합니다.
          </p>

          <Bio />
        </section>

        <section css={sectionStyle}>
          <h2 css={headingStyle}>Work Experience</h2>

          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>셀러허브</h3>
              <p>Frontend Engineer</p>
              <p css={subContentStyle}>2022.12 ~ 현재</p>
            </div>
            <ul css={listStyle}>
              <li>
                Next.js, TypeScript, Recoil, React Query 기반 이커머스 백오피스 SaaS 플랫폼 개발
              </li>
              <li>600개 이상의 옵션 데이터를 실시간으로 처리하는 상품 관리 시스템 구축</li>
              <li>통합 인증 시스템 개발 및 사내 서비스 통합</li>
              <li>디자인 시스템 구축 및 Storybook 문서화 진행</li>
            </ul>
          </div>
        </section>

        <section css={sectionStyle}>
          <h2 css={headingStyle}>Other Experiences</h2>
          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>우아한테크코스 리뷰어</h3>
              <p css={subContentStyle}>2025.02 ~ 2025.06</p>
            </div>
            <ul css={listStyle}>
              <li>우아한형제들이 주최하는 개발자 FE 양성 교육 리뷰어 참여</li>
              <li>30명 이상의 수강생 대상 코드 리뷰 및 페어 프로그래밍 진행</li>
            </ul>
          </div>
          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>코드잇 프론트엔드 멘토</h3>
              <p css={subContentStyle}>2025.02 ~ 2025.04</p>
            </div>
            <ul css={listStyle}>
              <li>코드잇에서 주관하는 프론트엔드 부트캠프 멘토 참여</li>
              <li>학습 및 프로젝트에 대한 비대면 멘토링 진행</li>
            </ul>
          </div>
          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>NEXTSTEP 리뷰어</h3>
              <p css={subContentStyle}>2024.02 ~ 2024.06</p>
            </div>
            <ul css={listStyle}>
              <li>NEXTSTEP에서 주관하는 TDD, 클린코드 with 리액트 3기 리뷰어 참여</li>
              <li>5명 이상의 수강생 대상 코드 리뷰 및 페어 프로그래밍 진행</li>
            </ul>
          </div>
          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>우아한테크코스</h3>
              <p css={subContentStyle}>2025.02 ~ 2025.06</p>
            </div>
            <ul css={listStyle}>
              <li>우아한형제들이 주최하는 개발자 FE 양성 교육 참여</li>
              <li>클린코드, 협업, 서비스 개발 및 운영에 대한 학습</li>
            </ul>
          </div>
          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>오픈 소스 컨트리뷰터</h3>
            </div>
            <ul css={listStyle}>
              <li>리액트 공식 문서 한국어 번역 참여 - 2023.06.26</li>
            </ul>
          </div>
        </section>

        <section css={sectionStyle}>
          <h2 css={headingStyle}>Projects</h2>

          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>블로그 운영</h3>
              <p css={subContentStyle}>2024.11 ~ 현재</p>
            </div>
            <ul css={listStyle}>
              <li>
                Next.js 기반 개인 블로그 <a href="https://www.onschan.me">onschan.me</a> 운영
              </li>
              <li>RSS 및 검색 엔진 최적화 적용</li>
            </ul>
          </div>

          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>GongCheck</h3>
              <p>Frontend Engineer</p>
              <p css={subContentStyle}>2022.06 ~ 2022.10</p>
            </div>
            <ul css={listStyle}>
              <li>React, TypeScript, Recoil 기반 공간 관리 및 체크리스트 제작 툴 개발</li>
              <li>LCP 8초 → 3초 최적화, Lighthouse 성능 40점 → 80점 개선</li>
              <li>실시간 데이터 동기화 SSE → WebSocket 마이그레이션</li>
              <li>Webpack 최적화 및 E2E 테스트 자동화</li>
            </ul>
          </div>
        </section>

        <section css={sectionStyle}>
          <h2 css={headingStyle}>Certificate</h2>

          <div css={contentStyle}>
            <div css={contentTitleStyle}>
              <h3 css={subheadingStyle}>정보처리기사</h3>
            </div>
            <p>한국산업인력공단 | 2021.11.26</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
