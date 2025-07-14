import * as styles from "./styles";

import { Bio } from "./components";
import Layout from "./layout";

export default function AboutView() {
  return (
    <Layout>
      <div css={styles.container}>
        <section css={styles.section}>
          <h1 css={styles.title}>
            안녕하세요.
            <br />
            개발자 <strong>온승찬</strong>입니다.
          </h1>
          <p>
            법학과 소프트웨어를 함께 공부하며 개발자의 길을 걷게 되었습니다.
            <br />
            사용자에게 좋은 경험을 제공하는 <strong>프론트엔드 개발</strong>에 관심이 많으며, 항상
            선택의 이유를 고민하며 개발합니다.
            <br />
            지속적인 학습과 경험 공유를 통해 함께 성장하는 개발자가 되고자 합니다.
          </p>

          <Bio />
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Work Experience</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>셀러허브</h3>
              <p>Frontend Engineer</p>
              <p css={styles.subContent}>2022.12 ~ 현재</p>
            </div>
            <ul css={styles.list}>
              <li>
                Next.js, TypeScript, Recoil, React Query 기반 이커머스 백오피스 SaaS 플랫폼 개발
              </li>
              <li>600개 이상의 옵션 데이터를 실시간으로 처리하는 상품 관리 시스템 구축</li>
              <li>통합 인증 시스템 개발 및 사내 서비스 통합</li>
              <li>WebSocket 기반 실시간 이벤트 수신함 개발</li>
              <li>디자인 시스템 구축 및 Storybook 문서화</li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Projects</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>개인 기술 블로그 운영</h3>
              <p css={styles.subContent}>2024.11 ~ 현재</p>
            </div>
            <ul css={styles.list}>
              <li>Next.js 기반 블로그 운영</li>
              <li>개발 고민과 해결 과정 지식 공유</li>
              <li>RSS 및 검색 엔진 최적화 적용</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>GongCheck</h3>
              <p>Frontend Engineer</p>
              <p css={styles.subContent}>2022.06 ~ 2022.10</p>
            </div>
            <ul css={styles.list}>
              <li>React, TypeScript, Recoil 기반 공간 관리 및 체크리스트 제작 툴 개발</li>
              <li>LCP 8초 → 3초 최적화, Lighthouse 성능 40점 → 80점 개선</li>
              <li>실시간 데이터 동기화 SSE → WebSocket 마이그레이션</li>
              <li>Webpack 최적화 및 E2E 테스트 자동화</li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Other Experiences</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>우아한테크코스 리뷰어</h3>
              <p css={styles.subContent}>2025.02 ~ 2025.06</p>
            </div>
            <ul css={styles.list}>
              <li>우아한형제들이 주최하는 개발자 FE 양성 교육 리뷰어 참여</li>
              <li>30명 이상의 수강생 대상 코드 리뷰 및 페어 프로그래밍 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>코드잇 프론트엔드 멘토</h3>
              <p css={styles.subContent}>2025.02 ~ 2025.04</p>
            </div>
            <ul css={styles.list}>
              <li>코드잇에서 주관하는 프론트엔드 부트캠프 멘토 참여</li>
              <li>학습 및 프로젝트에 대한 비대면 멘토링 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>NEXTSTEP 리뷰어</h3>
              <p css={styles.subContent}>2024.02 ~ 2024.06</p>
            </div>
            <ul css={styles.list}>
              <li>NEXTSTEP에서 주관하는 TDD, 클린코드 with 리액트 3기 리뷰어 참여</li>
              <li>5명 이상의 수강생 대상 코드 리뷰 및 페어 프로그래밍 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>우아한테크코스</h3>
              <p css={styles.subContent}>2022.02 ~ 2022.12</p>
            </div>
            <ul css={styles.list}>
              <li>우아한형제들이 주최하는 개발자 FE 양성 교육 참여</li>
              <li>클린코드, 협업, 서비스 개발 및 운영에 대한 학습</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>오픈소스 기여</h3>
            </div>
            <ul css={styles.list}>
              <li>리액트 공식 문서 한국어 번역 참여 - 2023.06.26</li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Certificate</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>정보처리기사</h3>
            </div>
            <p>한국산업인력공단 | 2021.11.26</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}
