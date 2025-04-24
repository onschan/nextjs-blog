import { css } from "@emotion/react";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import { colors, typography } from "@/styles";

export const container = css`
  font-size: 16px;
  max-width: 72em;
  padding: 2em 1.5em 4em;
  display: flex;
  flex-direction: column;
  gap: 3.5em;

  @media screen and (max-width: ${BREAK_POINT}px) {
    font-size: 10px;
  }
`;

export const section = css`
  ${typography.body}
  display:flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const title = css`
  ${typography.large}

  strong {
    font-weight: bold;
    color: ${colors.primary[500]};
  }
`;

export const heading = css`
  ${typography.medium}
  margin-top: 1em;
`;

export const subheading = css`
  ${typography.subsection}
`;

export const list = css`
  padding-left: 1.5em;
  list-style-type: circle;
`;

export const content = css`
  display: flex;
  gap: 20px;
  border-left: 2px solid ${colors.primary[500]};
  padding-left: 1.2em;

  @media screen and (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
  }
`;

export const contentTitle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 15em;
`;

export const subContent = css`
  ${typography.caption}
  color: ${theme.text.secondary};
`;
