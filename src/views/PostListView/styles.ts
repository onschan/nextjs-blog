import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { colors, typography } from "@/styles";

export const hero = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 44px 0 12px;
  border-bottom: 1px solid ${theme.border.default};
`;

export const kicker = css`
  ${typography.captionAccent}
  color: ${colors.primary[400]};
  text-transform: uppercase;
`;

export const headingRow = css`
  display: flex;
  gap: 16px;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 10px;

  @media screen and (max-width: ${BREAK_POINT}px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }
`;

export const title = css`
  font-size: 48px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: 0;

  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: 36px;
  }
`;

export const count = css`
  ${typography.bodySmall}
  color: ${theme.text.tertiary};
`;

export const description = css`
  ${typography.bodyLarge}
  max-width: 680px;
  margin-top: 16px;
  color: ${theme.text.secondary};
`;

export const meta = css`
  ${typography.caption}
  margin-top: 18px;
  color: ${theme.text.tertiary};
`;
