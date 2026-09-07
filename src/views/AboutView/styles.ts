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
  gap: 3.25em;

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

export const listItem = css`
  margin-bottom: 1em;
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

export const contentLong = css`
  display: flex;
  gap: 20px;
  border-left: 1px solid ${theme.border.default};
  padding-left: 1.2em;

  @media screen and (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
    border-left: none;
    padding-left: 0;
  }
`;

export const contentTitle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 16em;
  min-width: 15em;
`;

export const subContent = css`
  ${typography.caption}
  color: ${theme.text.secondary};
`;

export const link = css`
  ${typography.caption}
  color: ${colors.primary[500]};

  :hover {
    color: ${colors.primary[600]};
  }
`;

export const lede = css`
  ${typography.bodyLarge}
  max-width: 40em;
  color: ${theme.text.secondary};

  strong {
    color: ${theme.text.primary};
    font-weight: 600;
  }

  @media screen and (max-width: ${BREAK_POINT}px) {
    ${typography.body}
  }
`;

export const entryStack = css`
  display: flex;
  flex-direction: column;
  gap: 2.25em;
`;

export const entry = css`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
  padding-bottom: 2.25em;
  border-bottom: 1px solid ${theme.border.default};

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const entryHead = css`
  display: flex;
  flex-direction: column;
  gap: 0.15em;
`;

export const entryTitle = css`
  ${typography.subsection}
  font-size: 18px;

  a {
    color: ${colors.primary[500]};
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.22em;
    text-decoration-color: ${colors.primary[500]}66;

    &:hover {
      color: ${colors.primary[600]};
      text-decoration-color: ${colors.primary[600]};
    }

    &:focus-visible {
      outline: 2px solid ${colors.primary[500]};
      outline-offset: 3px;
      border-radius: 2px;
    }
  }
`;

export const entryNote = css`
  ${typography.bodySmall}
  color: ${colors.primary[500]};
`;

export const block = css`
  display: grid;
  grid-template-columns: 3.5em 1fr;
  gap: 1.25em;
  align-items: start;

  @media screen and (max-width: ${BREAK_POINT}px) {
    grid-template-columns: 1fr;
    gap: 0.2em;
  }
`;

export const blockLabel = css`
  ${typography.bodySmall}
  font-weight: 700;
  color: ${theme.text.primary};
  padding-top: 0.25em;
  letter-spacing: 0.02em;

  @media screen and (max-width: ${BREAK_POINT}px) {
    padding-top: 0;
    color: ${colors.primary[500]};
  }
`;

export const blockBody = css`
  ${typography.body}
  max-width: 42em;
  color: ${theme.text.secondary};
  word-break: keep-all;

  strong {
    color: ${theme.text.primary};
    font-weight: 600;
  }
`;

export const measure = css`
  ${typography.caption}
  color: ${theme.text.tertiary};
  max-width: 42em;
  word-break: keep-all;

  &::before {
    content: "측정";
    display: inline-block;
    margin-right: 0.5em;
    padding: 0 0.4em;
    border: 1px solid ${theme.border.default};
    border-radius: 2px;
    font-size: 11px;
    letter-spacing: 0.04em;
  }
`;
