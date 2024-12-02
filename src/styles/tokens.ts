import { css } from "@emotion/react";

export const colors = {
  black: "#18181B",
  white: "#ffffff",
  primary: {
    100: "#EEF6FF",
    200: "#D5E9FF",
    300: "#A6D0FF",
    400: "#7AB7FF",
    500: "#4F9EFF",
    600: "#3B82F6",
    700: "#2563EB",
    800: "#1D4ED8",
    900: "#1E40AF",
  },
  accent: {
    100: "#F5F3FF",
    200: "#E9E5FF",
    300: "#D4CBFF",
    400: "#B197FC",
    500: "#9171F8",
    600: "#7C4DFF",
    700: "#6D28D9",
    800: "#5B21B6",
    900: "#4C1D95",
  },
  gray: {
    100: "#F8FAFC",
    200: "#EEF2F6",
    300: "#E2E8F0",
    400: "#CBD5E1",
    500: "#94A3B8",
    600: "#64748B",
    700: "#475569",
    800: "#27364B",
    900: "#1A2234",
  },
  success: {
    100: "#ECFDF5",
    200: "#D1FAE5",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981",
  },
  error: {
    100: "#FEF2F2",
    200: "#FEE2E2",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
  },
  warning: {
    100: "#FFFBEB",
    200: "#FEF3C7",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
  },
  code: {
    bg: "#1A1B26",
    text: "#A9B1D6",
    keyword: "#BB9AF7",
    string: "#9ECE6A",
    function: "#7AA2F7",
    comment: "#565F89",
  },
  syntax: {
    keyword: "#FF7B72",
    string: "#A5D6FF",
    function: "#D2A8FF",
    comment: "#8B949E",
    variable: "#FFA657",
  },
} as const;

export const typography = {
  hero: css`
    font-weight: 800;
    font-size: 48px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
  large: css`
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
  `,
  medium: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,
  section: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
  `,
  subsection: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
  `,
  bodyLarge: css`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.7;
  `,
  body: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.7;
  `,
  bodySmall: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 1.5;
  `,
  caption: css`
    font-weight: 400;
    font-size: 13px;
    line-height: 1.5;
  `,
  captionAccent: css`
    font-weight: 600;
    font-size: 13px;
    line-height: 1.5;
  `,
} as const;

export const prose = {
  title: css`
    font-weight: 800;
    font-size: 40px;
    line-height: 1.3;
    letter-spacing: -0.02rem;
  `,
  h1: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: -0.02rem;
    margin: 2.5rem 0 1rem;
  `,
  h2: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: -0.01rem;
    margin: 2rem 0 0.9rem;
  `,
  h3: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
    margin: 1.8rem 0 0.8rem;
  `,
  h4: css`
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    margin: 1.5rem 0 0.7rem;
  `,
  link: css`
    color: ${colors.primary[500]};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${colors.primary[600]};
      text-decoration: underline;
    }
  `,
  paragraph: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    margin: 0.5rem 0;
  `,
  quote: css`
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    margin: 1rem 0;
    padding-left: 0.5rem;
    border-radius: 0 12px 12px 0;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 1.6;
      padding: 0.8rem 1rem;
    }
  `,
  ul: css`
    display: block;
    list-style-type: disc;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 32px;
    unicode-bidi: isolate;
    line-height: 2;

    ul {
      list-style-type: circle;
      margin-block-start: 0px;
      margin-block-end: 0px;

      ul {
        list-style-type: square;
      }
    }
  `,
  ol: css`
    display: block;
    list-style-type: decimal;
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 32px;
    unicode-bidi: isolate;
  `,
  li: css`
    display: list-item;
    text-align: -webkit-match-parent;
    unicode-bidi: isolate;

    p {
      padding: 0;
      margin: 0;
      line-height: 2;
    }
  `,
  code: css`
    padding: 0.2em 0.4em;
    font-size: 85%;
    border-radius: 3px;
  `,
} as const;
