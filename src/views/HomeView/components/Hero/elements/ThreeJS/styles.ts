import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

export const canvasContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38vw;
  max-width: 800px;
  height: 38vw;
  max-height: 800px;
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

export const errorContainer = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.text.secondary};
  text-align: center;
  white-space: pre;
`;
