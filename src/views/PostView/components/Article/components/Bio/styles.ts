import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { typography } from "@/styles";

export const container = css`
  display: flex;
  gap: 20px;
  border-top: 1px solid ${theme.border.default};
  padding: 24px 0;
`;

export const avatar = css`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  cursor: pointer;

  @media screen and (max-width: ${BREAK_POINT}px) {
    width: 60px;
    height: 60px;
  }
`;

export const contents = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const description = css`
  ${typography.body}
  color: ${theme.text.tertiary};

  a {
    letter-spacing: 0.5px;
    color: ${theme.text.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: ${BREAK_POINT}px) {
    ${typography.bodySmall}
  }
`;

export const Links = css`
  display: flex;
  gap: 8px;

  svg {
    color: ${theme.text.secondary};
    cursor: pointer;
  }
`;
