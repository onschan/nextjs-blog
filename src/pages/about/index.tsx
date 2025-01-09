/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { motion } from "framer-motion";

import { theme } from "@/theme";

import { typography, colors } from "@/styles";

const containerStyle = css`
  max-width: 88rem;
  margin: 0 auto;
  padding: 20px;
`;

const sectionStyle = css`
  margin-bottom: 50px;
  padding: 20px;
`;

const highlightStyle = css`
  background: linear-gradient(90deg, ${colors.primary[500]}, ${colors.accent[500]});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

const listStyle = css`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 12px;
    line-height: 1.8;
    font-size: 1rem;
  }

  li strong {
    font-weight: 700;
  }
`;

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const App = () => {
  return (
    <div css={containerStyle}>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        css={sectionStyle}
      >
        <h1 css={typography.large}>Frontend Engineer, Web Developer</h1>
      </motion.header>

      <motion.section
        css={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        {/* <h2 css={typography.section}>About Me</h2> */}
        <ul css={listStyle}>
          <li>
            안녕하세요! <span css={highlightStyle}>프론트엔드 개발자 온승찬</span>입니다. 😄
          </li>
          <li>
            개발에 대한 <strong>고민</strong>을 즐기며, 항상 선택의 <strong>이유</strong>를 명확히
            합니다.
          </li>
          <li>
            <strong>상황에 맞는 개발 방식</strong>을 찾기 위해 끊임없이 노력합니다.
          </li>
          <li>
            <strong>Clean Code</strong>와 <strong>일관성 있는 코드 작성</strong>을 중시합니다.
          </li>
          <li>
            깊이 있는 <strong>탐구와 공유</strong>를 통해 함께 성장하는 개발자가 되고자 합니다.
          </li>
        </ul>
      </motion.section>

      <motion.section
        css={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 css={typography.section}>Skills</h2>
        <ul css={listStyle}>
          <li>React, Next.js</li>
          <li>React Query, Recoil, Redux, Jotai</li>
          <li>Webpack, Vite, Module Federation</li>
          <li>SCSS, Module CSS, CSS-in-JS, Tailwind CSS</li>
          <li>Cypress, Jest, React Testing Library, Storybook</li>
        </ul>
      </motion.section>

      <motion.section
        css={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 css={typography.section}>Work Experience & Project</h2>
        <div>
          <h3 css={typography.subsection}>셀러허브</h3>
          <p css={typography.body}>
            *2022.12 ~ 현재* | Frontend Engineer | "초보자도 쉽게 웹사이트를 운영할 수 있도록
            지원하는 이커머스 솔루션"
          </p>
          <h4 css={typography.bodyAccent}>**사용 기술**</h4>
          <p css={typography.body}>
            Next.js, Typescript, Recoil, React Query, Styled-components, Nx, Module Federation
          </p>
          <ul css={listStyle}>
            <li>
              <strong>이커머스 백오피스 SaaS 플랫폼 개발</strong>
              <ul>
                <li>주문, 상품, 외부 채널 연동, 쿠폰 등 다양한 기능 개발</li>
                <li>초기 설계부터 CBT, OBT, 정식 출시, 유지보수까지 전 과정에 참여</li>
              </ul>
            </li>
            <li>
              <strong>복잡한 상태 관리 시스템 최적화</strong>
              <ul>
                <li>
                  상품 자체 데이터와 600개의 옵션 데이터를 실시간으로 처리하는 상품 관리 시스템을
                  구축
                </li>
                <li>
                  복잡한 상태 관리 로직을 useReducer, selector 등을 활용하여 단순화하는 다양한
                  시도를 진행
                </li>
                <li>
                  Context API에서 발생하는 불필요한 리렌더링 및 입력 지연 현상을 Recoil로 해결하고
                  그 원리를 탐구하여 팀 내 공유
                </li>
                <li>
                  리렌더링 최적화 전 특정 Input에 연속해서 100자 입력 시 600ms였던 INP를 60ms 이하로
                  개선
                </li>
                <li>재사용 가능한 폼 데이터 관리 시스템 설계로 타 도메인 개발 생산성 향상</li>
              </ul>
            </li>
            <li>
              <strong>통합 계정 시스템 개발</strong>
              <ul>
                <li>식스샵, 셀토어, 온채널, 이지셀 등의 사내 서비스의 통합 인증 시스템 구축</li>
                <li>
                  타 부서도 유관된 프로젝트로, 프레임워크와 라이브러리 의존도를 낮추고 경량화된
                  솔루션을 제공하기 위해 바닐라 자바스크립트 구현
                </li>
                <li>
                  다른 인증 시스템을 가진 환경에서도 유연하게 사용할 수 있는 통합 인증 시스템 개발
                </li>
                <li>기존 회원 마이그레이션 100% 성공률 달성</li>
              </ul>
            </li>
            <li>
              <strong>디자인 시스템 구축</strong>
              <ul>
                <li>헤드리스 컴포넌트 패턴 기반의 재사용 가능한 컴포넌트 설계</li>
                <li>Storybook 기반의 문서화로 협업 효율성 강화</li>
                <li>Calendar, Carousel Tab 등 재사용 가능한 공통 컴포넌트 개발</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h3 css={typography.subsection}>GongCheck</h3>
          <p css={typography.body}>
            *2022.06 ~ 2022.10* | 우아한테크코스 | "공간 관리를 위한 백오피스, 체크리스트 제작 툴
            제공"
          </p>
          <h4 css={typography.bodyAccent}>**사용 기술**</h4>
          <p css={typography.body}>
            React, Typescript, Recoil, React Query, Emotion, Cypress, React-transition-group
          </p>
          <ul css={listStyle}>
            <li>
              <strong>성능 최적화</strong>
              <ul>
                <li>
                  압축률이 높은 이미지 사용과 picture 태그와 sourceSet 속성을 이용하여 디바이스에
                  최적화된 이미지 사용으로 LCP 8초 → 3초 개선 (빠른 3G와 모바일 화면 기준)
                </li>
                <li>
                  동적 임포트를 통한 코드 스플리팅과 이미지 lazy loading을 적용하여 TTI 4초 단축
                </li>
                <li>Lighthouse 성능 지표 40점 초반 → 80점 후반 개선</li>
              </ul>
            </li>
            <li>
              <strong>실시간 데이터 처리 고도화</strong>
              <ul>
                <li>Polling → SSE → WebSocket 단계적 마이그레이션을 통한 실시간 통신 구조 개선</li>
                <li>
                  WebSocket 도입으로 실시간 데이터 동기화 지연 최소화 및 불필요한 API 호출 감소
                </li>
              </ul>
            </li>
            <li>
              <strong>개발 환경 최적화</strong>
              <ul>
                <li>Webpack과 Babel을 활용한 커스텀 빌드 환경 구축</li>
                <li>Webpack-merge를 활용해 환경별 최적화된 설정 관리로 개발 생산성 향상</li>
                <li>Cypress 기반의 E2E 테스트 자동화 파이프라인 구축</li>
              </ul>
            </li>
            <li>
              <strong>테스트 및 배포 자동화</strong>
              <ul>
                <li>Cypress를 활용한 E2E 테스트 구현</li>
                <li>CI/CD 파이프라인에 자동화된 테스트 프로세스 통합</li>
              </ul>
            </li>
            <li>
              <strong>UI/UX 개선</strong>
              <ul>
                <li>랜딩 페이지 제작 및 반응형 디자인 구현</li>
                <li>React-transition-group을 활용한 페이지 전환 효과 적용</li>
              </ul>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        css={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 css={typography.section}>Other Experiences</h2>
        <div>
          <h3 css={typography.subsection}>Blog</h3>
          <p css={typography.body}>*2024.11 ~ 현재*</p>
          <ul css={listStyle}>
            <li>
              Next.js 기반의 개인 블로그 <a href="https://www.onschan.me">onschan.me</a> 운영
            </li>
            <li>개발 관련 고민과 해결 과정을 기록 및 공유</li>
            <li>RSS 및 네이버, 구글에 검색되도록 검색 엔진 최적화 진행</li>
            <li>
              Repository:{" "}
              <a href="https://github.com/onschan/nextjs-blog">
                https://github.com/onschan/nextjs-blog
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 css={typography.subsection}>NEXTSTEP 리뷰어</h3>
          <p css={typography.body}>*2024.02 ~ 2024.06*</p>
          <ul css={listStyle}>
            <li>
              NEXTSTEP에서 주관하는{" "}
              <a href="https://edu.nextstep.camp/c/QoTvUh4y/">TDD, 클린코드 with 리액트 3기</a>{" "}
              리뷰어 참여
            </li>
            <li>5명 이상의 수강생 대상 코드 리뷰 및 페어 프로그래밍 진행</li>
            <li>리뷰 목록:</li>
            <ul>
              <li>
                <a href="https://github.com/next-step/react-calculator/pulls?q=is%3Apr+is%3Aclosed+assignee%3Aonschan">
                  React Calculator
                </a>
              </li>
              <li>
                <a href="https://github.com/next-step/react-payments/pulls?q=is%3Apr+is%3Aclosed+assignee%3Aonschan">
                  React Payments
                </a>
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <h3 css={typography.subsection}>우아한테크코스</h3>
          <p css={typography.body}>*2022.02 ~ 2022.12*</p>
          <ul css={listStyle}>
            <li>우아한형제들이 주최하는 개발자 FE 양성 교육</li>
            <li>클린코드, 협업, 서비스 개발 및 운영에 대한 학습</li>
            <li>학습 및 활동 내역 정리</li>
            <ul>
              <li>
                <a href="https://github.com/onschan/2022-woowacourse-fe-onstar">
                  https://github.com/onschan/2022-woowacourse-fe-onstar
                </a>
              </li>
            </ul>
          </ul>
        </div>

        <div>
          <h3 css={typography.subsection}>오픈 소스 컨트리뷰터</h3>
          <ul css={listStyle}>
            <li>
              <a href="https://github.com/reactjs/ko.react.dev">리액트 공식 문서</a> 한국어 번역
              참여 - 2023.06.26
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        css={sectionStyle}
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 css={typography.section}>Certificate</h2>
        <p css={typography.body}>
          <strong>정보처리기사</strong> | 한국산업인력공단 | 2021.11.26
        </p>
      </motion.section>
    </div>
  );
};

export default App;
