import { css } from "@emotion/react";

export const pixelSize = (size: number) => `${size}px`;

export const cssVar = (name: string) => `var(--${name})`;

export const textEllipsis = (line: number) => css`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;
