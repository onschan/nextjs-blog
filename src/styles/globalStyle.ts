import { css } from "@emotion/react";

import { theme, themeCSS } from "@/theme";

import { resetCSS } from "./resetCSS";

export const globalStyle = css`
  ${resetCSS}

  ${themeCSS}

  *:focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    // [MEMO] 타이포 관련 설정 추가 필요
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;

    color: ${theme.text.primary};
    background: ${theme.background.primary};
  }

  main {
    display: flex;
    justify-content: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    border: 0;
  }
`;
