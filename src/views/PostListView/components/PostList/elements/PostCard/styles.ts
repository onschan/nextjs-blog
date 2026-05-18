import { css } from "@emotion/react";

import { theme } from "@/theme";

import { makeTextEllipsisByLine } from "@/utils";

import { colors } from "@/styles";

export const postContainer = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 16px;
  border: 1px dashed ${theme.border.default};
  border-radius: 8px;
  background: ${theme.background.primary};
  cursor: pointer;

  &:hover .title {
    text-decoration: underline;
  }

  &:hover {
    border-color: ${theme.border.strong};
  }

  @media (hover: none) {
    &:hover .title {
      text-decoration: none;
    }
  }
`;

export const title = css`
  ${makeTextEllipsisByLine(2)}
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
`;

export const description = css`
  ${makeTextEllipsisByLine(2)}
  color: ${theme.text.secondary};
  font-size: 16px;
  line-height: 1.5;
`;

export const meta = css`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  color: ${theme.text.tertiary};
  font-size: 14px;
`;

export const tags = css`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: flex-end;
`;

export const tag = css`
  padding: 2px 8px;
  border: 1px solid ${theme.border.default};
  border-radius: 9999px;
  color: ${colors.primary[500]};
  font-size: 12px;
  line-height: 1.5;
`;
