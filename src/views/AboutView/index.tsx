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
          <h2 css={styles.heading}>Education</h2>
          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>광운대학교</h3>
              <p css={styles.subContent}>2015.03 ~ 2022.02</p>
            </div>
            <ul css={styles.list}>
              <li>법학부(전공), 소프트웨어학부(복수전공)</li>
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
            </div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <strong>이커머스 백오피스 SaaS 플랫폼 개발</strong>
                <ul css={styles.list}>
                  <li>서비스 초기 개발 단계부터 참여하여 현재까지 지속적으로 개발과 운영을 담당</li>
                  <li>
                    복잡한 이커머스 비즈니스 로직을 프론트엔드에서 정확하게 구현하고, 백엔드 팀과의
                    API 설계 논의에 적극 참여
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>복잡한 상태 관리 시스템 최적화</strong>
                <ul css={styles.list}>
                  <li>
                    600개 이상의 세부 품목의 폼 데이터를 실시간으로 처리하는 상품 관리 시스템에서,
                    Context API의 불필요한 리렌더링으로 <strong>INP 600ms 이상의 성능 저하</strong>
                    가 발생하던 문제를,{" "}
                    <strong>상태 구독 기반 리렌더링 구조로 개선하여 60ms 이하로 단축</strong>
                  </li>
                  <li>
                    상태 전파 문제를 해결한 경험을 팀에 공유하고, 재사용 가능한 폼 데이터 관리
                    시스템을 설계하여 타 도메인의 개발 생산성을 향상
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>통합 계정 시스템 구축</strong>
                <ul css={styles.list}>
                  <li>
                    여러 사내 서비스의 각기 다른 인증 시스템을 통합하기 위해, 특정 프레임워크
                    의존성을 배제한 순수 바닐라 자바스크립트 기반의 인증 솔루션을 설계 및 개발
                  </li>
                  <li>
                    이를 통해 모든 서비스에 유연하게 적용 가능한 시스템을 구축하고,{" "}
                    <strong>기존 회원 데이터 100%를 유실 없이 마이그레이션</strong>하여 서비스 전환
                    과정에서 이탈 없이 안정적인 전환을 이끌어냄
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>WebSocket 기반 수신함 기능 개발</strong>
                <ul css={styles.list}>
                  <li>
                    주문, 결제, 알림 등 실시간으로 발생하는 이벤트를 안정적으로 수신하고 처리하는
                    기능을 구현하고, 서버 스펙에 맞춰 사용자별/이벤트별 필터링 및 처리 구조를
                    설계하여 시스템의 신뢰성과 확장성을 확보
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>외부 연동 인프라 구축</strong>
                <ul css={styles.list}>
                  <li>
                    확장 스크립트와 Pub/Sub 기반의 커스텀 이벤트 시스템을 활용하여 GoodsFlow,
                    KiwiSnap 등 외부 솔루션의 UI를 내부 시스템에서 유연하게 제어할 수 있는 인프라를
                    설계하여 서비스 확장의 기반을 마련
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>디자인 시스템 구축</strong>
                <ul css={styles.list}>
                  <li>
                    헤드리스 컴포넌트 패턴과 Storybook을 기반으로 재사용성과 유지보수성이 높은
                    디자인 시스템을 구축
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
              <p>Frontend Engineer</p>
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
            </div>
            <ul css={styles.list}>
              <li css={styles.listItem}>
                <strong>프론트엔드 성능 최적화 주도</strong>
                <ul css={styles.list}>
                  <li>
                    초기 로딩 속도 저하로 인한 사용자 이탈 문제를 해결하기 위해, Lighthouse 리포트
                    기반으로 병목 현상을 분석
                  </li>
                  <li>
                    코드 스플리팅, WebP 포맷 적용, Lazy-loading 등을 도입해{" "}
                    <strong>
                      LCP를 8초 → 3초, Lighthouse 성능 점수를 40점대 → 80점 후반으로 개선
                    </strong>
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>실시간 통신 구조 고도화</strong>
                <ul css={styles.list}>
                  <li>
                    단순 Polling 방식에서 SSE를 거쳐 WebSocket으로 마이그레이션을 진행하며, 각
                    기술의 트레이드오프를 학습하고 실시간 데이터 동기화 지연을 최소화
                  </li>
                </ul>
              </li>
              <li css={styles.listItem}>
                <strong>개발 환경 및 테스트 자동화 구축</strong>
                <ul css={styles.list}>
                  <li>
                    Webpack, Babel, Cypress를 활용하여 개발 및 테스트 환경을 구축하고, CI/CD
                    파이프라인에 E2E 테스트를 통합하여 코드의 안정성과 개발 생산성을 동시에 확보
                  </li>
                </ul>
              </li>
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
              <li>우아한형제들이 주최하는 프론트엔드 개발자 양성 교육 7기에 리뷰어로 참여</li>
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
              <li>우아한형제들이 주최하는 프론트엔드 개발자 양성 교육 4기에 참여</li>
              <li>
                클린코드, 테스트 자동화, 협업 프로세스, 서비스 개발 및 운영에 대한 깊이 있는 학습과
                실전 경험을 쌓음
              </li>
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
            <ul css={styles.list}>
              <li>한국산업인력공단 | 2021.11.26</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
}
