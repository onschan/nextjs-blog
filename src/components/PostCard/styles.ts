import { css } from "@emotion/react";

import { toPixel, makeTextEllipsisByLine } from "@/styles";
import theme from "@/styles/theme";

export const postContainer = css`
  width: ${toPixel(theme.size.postCard.height)};
  height: ${toPixel(theme.size.postCard.width)};
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
    span:nth-of-type(1),
    span:nth-of-type(2) {
      color: ${theme.colors.primary};
      transition: 0.125s all ease-in;
    }

    img {
      scale: calc(1.03);
      transition: 0.125s all ease-in;
    }
  }
`;

export const textWrapper = css`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  height: 216px;
  margin-left: 36px;
  width: ${`calc(${toPixel(theme.size.postCard.height)} - 216px - 36px)`};

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
  color: ${theme.colors.gray800};
`;
