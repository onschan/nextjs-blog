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
  nav: css`
    font-weight: 500;
    font-size: 15px;
    line-height: 1.5;
  `,
} as const;

export const prose = {
  title: css`
    font-weight: 800;
    font-size: 40px;
    line-height: 1.3;
    letter-spacing: -0.02em;
  `,
  h1: css`
    font-weight: 700;
    font-size: 32px;
    line-height: 1.3;
    letter-spacing: -0.02em;
    margin: 2em 0 1em;
  `,
  h2: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 1.4;
    letter-spacing: -0.01em;
    margin: 1.5em 0 1em;
  `,
  h3: css`
    font-weight: 600;
    font-size: 20px;
    line-height: 1.4;
    margin: 1.5em 0 1em;
  `,
  h4: css`
    font-weight: 600;
    font-size: 18px;
    line-height: 1.4;
    margin: 1.5em 0 1em;
  `,
  paragraph: css`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.8;
    margin: 1em 0;
  `,
  quote: css`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.6;
    font-style: italic;
    margin: 2em 0;
    padding-left: 1em;
    /* border-left: 4px solid #ddd; */
  `,
  code: css`
    font-family: "Fira Code", monospace;
    font-size: 15px;
    line-height: 1.6;
  `,
  inlineCode: css`
    font-family: "Fira Code", monospace;
    font-size: 14px;
    line-height: 1.4;
    padding: 0.2em 0.4em;
    /* background-color: rgba(0, 0, 0, 0.05); */
    border-radius: 4px;
  `,
  list: css`
    font-size: 16px;
    line-height: 1.8;
    margin: 1em 0 1em 1.5em;
  `,
} as const;
