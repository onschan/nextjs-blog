import { css } from "@emotion/react";

import theme from "@/styles/theme";

export const postContainer = css`
  width: 800px;
  height: 240px;
  margin: 32px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: pointer;

  img {
    border-radius: 12px;
    box-shadow: 2px 2px 6px -4px ${theme.colors.gray800};
  }

  &:hover {
    span:first-of-type {
      color: #68c1f8;
      transition: 0.125s all ease-in;
    }
  }
`;

export const textWrapper = css`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: calc(800px - 216px - 36px);
  height: 216px;

  margin-left: 36px;
  padding: 8px 16px;
`;

export const title = css`
  font-size: 36px;
  font-weight: 600;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

export const description = css`
  font-size: 18px;
`;

export const date = css`
  font-size: 16px;
  color: ${theme.colors.gray800};
`;
