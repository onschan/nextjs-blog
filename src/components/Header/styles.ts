import { css } from "@emotion/react";

import { pixelSize } from "@/styles";
import theme from "@/styles/theme";

export const headerWrapper = css`
  position: sticky;
  top: 0px;

  backdrop-filter: blur(7px);
  background-color: #21212180;
  z-index: 100;

  width: 100%;
  height: ${pixelSize(theme.size.header.height)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contents = css`
  width: 100%;
  max-width: 1024px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const left = css`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  span {
    font-size: ${pixelSize(theme.size.header.title)};
    font-weight: bold;
    height: ${pixelSize(theme.size.header.title)};
  }

  svg {
    color: ${theme.colors.star};
    margin: 0 4px;
  }
`;

export const right = css``;
