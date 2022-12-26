import { toPixel } from ".";
import { css } from "@emotion/react";

import theme from "./theme";

export const postListWrapper = css`
  width: ${toPixel(theme.size.wrapper.main)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
