import { css } from "@emotion/react";

import theme from "@/styles/theme";

export const headerWrapper = css`
  position: sticky;
  top: 0px;

  backdrop-filter: blur(7px);
  background-color: #21212180;
  z-index: 100;

  width: 100%;
  height: ${theme.size.header.height};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const left = css`
  width: 100%;
  max-width: 1024px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const titleWrapper = css`
  span {
    font-size: 24px;
    font-weight: bold;
    height: 24px;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: #f9ca24;
    margin: 0 8px;
  }
`;
