import { css } from "@emotion/react";

import { theme } from "@/theme";

import { makeTextEllipsisByLine } from "@/utils";

import { BREAK_POINT } from "@/constants";

export const postContainer = css`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 16px 0;
  padding: 16px;
  border: 1px solid ${theme.border.default};
  border-radius: 8px;
  background: ${theme.background.primary};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const imageWrapper = css`
  flex-shrink: 0;
  width: 100%;
  max-width: 320px;
  height: 160px;
  overflow: hidden;
  border-radius: 8px;
`;

export const image = css`
  object-fit: fill;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  flex-grow: 1;
`;

export const title = css`
  ${makeTextEllipsisByLine(2)}
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 8px;
`;

export const description = css`
  ${makeTextEllipsisByLine(2)}
  color: ${theme.text.secondary};
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const date = css`
  color: ${theme.text.tertiary};
  font-size: 14px;
  text-align: right;
`;
