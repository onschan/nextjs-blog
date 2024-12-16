import { css } from "@emotion/react";

import { theme } from "@/theme";

import { colors, prose, typography } from "@/styles";

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

export const article = css`
  padding: 24px 0;

  * {
    scroll-margin-top: 60px;
  }

  h1 {
    ${prose.h1}
  }

  h2 {
    ${prose.h2}
  }

  h3 {
    ${prose.h3}
  }

  h4 {
    ${prose.h4}
  }

  p {
    ${prose.paragraph}
  }

  a {
    ${prose.link}
  }

  img {
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  blockquote {
    ${prose.quote}
    border-left: 4px solid ${colors.accent[400]};
    background-color: ${colors.accent[200]};
    color: ${colors.black};
  }

  hr {
    background: ${theme.border.default};
    height: 1px;
    border: 0;
    margin: 1rem 0;
  }

  ul {
    ${prose.ul}
  }

  ol {
    ${prose.ol}
  }

  li {
    ${prose.li}
  }

  p {
    code {
      ${prose.code}
      background-color: ${colors.accent[500]};
      color: ${colors.white};
    }
  }

  pre {
    position: relative;

    &[data-language="text"]::after {
      content: " ";
    }

    &:not([data-language="text"])::after {
      ${typography.caption}

      content: attr(data-language);
      position: sticky;
      bottom: 100%;
      left: 0;
      display: inline-block;
      text-align: right;
      color: ${colors.white};
      font-family: monospace;
      font-size: 10px;
      text-transform: uppercase;
      transform: translateY(-32px);
      background-color: ${theme.interactive.primary};
      padding: 4px 8px;
      border-radius: 0 0 4px 4px;
    }
  }
`;
