import { colors } from "../styles/tokens";

export const themeVariables = {
  background: {
    primary: "--background-primary",
    inverse: "--background-inverse",
  },
  text: {
    hero: "--text-hero",
    primary: "--text-primary",
    secondary: "--text-secondary",
    tertiary: "--text-tertiary",
    inverse: "--text-inverse",
    disabled: "--text-disabled",
  },
  border: {
    default: "--border-default",
    strong: "--border-strong",
    focus: "--border-focus",
  },
  interactive: {
    primary: "--interactive-primary",
    primaryHover: "--interactive-primary-hover",
    secondary: "--interactive-secondary",
    secondaryHover: "--interactive-secondary-hover",
    disabled: "--interactive-disabled",
  },
} as const;

export const themeColors = {
  light: {
    background: {
      primary: colors.syntax.lightBg,
      inverse: colors.gray[900],
    },
    text: {
      hero: colors.syntax.lightStrongText,
      primary: colors.black,
      secondary: colors.gray[600],
      tertiary: colors.gray[400],
      inverse: colors.white,
      disabled: colors.gray[400],
    },
    border: {
      default: colors.gray[300],
      strong: colors.gray[400],
      focus: colors.primary[500],
    },
    interactive: {
      primary: colors.primary[500],
      primaryHover: colors.primary[600],
      secondary: colors.gray[200],
      secondaryHover: colors.gray[300],
      disabled: colors.gray[400],
    },
  },
  dark: {
    background: {
      primary: colors.gray[900],
      inverse: colors.syntax.lightBg,
    },
    text: {
      hero: colors.gray[400],
      primary: colors.white,
      secondary: colors.gray[400],
      tertiary: colors.gray[500],
      inverse: colors.black,
      disabled: colors.gray[600],
    },
    border: {
      default: colors.gray[700],
      strong: colors.gray[600],
      focus: colors.primary[400],
    },
    interactive: {
      primary: colors.primary[600],
      primaryHover: colors.primary[700],
      secondary: colors.gray[500],
      secondaryHover: colors.gray[600],
      disabled: colors.gray[700],
    },
  },
} as const;

export const theme = Object.entries(themeVariables).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: Object.entries(value).reduce(
      (acc, [key, value]) => ({ ...acc, [key]: `var(${value})` }),
      {}
    ),
  }),
  {}
) as typeof themeVariables;
