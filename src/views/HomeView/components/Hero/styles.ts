import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { colors } from "@/styles";

export const layout = css`
  z-index: 1;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px - 60px);
  height: 100%;
  font-size: 16px;

  @media screen and (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    font-size: 10px;
  }
`;

export const loadingSpinner = css`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${theme.text.primary};
  transform: translate(-50%, -50%);
  animation: spin 1s linear infinite;
`;

export const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const title = css`
  font-size: 2.5em;
  font-weight: 800;
  margin: 0;
  white-space: pre-line;
  line-height: 1.2;
  letter-spacing: -1px;
  background: linear-gradient(
    90deg,
    ${theme.text.primary} 0%,
    ${colors.gray[400]} 25%,
    ${colors.gray[500]} 50%,
    ${colors.gray[400]} 75%,
    ${theme.text.primary} 100%
  );
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: titleShine 7s linear infinite;

  @keyframes titleShine {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }

  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: 2rem;
  }
`;

export const subText = css`
  font-size: 1.4em;
  font-weight: 500;
  margin-top: 20px;
  letter-spacing: 1px;
  color: ${theme.text.primary};
`;

export const separator = css`
  margin: 0 8px;
`;

export const buttons = css`
  display: flex;
  gap: 20px;
  margin-top: 32px;

  button {
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 0.5px;
    cursor: pointer;
  }
`;

export const buttonIcon = css`
  margin-right: 8px;
  font-size: 1em;
`;

export const primary = css`
  background: ${theme.interactive.primary};
  color: ${colors.white};

  &:hover {
    background: ${theme.interactive.primaryHover};
  }
`;

export const secondary = css`
  background: ${theme.interactive.secondary};
  color: ${theme.text.primary};

  &:hover {
    background: ${theme.interactive.secondaryHover};
  }
`;
