import { css } from "@emotion/react";

export const makeTextEllipsisByLine = (line: number) => css`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

export const toOpacityColor = (color: string, rate: number) =>
  `${color}${String(rate).padStart(2, "0")}`;

export const parseKoreanDate = (dateString: string): Date => {
  if (!dateString) {
    return new Date();
  }

  const formattedDate = dateString.replace(/년|월/g, "-").replace(/일/g, "").replace(/\s/g, "");
  const parsedDate = new Date(formattedDate);

  if (isNaN(parsedDate.getTime())) {
    return new Date();
  }

  return parsedDate;
};
