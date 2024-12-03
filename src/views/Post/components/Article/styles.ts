import { css } from "@emotion/react";

import { theme } from "@/theme";

import { typography } from "@/styles";

export const section = css`
  min-width: 0;
`;

export const title = css`
  ${typography.large}
`;

export const date = css`
  ${typography.bodySmall}
  padding-top: 16px;
  color: ${theme.text.secondary};
  text-align: end;
`;
