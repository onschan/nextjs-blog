import { css } from "@emotion/react";

import { theme } from "@/theme";

import { typography } from "@/styles";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
  width: 100%;
`;

export const empty = css`
  ${typography.body}
  width: 100%;
  padding: 48px 16px;
  border-bottom: 1px solid ${theme.border.default};
  color: ${theme.text.secondary};
  text-align: center;
`;
