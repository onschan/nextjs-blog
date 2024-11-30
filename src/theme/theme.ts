import { colors } from "../styles/tokens";

export const themeVariables = {
  background: {
    primary: "--background-primary",
    secondary: "--background-secondary",
    tertiary: "--background-tertiary",
    inverse: "--background-inverse",
  },
  text: {
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
  status: {
    success: "--status-success",
    warning: "--status-warning",
    error: "--status-error",
    info: "--status-info",
  },
  interactive: {
    primary: "--interactive-primary",
    primaryHover: "--interactive-primary-hover",
    secondary: "--interactive-secondary",
    secondaryHover: "--interactive-secondary-hover",
    disabled: "--interactive-disabled",
  },
  elevation: {
    small: "--elevation-small",
    medium: "--elevation-medium",
    large: "--elevation-large",
  },
} as const;

export const themeColors = {
  light: {
    background: {
      primary: colors.white,
      secondary: colors.gray[100],
      tertiary: colors.gray[300],
      inverse: colors.black,
    },
    text: {
      primary: colors.black,
      secondary: colors.gray[600],
      tertiary: colors.gray[400],
      inverse: colors.white,
      disabled: colors.gray[400],
    },
    border: {
      default: colors.gray[200],
      strong: colors.gray[300],
      focus: colors.blue[500],
    },
    status: {
      success: colors.green[700],
      warning: colors.yellow[700],
      error: colors.red[700],
      info: colors.blue[700],
    },
    interactive: {
      primary: colors.blue[700],
      primaryHover: colors.blue[800],
      secondary: colors.gray[200],
      secondaryHover: colors.gray[300],
      disabled: colors.gray[300],
    },
    elevation: {
      small: colors.shadow[10],
      medium: colors.shadow[20],
      large: colors.shadow[30],
    },
  },
  dark: {
    background: {
      primary: colors.gray[900],
      secondary: colors.gray[800],
      tertiary: colors.gray[700],
      inverse: colors.white,
    },
    text: {
      primary: colors.white,
      secondary: colors.gray[300],
      tertiary: colors.gray[500],
      inverse: colors.black,
      disabled: colors.gray[600],
    },
    border: {
      default: colors.gray[700],
      strong: colors.gray[600],
      focus: colors.blue[400],
    },
    status: {
      success: colors.green[400],
      warning: colors.yellow[400],
      error: colors.red[400],
      info: colors.blue[400],
    },
    interactive: {
      primary: colors.blue[400],
      primaryHover: colors.blue[300],
      secondary: colors.gray[700],
      secondaryHover: colors.gray[600],
      disabled: colors.gray[800],
    },
    elevation: {
      small: colors.shadow[40],
      medium: colors.shadow[60],
      large: colors.shadow[80],
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
