import { css } from "@emotion/react";

import { theme } from "@/theme";

import { makeTextEllipsisByLine } from "@/utils";

export const postContainer = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 1200px;
  padding: 16px;
  border: 1px solid ${theme.border.default};
  border-radius: 8px;
  background: ${theme.background.primary};
  cursor: pointer;

  &:hover {
    & > :first-child {
      color: ${theme.text.hero};
      text-decoration: underline;
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

export const date = css`
  color: ${theme.text.tertiary};
  font-size: 14px;
  text-align: right;
`;
