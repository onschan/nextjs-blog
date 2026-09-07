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
            이커머스 SaaS의 판매자용 어드민과 웹사이트 편집기를 4년 가까이 만들고 운영해왔습니다.
            <br />
            초기 화면을 만들던 때부터, 지금 판매자들이 매일 들어와 일하는 제품이 되기까지 계속
            참여해왔습니다.
            <br />
            36개 애플리케이션이 모인 제품에서 주문·상품·채널 연동·마케팅 메시지·고객 관리를 맡았고,
            공용 컴포넌트 라이브러리와 마이크로 프론트엔드 구조 같은 공통 기반도 함께 만들었습니다.
          </p>

          <Bio />
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Summary</h2>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>제품</h3>
            </div>
            <ul css={styles.list}>
              <li>
                <strong>
                  받은 요구사항을 구현하는 데서 멈추지 않고 제품 방향에도 의견을 냅니다.
                </strong>{" "}
                화면을 만드는 사람이 사용자가 어디서 막히는지 가장 먼저 본다고 생각해, 문제를
                발견하면 기획을 기다리지 않고 먼저 제안합니다. 운영자가 주문과 문의를 뒤늦게
                알아채는 문제를 보고 브라우저 알림을 제안했고, 그 제안이 받아들여져 실제 기능으로
                나갔습니다.
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>데이터</h3>
            </div>
            <ul css={styles.list}>
              <li>
                <strong>판단에 필요한 데이터가 없으면, 측정할 수 있게 만드는 일부터 합니다.</strong>{" "}
                재지 않으면 나아졌는지 알 수 없다고 생각합니다. 고치기 전에 무엇이 얼마나 문제인지
                확인하고, 낸 뒤에는 결과를 다시 봅니다.
              </li>
              <li>
                제품 전반의 이벤트는 시도·성공·실패 규칙으로 정리해왔고, 지금은 기능을 기획할 때
                무엇을 재고 그 데이터를 누가 쓸지까지 함께 정하는 절차를 만들고 있습니다.
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>학습</h3>
            </div>
            <ul css={styles.list}>
              <li>
                <strong>기술을 쓰는 데서 멈추지 않고 왜 그렇게 만들어졌는지까지 확인합니다.</strong>{" "}
                어떤 문제를 풀려고 나온 기술인지 알면 어디까지 믿고 쓸 수 있는지도 함께 보인다고
                봅니다. 그래서 정리된 자료가 없으면 GitHub의 PR·이슈 기록과 구현 코드까지
                내려갑니다.
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>공유</h3>
            </div>
            <ul css={styles.list}>
              <li>
                <strong>배운 것은 팀 안에서도 밖에서도 나눕니다.</strong> 혼자 익힌 것은 그 사람이
                떠나면 사라지지만, 정리해 내놓으면 남는다고 봅니다. 우아한테크코스·NEXTSTEP 리뷰어로
                35명 이상에게 코드 리뷰와 페어 프로그래밍을 진행했습니다. 팀 안에서는 AI 에이전트
                활용 방식을 워크숍과 문서로 정리해 함께 쓰도록 만들었습니다.
              </li>
            </ul>
          </div>
        </section>

        <section css={styles.section}>
          <h2 css={styles.heading}>Skills</h2>
          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>기술 스택</h3>
            </div>
            <ul css={styles.list}>
              <li>Core: React, Next.js, TypeScript</li>
              <li>State: React Query(TanStack Query), Jotai, Recoil, Redux, Zustand</li>
              <li>Build: Nx, Module Federation, Webpack, Vite</li>
              <li>Styling: Emotion, Styled-components, SCSS, CSS Modules, Tailwind CSS</li>
              <li>Data: GraphQL(Apollo), WebSocket, SSE, Web Push</li>
              <li>Testing: Cypress, Jest, React Testing Library, Storybook, Sentry, Lighthouse</li>
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
                <strong>담당 제품</strong>
                <ul css={styles.list}>
                  <li>
                    성격이 다른 두 제품을 함께 맡았습니다. 주문·상품·고객을 다루는 데이터 중심의
                    백오피스와, 코드를 모르는 사용자가 직접 끌어 놓아 사이트를 만드는 편집기입니다.
                  </li>
                  <li>
                    기능 개발과 함께 공용 컴포넌트 라이브러리, 마이크로 프론트엔드 구조 같은 공통
                    기반도 만들었습니다.
                  </li>
                  <li>
                    Nx 모노레포 · 36개 애플리케이션 · Next.js, TypeScript, GraphQL(Apollo), Recoil,
                    React Query, Module Federation
                  </li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>웹사이트 편집기 드래그 편집 — 예외 분기를 규칙 엔진으로 전환</strong>
                <ul css={styles.list}>
                  <li>
                    요소를 쌓아 올리는 것뿐 아니라 가로로 나란히 놓거나 그 안에 다시 요소를 넣는
                    중첩 레이아웃까지 지원해야 했습니다. 설정 패널에서 값을 고르던 편집을
                    미리보기에서 직접 끌어 옮기는 방식으로 바꾸면서, 편집 규칙 전반을 설계하고
                    구현했습니다.
                  </li>
                  <li>
                    문제 · 사용자에게는 요소를 끌어 옮기는 한 번의 동작이지만, 시스템에는 문서
                    트리를 다시 짜는 일입니다. 요소 종류·놓는 방향·현재 위치·옮기는 요소가 안에 담고
                    있는 구조가 모두 결과를 바꿔 경우의 수가 곱해집니다.
                  </li>
                  <li>
                    제약 · 계층 목록을 다루는 좌측 패널과 좌표를 다루는 미리보기는 입력 성격이 전혀
                    다른데, 같은 조작에는 같은 결과를 내야 합니다. 따로 만들면 한쪽만 고쳐지는
                    버그가 계속 나옵니다.
                  </li>
                  <li>
                    선택 · 예외를 하나씩 막는 대신, 어느 경로로 들어오든 동일하게 동작하는 판정 →
                    자동 래핑 → 검증 파이프라인으로 통일했습니다. 미리보기는 격리된 프레임이라
                    메시지 통신으로 두 컨텍스트가 하나의 편집 상태를 보게 했고, 깊이 검증은 서버를
                    오가면 타이밍이 맞지 않아 클라이언트가 맡도록 했습니다.
                  </li>
                  <li>
                    결과 · 예외를 규칙으로 옮기고 나니, 새 편집 시나리오가 생겨도 두 경로에 똑같이
                    적용됩니다. 분기문이 아니라 규칙만 늘어나는 구조가 됐습니다.
                  </li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>
                  외부 앱 확장 시스템 설계 — 제품 코드 수정 없이 외부 개발자가 기능을 얹는 구조
                </strong>
                <ul css={styles.list}>
                  <li>
                    문제 · 협력사가 만든 앱이 백오피스 바깥의 별도 화면이 아니라 제품의 일부처럼
                    붙어야 했습니다. 협력사가 늘 때마다 내부 코드를 고치는 방식으로는 감당할 수
                    없었습니다.
                  </li>
                  <li>
                    제약 · 우리가 손댈 수 없는 코드가 우리 화면 안에서 실행됩니다. DOM을 그대로
                    열어주면 내부 구조가 곧 공개 API가 되어 이후로는 아무것도 못 바꾸고, 반대로
                    완전히 격리하면 협력사 기능만 동떨어져 보이는 화면이 됩니다.
                  </li>
                  <li>
                    선택 · DOM을 열어주는 대신 무엇을 하고 싶은지만 받는 인터페이스를 만들었습니다.
                    외부 스크립트는 모달을 띄워달라, 이 자리에 위젯을 걸어달라고 요청할 뿐, 실제로
                    그리는 건 내부 컴포넌트입니다.
                  </li>
                  <li>
                    한 번 배포한 인터페이스는 되돌릴 수 없다고 보고 설계했습니다. 식별자 누락과
                    예약어 충돌은 등록 시점에 막고, 잘못 쓰면 조용히 실패하는 대신 이유가 그대로
                    보이게 해 협력사가 문의 없이 스스로 원인을 찾게 했습니다.
                  </li>
                  <li>
                    같은 문제를 먼저 푼 Shopify의 App Bridge와 Slot·Widget 구조를 뜯어보고 설계
                    근거로 삼았고, 외부 개발사가 볼 연동 가이드도 직접 썼습니다.
                  </li>
                  <li>
                    결과 · 협력사가 늘어도 제품 코드는 그대로 두고 스크립트만 등록하면 기능이
                    붙습니다. 지금 10개 이상 협력사의 기능이 제품 안에서 동작하고 있습니다.
                  </li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>
                  수천 개 입력 필드를 다루는 어드민의 렌더링 최적화 — INP 600ms → 60ms
                </strong>
                <ul css={styles.list}>
                  <li>
                    문제 · 상품에 색상·사이즈 같은 옵션을 넣으면 조합 수만큼 항목이 늘어 수천 개가
                    되고, 항목마다 가격·재고·코드 입력란이 따로 붙습니다. 타이핑이 밀린다는 제보가
                    반복됐지만 빨라졌는지는 체감으로 가릴 수 없어, 입력 응답성을 INP로 먼저 측정한
                    뒤 원인을 찾았습니다.
                  </li>
                  <li>
                    원인 · 병목은 입력란 개수가 아니라 한 번의 변경이 미치는 범위였습니다. 값 하나가
                    바뀌면 넓게 걸린 상태 구독이 함께 반응하면서, 방금 타이핑한 곳과 상관없는
                    영역까지 연쇄적으로 다시 그려졌습니다.
                  </li>
                  <li>
                    대안 · 입력 반영을 늦추는 방법은 다시 그리는 양을 그대로 둔 채 증상만 가리고,
                    값이 늦게 반영되는 문제까지 생겨 제외했습니다. 화면을 통째로 새로 짜는 쪽이
                    근본에 가까웠지만, 운영 중인 핵심 화면을 한 번에 교체하는 부담이 커 나눠서
                    적용할 수 있는 방향을 택했습니다.
                  </li>
                  <li>
                    선택 · 상태 구독을 잘게 쪼개 실제로 바뀐 영역만 반응하도록 다시 설계했습니다.
                  </li>
                  <li>
                    결과 · 주요 입력 동작 기준 INP 600ms 이상에서 60ms 이하로 개선했습니다. 이
                    방식을 팀에 공유해, 비슷한 대량 입력 화면에서도 같은 패턴을 쓰고 있습니다.
                  </li>
                  <li>
                    측정 · 같은 화면·같은 데이터 규모에서 개선 전후 입력 응답 지연(INP)을 각각 측정
                  </li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>
                  웹사이트 편집기 부팅 성능 개선 — 91개 페이지를 통째로 받던 부팅을 1페이지로
                </strong>
                <ul css={styles.list}>
                  <li>
                    문제 · 편집기가 느리다는 문의를 받고 그 스토어를 직접 열어보니, 편집기를 켤 때
                    사이트에 있는 91개 페이지의 구성 요소를 전부 한 번에 불러오고 있었습니다. 지금
                    편집하는 한 페이지가 아니라 사이트 전체가 부팅 비용에 들어가는 구조라, 페이지를
                    많이 만든 고객일수록 편집기가 느려졌습니다.
                  </li>
                  <li>
                    선택 · 조회를 빠르게 만드는 대신 언제 불러올지를 바꾸는 쪽을 택했습니다. 다만
                    필요한 필드 목록이 여러 화면에서 함께 쓰는 조각에 묶여 있어, 거기서 지우면 그걸
                    참조하는 20여 곳이 같이 깨집니다. 조각 자체를 목록용과 편집용으로 나누는 것
                    말고는 길이 없었습니다.
                  </li>
                  <li>
                    결과 · 부팅 응답 11.2MB에서 0.37MB로, 브라우저가 메모리에 들고 있는 화면 구성
                    요소 3,076개에서 25개로 줄었습니다. 대신 페이지를 처음 열 때 170ms짜리 요청이
                    하나 늘었는데, 두 번째부터는 요청이 없고 체감으로도 걸리지 않아 감수할 만한
                    비용이라고 봤습니다.
                  </li>
                  <li>
                    측정 · 문의가 들어온 스토어에서, 변경분을 되돌려 같은 서버·같은 데이터로 전후를
                    각각 실측
                  </li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>판매자 사이트 폰트 로딩 최적화 — 페이지 HTML 95.6% 감소</strong>
                <ul css={styles.list}>
                  <li>
                    문제 · 판매자가 우리 서비스로 만든 사이트는 페이지마다 폰트 CSS 1.86MB를 HTML에
                    그대로 담아 내보내고 있었습니다. 그 사이트가 실제로 쓰는 폰트와는 상관없는
                    양이었고, 캐시도 타지 못해 페이지를 열 때마다 다시 내려갔습니다.
                  </li>
                  <li>
                    원인 · 두 가지가 겹쳐 있었습니다. 프레임워크의 폰트 인라인 최적화가 기본으로
                    켜져 있어 폰트 CSS를 HTML에 직접 넣고 있었고, 공통 문서 템플릿에는 폰트 60개가
                    하드코딩돼 사이트가 무엇을 쓰든 전부 따라 내려갔습니다.
                  </li>
                  <li>
                    선택 · 인라인을 끄고 링크 방식으로 되돌려 브라우저 캐시를 타게 한 뒤, 서버에서
                    그릴 때 그 사이트가 실제로 쓰는 폰트만 골라 링크를 걸도록 바꿨습니다. 디자인
                    설정값만 봐서는 사용자가 CSS에 직접 적어둔 폰트를 놓치기 때문에, 사용자가 쓴
                    코드까지 훑어 폰트 선언을 모았습니다.
                  </li>
                  <li>
                    결과 · 페이지 HTML 2,513KB에서 110KB로(95.6% 감소), 미리보기 1,863KB에서
                    7KB로(99.6% 감소), HTML 내 @font-face 3,423개에서 0개로 줄었습니다.
                  </li>
                  <li>측정 · 같은 사이트에서 배포 전후 HTML 응답 크기를 각각 실측</li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>
                  사내 공용 컴포넌트 라이브러리 — 헤드리스 구조와 AI가 먼저 찾게 만든 문서
                </strong>
                <ul css={styles.list}>
                  <li>
                    문제 · 달력·탭·표 컬럼 필터처럼 여러 화면에 반복되는 UI를 화면마다 새로 만들고
                    있었습니다. 공용으로 묶으려니 화면마다 요구가 달라 옵션이 계속 늘었고, 옵션이
                    늘수록 한 화면을 위해 넣은 분기가 다른 화면의 동작까지 건드리게 됩니다.
                  </li>
                  <li>
                    선택 · 동작과 표현을 분리하는 헤드리스 방식을 택했습니다. 열림·선택·포커스 같은
                    상태와 상호작용은 라이브러리가 맡고, 화면에 어떻게 보일지는 쓰는 쪽이
                    조립합니다. Storybook으로 동작을 문서화해 물어보지 않고도 확인할 수 있게
                    했습니다.
                  </li>
                  <li>
                    결과 · 같은 UI를 다시 짜지 않고 가져다 조립하게 됐고, 동작이 어긋나면 한곳만
                    고치면 됩니다. 이후 AI 에이전트가 이미 있는 컴포넌트를 두고 새 UI를 만들어내는
                    문제가 생겨, UI를 만들기 전에 같은 컴포넌트가 있는지 먼저 확인하도록 규칙과 탐색
                    방법을 에이전트가 읽는 문서로 남겼습니다.
                  </li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>마이크로 프론트엔드 아키텍처 운영 — 빌드 20분 → 2분</strong>
                <ul css={styles.list}>
                  <li>
                    선택 · 프론트엔드가 커지면서 한 도메인의 변경이 전체 빌드와 배포를 붙잡는 상황이
                    반복됐습니다. Module Federation 기반으로 도메인별 독립 애플리케이션을 분리하는
                    작업에 참여했고, 분리 자체가 목적이 되면 제품 경험이 파편화된다고 보고 경계를
                    나누는 동시에 공통 UI·유틸·인증 로직은 중앙화했습니다.
                  </li>
                  <li>
                    운영 · 원격 모듈을 불러오는 코드가 20여 곳에 각자 복사돼 있었고, 로딩에 실패하면
                    빈 화면을 돌려줘 어떤 모듈이 왜 실패했는지 알 수 없었습니다. 로딩과 실패 처리를
                    한 컴포넌트로 모으고 모듈 식별자를 함께 받도록 바꿔, 43개 파일에서 순 454줄을
                    덜어내면서 실패 지점이 드러나게 했습니다.
                  </li>
                  <li>
                    운영 · 컴파일러 설정이 유발하던 개발 환경 메모리 누수를 36개 애플리케이션
                    전반에서 걷어냈습니다.
                  </li>
                  <li>
                    결과 · 주요 워크플로우 기준 빌드 시간을 20분에서 2분 이내로 줄였습니다. 36개
                    애플리케이션이 각자 개발·배포하는 구조를 운영 중입니다.
                  </li>
                </ul>
              </li>

              <li css={styles.listItem}>
                <strong>AI 에이전트를 팀 개발 워크플로우에 도입</strong>
                <ul css={styles.list}>
                  <li>
                    문제 · 팀원마다 쓰는 도구와 설정이 달랐습니다. 누구는 Claude Code, 누구는
                    Codex를 쓰고 각자의 하네스와 프롬프트를 따로 두다 보니, 같은 코드베이스를 두고도
                    나오는 결과물의 품질이 사람마다 달랐습니다.
                  </li>
                  <li>
                    선택 · 도구를 잘 쓰는 법 대신, 도구가 일할 환경을 만드는 쪽으로 방향을
                    틀었습니다. 어떤 에이전트를 쓰든 어떤 하네스를 얹든 같은 코드베이스에서는 같은
                    품질이 나와야 한다고 보고, 규칙과 검증 기준을 각자의 도구가 아니라 저장소에
                    뒀습니다.
                  </li>
                  <li>
                    결과 · 결과물 편차가 줄어든 뒤로는 팀의 AI 활용을 앞장서 이끌었습니다. 워크숍을
                    열어 활용 지침과 스킬 셋, 워크플로우, 참고 자료를 직접 정리해 나눴고, 각자 같은
                    시행착오를 겪는 대신 검증된 설정이 팀에 쌓이도록 만들었습니다.
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
              <li>React, TypeScript, Recoil, React Query, Emotion, Cypress</li>
              <li>
                여러 사람이 같은 체크리스트를 동시에 보기 때문에, 상태가 늦게 반영되면 서비스를 믿을
                수 없게 된다고 보고 Polling → SSE → WebSocket으로 차례로 옮기며 각 방식의
                트레이드오프를 직접 확인했습니다.
              </li>
              <li>
                Lighthouse로 병목을 진단한 뒤 코드 분할, WebP, 지연 로딩을 적용해 LCP 8초에서 3초로,
                Lighthouse 40점대에서 80점대 후반으로 개선했습니다.
              </li>
              <li>
                Webpack·Babel·Cypress로 개발·테스트 환경을 꾸리고 CI/CD에 E2E 테스트를 물려, 주요
                사용자 흐름이 깨지면 바로 걸리도록 했습니다.
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
              <li>
                수강생 30명 이상에게 코드 리뷰와 페어 프로그래밍을 진행했습니다. 답을 알려주기보다
                질문을 던져, 리뷰이가 스스로 구조 문제를 찾도록 리뷰했습니다.
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>코드잇 프론트엔드 멘토</h3>
              <p css={styles.subContent}>2025.02 ~ 2025.04</p>
            </div>
            <ul css={styles.list}>
              <li>수강생 대상 기술 공유와 프로젝트 멘토링을 진행했습니다.</li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>NEXTSTEP 리뷰어</h3>
              <p css={styles.subContent}>2024.02 ~ 2024.06</p>
            </div>
            <ul css={styles.list}>
              <li>수강생 5명 이상에게 코드 리뷰와 페어 프로그래밍을 진행했습니다.</li>
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
              <li>Next.js로 직접 만들어 운영하며 SEO, RSS, 콘텐츠 구조화까지 붙였습니다.</li>
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
                리액트를 만든 사람들이 어떤 흐름으로 Fiber에 도달했는지가 궁금했습니다. 저장소의
                PR과 이슈를 2016년 첫 논의부터 따라 읽고, 설계자들이 실제로 주고받은 말을 근거로
                Fiber가 탄생한 배경과 어떻게 발전해왔는지를 정리했습니다. 동작 원리는 원본 코드를
                직접 읽어 확인했고, 문단마다 원문 링크를 달아 제 해석을 건너뛰고 바로 확인할 수 있게
                했습니다.
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
                직접 쓰는 기술인 만큼 더 정확하게 남기고 싶었습니다. 동작 원리를 처음부터 다시
                확인하고, 트리쉐이킹 한계나 Next.js 지원 중단처럼 실무에서 실제로 부딪힌 문제를 함께
                담았습니다. 쓸 만한 경우와 굳이 쓸 필요 없는 경우를 나눈 기준까지 정리했습니다.
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>소프트웨어 개발자가 제품 임팩트를 만드는 방식</h3>
              <p css={styles.link}>
                <Link href="/post/product-impact-engineer">글 보러가기</Link>
              </p>
            </div>
            <ul css={styles.list}>
              <li>
                기능을 구현하는 데서 멈추지 않고 제품 관점에서 임팩트를 내려면 무엇을 봐야 하는지
                정리했습니다. 구현하면서 마주치는 사실을 제품 판단의 재료로 바꾸는 관점과, 그것을
                제안하고 실제 반영까지 끌고 가는 방법을 다뤘습니다.
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>10분 테코톡 · 온스타의 상태관리</h3>
              <p css={styles.link}>
                <a
                  href="https://www.youtube.com/watch?v=jqir73Lourk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  발표 보러가기
                </a>
              </p>
            </div>
            <ul css={styles.list}>
              <li>
                개별 라이브러리 사용법 대신, 상태 관리 도구가 지금의 모습에 이른 흐름을
                따라갔습니다. 도구 비교는 몇 달이면 낡지만 그 흐름은 남는다고 봤습니다. DOM을 직접
                만지던 시절부터 데이터가 화면을 만드는 방식으로 넘어오기까지, 각 단계에서 무엇이
                불편했고 그래서 다음 도구가 왜 나왔는지를 정리했습니다.
              </li>
            </ul>
          </div>

          <div css={styles.content}>
            <div css={styles.contentTitle}>
              <h3 css={styles.subheading}>오픈소스 기여</h3>
              <p css={styles.link}>
                <a
                  href="https://github.com/reactjs/ko.react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React 공식 문서 한국어 번역
                </a>
              </p>
            </div>
            <ul css={styles.list}>
              <li>
                가장 오래 써온 프레임워크라 문서를 깊이 볼 일이 많았고, 읽고 넘어가는 대신 번역으로
                남기고 싶어 참여했습니다.
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
              <li>클린 코드, 테스트 자동화, 협업 프로세스, 서비스 개발·운영 학습</li>
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
