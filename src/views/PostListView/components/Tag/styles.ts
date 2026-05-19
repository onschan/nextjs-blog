import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { colors, typography } from "@/styles";

export const container = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  width: 100%;
  padding: 2px 0 18px;
  border-bottom: 1px solid ${theme.border.default};
`;

export const tag = css`
  ${typography.captionAccent};
  display: inline-flex;
  gap: 6px;
  align-items: center;
  min-height: 34px;
  padding: 6px 12px;
  border: 1px solid ${theme.border.default};
  border-radius: 9999px;
  color: ${theme.text.secondary};
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;

  &:hover {
    border-color: ${theme.border.strong};
    color: ${theme.text.primary};
  }

  &[aria-current="page"] {
    cursor: default;
  }

  @media (hover: none) {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const activeTag = css`
  border-color: ${colors.primary[400]};
  background: ${colors.primary[100]};
  color: ${colors.primary[400]};
  font-weight: 700;
`;

export const tagCount = css`
  color: ${theme.text.tertiary};
  font-weight: 500;
`;

export const more = css`
  position: relative;

  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 100%;
  }
`;

export const moreSummary = css`
  ${tag}
  list-style: none;

  &::-webkit-details-marker {
    display: none;
  }
`;

export const moreContent = css`
  z-index: 10;
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  min-width: 320px;
  max-width: min(640px, calc(100vw - 40px));
  padding: 12px;
  border: 1px solid ${theme.border.default};
  border-radius: 8px;
  background: ${theme.background.primary};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

  @media screen and (max-width: ${BREAK_POINT}px) {
    position: static;
    width: 100%;
    min-width: 0;
    max-width: none;
    margin-top: 8px;
    box-shadow: none;
  }
`;

export const postContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
