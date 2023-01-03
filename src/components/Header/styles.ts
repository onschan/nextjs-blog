import { css } from "@emotion/react";

import { toOpacityColor, toPixel } from "@/styles";
import theme from "@/styles/theme";

export const headerWrapper = css`
  position: sticky;
  top: 0px;

  backdrop-filter: blur(16px);
  background-color: ${toOpacityColor(theme.colors.primary, 99)};
  z-index: 100;

  width: 100%;
  height: ${toPixel(theme.size.header.height)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const contents = css`
  width: 100%;
  height: 100%;
  max-width: ${toPixel(theme.size.wrapper.main)};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const home = css`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  span {
    font-size: ${toPixel(theme.size.header.title)};
    font-weight: bold;
    height: ${toPixel(theme.size.header.title)};
  }

  svg {
    color: ${theme.colors.star};
    margin: 0 4px;
  }
`;

export const left = css``;
export const right = css``;
