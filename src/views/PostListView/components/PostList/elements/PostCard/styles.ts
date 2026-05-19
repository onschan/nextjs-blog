import { css } from "@emotion/react";

import { theme } from "@/theme";

import { makeTextEllipsisByLine } from "@/utils";

import { BREAK_POINT } from "@/constants";

import { colors, typography } from "@/styles";

export const postContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  padding: 26px 0;
  border-bottom: 1px solid ${theme.border.default};
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;

  &:hover .title {
    color: ${theme.interactive.primary};
  }

  &:hover {
    transform: translateX(4px);
    border-color: ${theme.border.strong};
  }

  @media (hover: none) {
    &:hover .title {
      text-decoration: none;
    }

    &:hover {
      transform: none;
    }
  }
`;

export const title = css`
  ${makeTextEllipsisByLine(2)}
  font-size: 24px;
  font-weight: 750;
  line-height: 1.35;
  letter-spacing: 0;
  transition: color 0.2s;

  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: 21px;
  }
`;

export const description = css`
  ${makeTextEllipsisByLine(2)}
  max-width: 760px;
  color: ${theme.text.secondary};
  font-size: 16px;
  line-height: 1.7;
`;

export const meta = css`
  ${typography.caption}
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  color: ${theme.text.tertiary};
`;

export const tags = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0;

  &::before {
    content: "·";
    margin-right: 10px;
    color: ${theme.text.tertiary};
  }
`;

export const tag = css`
  color: ${theme.text.tertiary};

  &:not(:last-of-type)::after {
    content: "/";
    margin: 0 6px;
    color: ${theme.border.strong};
  }
`;
