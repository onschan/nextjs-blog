import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

export const layout = css`
  display: flex;
  gap: 60px;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 100px - 50px);
  height: 100%;
  padding: 40px;
  background: ${theme.background.primary};
  font-size: 16px;

  @media screen and (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding: 30px;
    font-size: 10px;
  }
`;

export const canvasContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vw;
  height: 45vw;

  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 70vw;
    height: 70vw;
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
