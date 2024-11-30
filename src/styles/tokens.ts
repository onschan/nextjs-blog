import { css } from "@emotion/react";

export const colors = {
  black: "#272727",
  white: "#ffffff",
  red: {
    100: "#fff1ef",
    200: "#ffd9d3",
    300: "#ffbeb3",
    400: "#ff9e8d",
    500: "#ff8368",
    600: "#ff7358",
    700: "#ff6b50",
    800: "#ff6348",
    900: "#e54e35",
  },
  green: {
    100: "#e8f9ef",
    200: "#c5f2d3",
    300: "#90e5ac",
    400: "#5ed584",
    500: "#45d06f",
    600: "#3ace62",
    700: "#34c759",
    800: "#2ba84a",
    900: "#1e8a37",
  },
  blue: {
    100: "#eef2ff",
    200: "#dde4ff",
    300: "#bbc8ff",
    400: "#8fa3ff",
    500: "#6c85ff",
    600: "#4f6eff",
    700: "#4167ff",
    800: "#375fff",
    900: "#2b4be6",
  },
  gray: {
    100: "#f9fbfd",
    200: "#e3e7ed",
    300: "#ccd2db",
    400: "#b2bac6",
    500: "#949eaf",
    600: "#747d91",
    700: "#575f73",
    800: "#3f4655",
    900: "#333945",
  },
  yellow: {
    100: "#fff9e6",
    200: "#fff1c2",
    300: "#ffe599",
    400: "#ffd966",
    500: "#ffcc33",
    600: "#fccd2b",
    700: "#f9ca24",
    800: "#e5b820",
    900: "#cc9900",
  },
  shadow: {
    10: "#00000010",
    20: "#00000020",
    30: "#00000030",
    40: "#00000040",
    50: "#00000050",
    60: "#00000060",
    70: "#00000060",
    80: "#00000080",
    90: "#00000060",
  },
} as const;

// UI 컴포넌트용 타이포그래피
export const typography = {
  // 메인 제목용 크기들
  hero: css`
    font-weight: 800;
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
  large: css`
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
  medium: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,

  // 섹션 제목용
  section: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
  `,
  subsection: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
  `,

  // 본문용
  bodyLarge: css`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.7;
  `,
  body: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
  `,

  // 부가 정보
  caption: css`
    font-weight: 400;
    font-size: 13px;
    line-height: 1.5;
    color: #666;
  `,

  // 네비게이션
  nav: css`
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
  `,
} as const;

// 블로그 포스트용 타이포그래피
export const prose = {
  // 포스트 제목
  title: css`
    font-weight: 800;
    font-size: 40px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,

  // 헤딩 계층
  h1: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin: 2em 0 1em;
  `,
  h2: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: -0.01em;
    margin: 1.5em 0 1em;
  `,
  h3: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
    margin: 1.5em 0 1em;
  `,
  h4: css`
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    margin: 1.5em 0 1em;
  `,

  // 본문 요소들
  paragraph: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    margin: 1em 0;
  `,

  quote: css`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    font-style: italic;
    margin: 2em 0;
    padding-left: 1em;
    border-left: 4px solid #ddd;
  `,

  code: css`
    font-family: "Fira Code", monospace;
    font-size: 15px;
    line-height: 1.6;
  `,

  inlineCode: css`
    font-family: "Fira Code", monospace;
    font-size: 14px;
    line-height: 1.4;
    padding: 0.2em 0.4em;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  `,

  list: css`
    font-size: 16px;
    line-height: 1.8;
    margin: 1em 0 1em 1.5em;
  `,
} as const;
