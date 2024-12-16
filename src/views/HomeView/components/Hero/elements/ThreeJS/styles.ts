import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

export const canvasContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38vw;
  height: 38vw;
  cursor: pointer;

  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 75vw;
    height: 75vw;
  }
`;

export const loadingSpinner = css`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${theme.text.secondary};
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;
`;
