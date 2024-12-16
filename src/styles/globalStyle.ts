import { css } from "@emotion/react";

import { theme, themeCSS } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { keyframesCSS } from "./keyframes";
import { resetCSS } from "./resetCSS";

export const globalStyle = css`
  ${resetCSS}

  ${themeCSS}

  ${keyframesCSS}

  *:focus {
    outline: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;

    color: ${theme.text.primary};
    background: ${theme.background.primary};
  }

  #__next {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .wide-only {
    @media screen and (max-width: ${BREAK_POINT}px) {
      display: none;
    }
  }
`;
