import { css } from "@emotion/react";

import { theme } from "@/theme";

import { typography } from "@/styles";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;

export const empty = css`
  ${typography.body}
  width: 100%;
  padding: 48px 16px;
  border: 1px dashed ${theme.border.default};
  border-radius: 8px;
  color: ${theme.text.secondary};
  text-align: center;
`;
