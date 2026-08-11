import Link from "next/link";

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
            4년차 프론트엔드 개발자로, 이커머스 SaaS 환경에서 백오피스와 웹빌더 제품을 개발하고
            운영해왔습니다.
            <br />
            React, Next.js, TypeScript 기반으로 주문, 상품, 연동 상품, 웹빌더 에디터 등 복잡한
            커머스 도메인의 사용자 흐름을 제품 경험으로 풀어내는 데 강점이 있습니다.
            <br />
            단순히 화면을 구현하는 것보다, 사용자가 실제 업무 과정에서 겪는 불편을 구조화하고 이를
            안정적인 UI 구조, 상태 관리, 데이터 흐름으로 해결하는 데 집중해왔습니다.
            <br />
            코드 리뷰, 기술 공유, 공통 패턴 정리에 관심이 많아 리뷰어/멘토 활동과 개인 기술 블로그
            운영을 통해 팀 안팎으로 지식을 나누고 있습니다.
            <br />
            Claude Code·Codex 같은 AI 개발 도구를 코드 탐색, 리팩터링, 문서화, 리뷰 보조 등 실제
            업무 전반에 활용하며, AI 기반 워크플로우 개선과 반복 업무 자동화를 통해 개발 속도와 코드
            품질을 높이는 방식을 고민하고 있습니다.
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
              <li>Framework / Library: React, Next.js, TypeScript</li>
              <li>State Management: React Query, Recoil, Redux, Jotai, Zustand</li>
              <li>Build / Architecture: Webpack, Vite, Nx, Module Federation</li>
              <li>Styling: SCSS, CSS Modules, Styled-components, Emotion, Tailwind CSS</li>
              <li>Testing / Documentation: Cypress, Jest, React Testing Library, Storybook</li>
              <li>Monitoring / Analytics: Sentry, Google Analytics, Lighthouse, Hotjar</li>
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
                <strong>사용 기술 및 환경</strong>
                <ul css={styles.list}>
                  <li>
                    Next.js, TypeScript, Recoil, React Query, Styled-components, Nx, Module
                    Federation, WebSocket
                  </li>
                  <li>Nx 기반 20개 이상 애플리케이션으로 구성된 이커머스 SaaS 모노레포 환경</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>이커머스 SaaS 백오피스/웹빌더 제품 개발</strong>
                <ul css={styles.list}>
                  <li>
                    서비스 초기 개발 단계부터 참여하여 주문, 상품, 연동 상품, 웹빌더 에디터 등 핵심
                    도메인의 프론트엔드 개발과 운영을 담당
                  </li>
                  <li>
                    사용자가 실제로 상품을 등록하고, 웹사이트를 편집하고, 주문을 처리하는 업무
                    흐름을 기준으로 화면 구조와 인터랙션을 설계
                  </li>
                  <li>
                    PM·디자이너·백엔드 엔지니어와 협업하여 요구사항을 기술 구조로 구체화하고, 사용자
                    피드백과 행동 데이터를 기반으로 UX 개선을 반복
                  </li>
                  <li>매출·결제율 개선에 대한 아이디어를 제안해 실제 성과로 연결</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>웹빌더 편집 경험 개선</strong>
                <ul css={styles.list}>
                  <li>
                    기존 패널 중심의 웹빌더 편집 방식을, 사용자가 프리뷰 화면을 직접 조작하는
                    온페이지 D&amp;D 구조로 전환하는 작업을 주도
                  </li>
                  <li>
                    iframe 환경에서 부모 앱과 프리뷰 영역 간 이벤트 흐름이 분리되는 문제를
                    postMessage 기반 이벤트 동기화 구조를 개선해 해결
                  </li>
                  <li>
                    empty container 처리, cross-section 이동, depth 제한, width 재분배 등 복잡한
                    편집 엣지 케이스를 안정적으로 처리하도록 상태 구조와 이벤트 흐름 개선
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>복잡한 상태 관리 시스템 최적화</strong>
                <ul css={styles.list}>
                  <li>
                    600개 이상 세부 품목을 실시간으로 입력·수정하는 상품 관리 시스템에서 INP 성능
                    병목의 원인을 직접 분석
                  </li>
                  <li>
                    기존 구조에서는 폼 데이터 변경 시 넓은 범위의 상태 구독이 발생해 불필요한
                    리렌더링이 반복되는 문제를 확인
                  </li>
                  <li>
                    상태 구독 범위를 세분화하고 변경이 필요한 영역만 반응하도록 구조를 재설계하여,
                    주요 입력 인터랙션 기준 INP를 600ms 이상에서 60ms 이하로 개선
                  </li>
                  <li>
                    개선 방식을 팀에 공유하여 유사한 대규모 폼 데이터 관리 상황에서도 재사용 가능한
                    패턴으로 정착
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>외부 앱 확장 시스템(Page Script) 설계 및 구현</strong>
                <ul css={styles.list}>
                  <li>
                    외부 협력사 앱이 스토어매니저 안에서 네이티브 UI로 기능을 제공할 수 있도록 하는
                    확장 스크립트 시스템을 전담하여 설계·구현
                  </li>
                  <li>
                    외부 개발자가 스크립트만 등록하면 런타임에 모달, 스낵바, 액션 버튼, 입력 필드 등
                    내부 UI를 제어할 수 있는 JavaScript API 인터페이스 설계
                  </li>
                  <li>
                    스토어·사용자 인증 정보 등 앱 동작에 필요한 컨텍스트를 외부 스크립트에 안전하게
                    전달하고, iframe 기반 앱 화면과 통신하는 구조 구현
                  </li>
                  <li>
                    내부 제품 코드와 외부 확장 기능의 경계를 명확히 분리하여, 협력사가 늘어나도 제품
                    코드 수정 없이 기능을 확장할 수 있는 구조 확립
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>마이크로 프론트엔드 아키텍처 운영</strong>
                <ul css={styles.list}>
                  <li>
                    단일 애플리케이션으로 운영되던 프론트엔드를 Webpack Module Federation 기반으로
                    20개 이상 도메인의 독립 애플리케이션으로 점진적으로 분리·운영하는 구조에 참여
                  </li>
                  <li>
                    각 도메인이 독립적으로 개발·배포될 수 있도록 애플리케이션 경계를 나누고, 공통
                    UI·유틸·인증 의존성을 중앙화
                  </li>
                  <li>
                    도메인별 자율성과 전체 제품의 일관성을 함께 유지하는 구조를 운영하며, 주요
                    워크플로우 기준 빌드 시간을 20분에서 2분 이내로 단축
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>실시간 수신함 및 알림 기능 개발</strong>
                <ul css={styles.list}>
                  <li>
                    WebSocket 기반 수신함을 설계·구현하고, 실시간 이벤트를 사용자에게 안정적으로
                    전달하는 이벤트 처리 구조 구축
                  </li>
                  <li>
                    Web Push 연동을 통해 주문, 문의, 시스템 이벤트 등 주요 이슈를 브라우저 알림으로
                    전달하는 기능을 새롭게 구현
                  </li>
                  <li>
                    실시간 데이터 반영, 알림 상태, 사용자 피드백 처리를 고려한 이벤트 기반 UI를
                    구현해 백오피스 사용자가 중요한 이벤트를 더 빠르게 인지하도록 개선
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>AI 활용 및 개발 생산성 개선</strong>
                <ul css={styles.list}>
                  <li>
                    Claude Code, Codex 등 AI 개발 도구를 코드 탐색, 리팩터링, 문서화, 코드 리뷰
                    보조, 반복 업무 자동화 등 개발 워크플로우 전반에 적용
                  </li>
                  <li>
                    AI 결과물을 그대로 사용하지 않고, 현재 코드베이스의 제약과 운영 맥락을 기준으로
                    검증해 실제 개발 프로세스에 통합
                  </li>
                  <li>
                    프로젝트별 AGENTS.md, 협업 가드레일, 검증 기준을 정리해 AI가 작업 맥락을 놓치지
                    않도록 관리
                  </li>
                  <li>
                    팀 AI 활용 워크숍을 주도하고, AI 지침·Agent 활용법·하네스 엔지니어링 사례를
                    정리해 공유하며 팀 전체의 AI 활용도 향상
                  </li>
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
                <strong>사용 기술</strong>
                <ul css={styles.list}>
                  <li>
                    React, TypeScript, Recoil, React Query, Emotion, Cypress, React-transition-group
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>프론트엔드 성능 최적화</strong>
                <ul css={styles.list}>
                  <li>
                    Lighthouse 기반 병목 분석 후 코드 스플리팅, WebP, Lazy Loading을 적용하여 LCP를
                    8초에서 3초로 개선
                  </li>
                  <li>Lighthouse 성능 점수를 40점대에서 80점대 후반으로 개선</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>실시간 통신 구조 개선</strong>
                <ul css={styles.list}>
                  <li>Polling, SSE, WebSocket의 트레이드오프를 비교하며 실시간 동기화 구조 개선</li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>개발 환경/테스트 자동화</strong>
                <ul css={styles.list}>
                  <li>Webpack, Babel, Cypress 기반 개발/테스트 환경 구성</li>
                  <li>
                    CI/CD 파이프라인에 E2E 테스트를 연동하여 주요 사용자 플로우의 회귀 테스트 기반
                    마련
                  </li>
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
              <li>클린 코드, 테스트 자동화, 협업 프로세스, 서비스 개발 및 운영 학습</li>
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
              <li>30명 이상 수강생을 대상으로 코드 리뷰와 페어 프로그래밍 진행</li>
              <li>
                단순한 정답 제시보다, 리뷰이가 스스로 구조적 문제를 발견하고 개선 방향을 잡을 수
                있도록 질문과 피드백 중심으로 리뷰 진행
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>코드잇 프론트엔드 멘토</h3>
              <p css={styles.subContent}>2025.02 ~ 2025.04</p>
            </div>
            <ul css={styles.list}>
              <li>수강생 대상 기술 공유와 프로젝트 멘토링 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>NEXTSTEP 리뷰어</h3>
              <p css={styles.subContent}>2024.02 ~ 2024.06</p>
            </div>
            <ul css={styles.list}>
              <li>5명 이상 수강생을 대상으로 코드 리뷰와 페어 프로그래밍 진행</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>개인 기술 블로그 운영</h3>
              <p css={styles.subContent}>2024.11 ~ 현재</p>
              <p css={styles.link}>
                <a href="https://www.onschan.me" target="_blank" rel="noopener noreferrer">
                  https://www.onschan.me
                </a>
              </p>
            </div>
            <ul css={styles.list}>
              <li>
                Next.js 기반으로 개인 기술 블로그를 직접 구현하고 운영하며, SEO, RSS, 콘텐츠
                구조화까지 직접 구현
              </li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Article &amp; Presentation</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>React Fiber Architecture 톺아보기</h3>
              <p css={styles.link}>
                <Link href="/post/react-fiber">글 보러가기</Link>
              </p>
            </div>
            <ul css={styles.list}>
              <li>
                라이브러리 내부 구현체와 실제 PR 히스토리까지 파고들며 기술의 탄생 배경과 설계
                의도를 깊이 있게 탐구
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>Module Federation 이해하기</h3>
              <p css={styles.link}>
                <Link href="/post/mf">글 보러가기</Link>
              </p>
            </div>
            <ul css={styles.list}>
              <li>
                실무에 적용한 기술 스택을 딥다이브 학습하며 동작 원리와 제약사항까지 정리해 공유
              </li>
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
