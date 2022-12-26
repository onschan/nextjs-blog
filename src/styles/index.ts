import { css } from "@emotion/react";

export const toCssVar = (name: string) => `var(--${name})`;

export const toPixel = (size: number) => `${size}px`;

export const toOpacityColor = (color: string, rate: number) => `${color}${rate}`;

export const makeTextEllipsisByLine = (line: number) => css`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;
