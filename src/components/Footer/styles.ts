import { css } from "@emotion/react";

import { typography } from "@/styles";

export const footer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  padding: 32px 0;
  ${typography.caption}
`;
