import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { typography } from "@/styles";

export const container = css`
  display: flex;
  align-items: flex-start;
  height: 100%;

  @media screen and (max-width: ${BREAK_POINT}px) {
    display: none;
  }
`;

export const ul = css`
  position: sticky;
  top: 80px;
  display: flex;
  gap: 2px;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 12px;
  border-left: 1px solid ${theme.border.default};
`;

export const li = ({ level, isActive }: { level: number; isActive: boolean }) => css`
  ${typography.caption}
  color: ${theme.text.secondary};
  margin-left: ${(level - 1) * 8}px;
  padding: 2px 6px;
  border-radius: 8px;

  &:hover {
    color: ${theme.interactive.primaryHover};
  }

  ${isActive &&
  css`
    font-weight: 500;
    color: ${theme.interactive.primary};
  `}
`;
