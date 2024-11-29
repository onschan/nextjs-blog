import { css } from "@emotion/react";

import { makeTextEllipsisByLine } from "@/styles";

export const postContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 32px;
  cursor: pointer;
`;

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 216px;
  margin-left: 36px;
  padding: 8px 16px;
`;

export const title = css`
  font-size: 36px;
  font-weight: 600;

  ${makeTextEllipsisByLine(2)}
`;

export const description = css`
  font-size: 18px;

  ${makeTextEllipsisByLine(2)}
`;

export const date = css`
  font-size: 16px;
`;
