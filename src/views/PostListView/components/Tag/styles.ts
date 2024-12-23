import { css } from "@emotion/react";

import { theme } from "@/theme";

import { colors, typography } from "@/styles";

export const container = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
  border-bottom: 1px dashed ${theme.border.default};
  padding: 16px 0;
`;

export const tag = css`
  ${typography.body};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (hover: none) {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const activeTag = css`
  ${typography.bodyAccent}
  color: ${colors.primary[400]};
`;

export const postContainer = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
