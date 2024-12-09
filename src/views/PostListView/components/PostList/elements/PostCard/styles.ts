import { css } from "@emotion/react";

import { theme } from "@/theme";

import { makeTextEllipsisByLine } from "@/utils";

export const postContainer = css`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
  margin: 32px;
  cursor: pointer;
`;

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 240px;
  width: 100%;
  padding: 8px 16px;
`;

export const title = css`
  ${makeTextEllipsisByLine(2)}
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
`;

export const description = css`
  ${makeTextEllipsisByLine(2)}
  color: ${theme.text.secondary};
  font-size: 18px;
  line-height: 1.5;
`;

export const date = css`
  color: ${theme.text.tertiary};
  font-size: 16px;
`;
