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
            4년차 프론트엔드 개발자로, 이커머스 SaaS 환경에서 백오피스/웹빌더를 개발하고
            운영해왔습니다.
            <br />
            제품 성장을 만드는 임팩트 지점을 주도적으로 찾고, 기술 개선을 실제 UX와 운영 효율
            향상으로 연결하는 데 집중합니다.
            <br />
            단순 구현을 넘어 기술 선택의 이유와 장기적인 설계 방향을 함께 고려해 의사결정합니다.
          </p>

          <Bio />
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Skills</h2>
          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>기술 스택</h3>
            </div>
            <ul css={styles.list}>
              <li>프레임워크/라이브러리: React, Next.js</li>
              <li>상태 관리: React Query, Recoil, Redux, Jotai, Zustand</li>
              <li>번들러/빌드: Webpack, Vite, Nx, Module Federation</li>
              <li>
                스타일링: SCSS, CSS Modules, CSS-in-JS(Styled-components, Emotion), Tailwind CSS
              </li>
              <li>테스팅/문서화: Cypress, Jest, React Testing Library, Storybook</li>
              <li>모니터링/분석: Sentry, Google Analytics, Lighthouse, Hotjar</li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Work Experience</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>식스샵</h3>
              <p>Frontend Engineer</p>
              <p css={styles.subContent}>2022.12 ~ 현재</p>
              <p css={styles.link}>
                <a href="https://www.sixshop.com/" target="_blank" rel="noopener noreferrer">
                  https://www.sixshop.com/
                </a>
              </p>
            </div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <strong>이커머스 웹빌더 백오피스/에디터 개발</strong>
                <ul css={styles.list}>
                  <li>서비스 초기 개발 단계부터 참여해 핵심 도메인 개발과 운영을 담당</li>
                  <li>문제 정의, 설계, 구현, QA 안정화, 운영 개선까지 제품 개발 전 주기에 참여</li>
                  <li>주문/상품/연동 상품 등 복잡한 비즈니스 로직 구현 및 개선</li>
                  <li>사용자 피드백과 행동 데이터 기반으로 개선 방향을 제안하고 UX에 반영</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>웹빌더 편집 패러다임 전환 (온페이지 에디팅 DnD)</strong>
                <ul css={styles.list}>
                  <li>패널 중심 흐름에서 프리뷰 직접 조작 기반 편집 모델로 전환</li>
                  <li>
                    Section-Row-Column-Block 계층에서 Validate → Wrapping → Move 파이프라인 규칙
                    설계/구현
                  </li>
                  <li>
                    iframe postMessage 기반 이벤트 동기화로 hover/leave/drop/resize 상태 정합성 강화
                  </li>
                  <li>
                    empty container, cross-section 이동, depth 제한, width 재분배 등 복합 DnD 케이스
                    안정화
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>복잡한 상태 관리 시스템 최적화</strong>
                <ul css={styles.list}>
                  <li>600개+ 세부 품목 폼을 실시간 처리하는 상품 관리 시스템의 INP 병목 개선</li>
                  <li>상태 구독 기반 구조로 전환해 내부 측정 기준 INP 600ms+ → 60ms 이하로 단축</li>
                  <li>개선 구조를 팀에 공유해 재사용 가능한 폼 데이터 관리 방식으로 확장</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>마이크로 프론트엔드 아키텍처 운영</strong>
                <ul css={styles.list}>
                  <li>
                    Webpack Module Federation 기반으로 20개+ 도메인을 독립 애플리케이션으로 분리
                  </li>
                  <li>
                    도메인별 자율 개발/배포 구조 운영으로 주요 워크플로우 빌드 시간 20분+ → 2분 내외
                    단축
                  </li>
                  <li>공통 UI/유틸/인증 의존성 관리로 일관된 사용자 경험 유지</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>실시간 수신함/알림 경험 개선</strong>
                <ul css={styles.list}>
                  <li>WebSocket 기반 수신함 기능 구현 및 이벤트 처리 구조 개선</li>
                  <li>Web Push 연동으로 중요 이벤트를 브라우저 알림으로 전달</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>통합계정 전환/인증 플로우 안정화</strong>
                <ul css={styles.list}>
                  <li>로그인/검증/전환 구간 사용자 흐름을 정리하고 화면 로직 안정화</li>
                  <li>상태 전이별 분기 케이스를 점검해 전환 실패 및 이탈 가능 구간 완화</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Projects</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>GongCheck</h3>
              <p>우아한테크코스 팀 프로젝트</p>
              <p css={styles.subContent}>2022.06 ~ 2022.10</p>
              <p css={styles.link}>
                <a
                  href="https://github.com/woowacourse-teams/2022-gong-check"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </p>
              <p css={styles.link}>
                <a
                  href="https://gong-check.github.io/dev-blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tech Blog
                </a>
              </p>
            </div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <strong>프론트엔드 성능 최적화</strong>
                <ul css={styles.list}>
                  <li>Lighthouse 기반 병목 분석 후 코드 스플리팅, WebP, Lazy-loading 적용</li>
                  <li>LCP 8초 → 3초, Lighthouse 성능 점수 40점대 → 80점대 후반으로 개선</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>실시간 통신 구조 개선</strong>
                <ul css={styles.list}>
                  <li>
                    Polling → SSE → WebSocket 전환 과정에서 트레이드오프를 검토하며 동기화 지연 완화
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>개발 환경/테스트 자동화</strong>
                <ul css={styles.list}>
                  <li>Webpack/Babel/Cypress 기반 개발/테스트 환경 구성</li>
                  <li>CI/CD 파이프라인에 E2E 테스트를 연동해 안정성과 생산성 확보</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Education</h2>
          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>광운대학교</h3>
              <p css={styles.subContent}>2015.03 ~ 2022.02</p>
            </div>
            <ul css={styles.list}>
              <li>법학부(전공) | 소프트웨어학부(복수전공)</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>우아한테크코스 FE 4기</h3>
              <p css={styles.subContent}>2022.02 ~ 2022.12</p>
            </div>
            <ul css={styles.list}>
              <li>클린코드, 테스트 자동화, 협업 프로세스, 서비스 개발/운영 학습</li>
              <li>
                <a
                  href="https://github.com/onschan/2022-woowacourse-fe-onstar"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={styles.link}
                >
                  학습 및 활동 내역
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Other Experiences</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>우아한테크코스 FE 7기 리뷰어</h3>
              <p css={styles.subContent}>2025.02 ~ 2025.06</p>
            </div>
            <ul css={styles.list}>
              <li>30명 이상 수강생 대상으로 코드 리뷰 및 페어 프로그래밍 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>코드잇 프론트엔드 멘토</h3>
              <p css={styles.subContent}>2025.02 ~ 2025.04</p>
            </div>
            <ul css={styles.list}>
              <li>수강생 대상 기술 공유 및 프로젝트 멘토링 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>개인 기술 블로그 운영</h3>
              <p css={styles.subContent}>2024.11 ~ 현재</p>
            </div>
            <ul css={styles.list}>
              <li>Next.js 기반으로 제로 베이스 구현 및 RSS/SEO 적용</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>NEXTSTEP 리뷰어</h3>
              <p css={styles.subContent}>2024.02 ~ 2024.06</p>
            </div>
            <ul css={styles.list}>
              <li>5명 이상 수강생 대상으로 코드 리뷰 및 페어 프로그래밍 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>오픈소스 기여</h3>
            </div>
            <ul css={styles.list}>
              <li>React 공식 문서 한국어 번역 참여 | 2023.06.26</li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Certificate</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>정보처리기사</h3>
            </div>
            <ul css={styles.list}>
              <li>한국산업인력공단 | 2021.11.26</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
