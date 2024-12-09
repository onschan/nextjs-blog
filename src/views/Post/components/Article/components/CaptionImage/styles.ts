import { css } from "@emotion/react";

import { theme } from "@/theme";

import { typography } from "@/styles";

export const layout = css`
  display: flex;
  gap: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const caption = css`
  ${typography.caption}
  color: ${theme.text.tertiary}
`;
