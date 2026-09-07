import { css } from "@emotion/react";

import { theme } from "@/theme";

import { makeTextEllipsisByLine } from "@/utils";

import { BREAK_POINT } from "@/constants";

import { typography } from "@/styles";

export const container = css`
  border-top: 1px solid ${theme.border.default};
  padding: 24px 0;
`;

export const heading = css`
  ${typography.subsection}
  color: ${theme.text.primary};
`;

export const list = css`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

export const item = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 0;
  border-bottom: 1px solid ${theme.border.default};
  transition: transform 0.2s, border-color 0.2s;

  &:hover .title {
    color: ${theme.interactive.primary};
  }

  &:hover {
    transform: translateX(4px);
    border-color: ${theme.border.strong};
  }

  @media (hover: none) {
    &:hover {
      transform: none;
    }
  }
`;

export const title = css`
  ${typography.bodyAccent}
  ${makeTextEllipsisByLine(2)}
  color: ${theme.text.primary};
  transition: color 0.2s;
`;

export const description = css`
  ${typography.bodySmall}
  ${makeTextEllipsisByLine(2)}
  color: ${theme.text.secondary};

  @media screen and (max-width: ${BREAK_POINT}px) {
    ${typography.caption}
  }
`;
