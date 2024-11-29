import { css } from "@emotion/react";

export type THEME = "light" | "dark" | "system";

export const colors = {
  black: "#272727",
  white: "#ffffff",
  red: {
    100: "#fff1ef",
    200: "#ffd9d3",
    300: "#ffbeb3",
    400: "#ff9e8d",
    500: "#ff8368",
    600: "#ff7358",
    700: "#ff6b50",
    800: "#ff6348",
    900: "#e54e35",
  },
  green: {
    100: "#e8f9ef",
    200: "#c5f2d3",
    300: "#90e5ac",
    400: "#5ed584",
    500: "#45d06f",
    600: "#3ace62",
    700: "#34c759",
    800: "#2ba84a",
    900: "#1e8a37",
  },
  blue: {
    100: "#eef2ff",
    200: "#dde4ff",
    300: "#bbc8ff",
    400: "#8fa3ff",
    500: "#6c85ff",
    600: "#4f6eff",
    700: "#4167ff",
    800: "#375fff",
    900: "#2b4be6",
  },
  gray: {
    100: "#f9fbfd",
    200: "#e3e7ed",
    300: "#ccd2db",
    400: "#b2bac6",
    500: "#949eaf",
    600: "#747d91",
    700: "#575f73",
    800: "#3f4655",
    900: "#333945",
  },
  yellow: {
    100: "#fff9e6",
    200: "#fff1c2",
    300: "#ffe599",
    400: "#ffd966",
    500: "#ffcc33",
    600: "#fccd2b",
    700: "#f9ca24",
    800: "#e5b820",
    900: "#cc9900",
  },
  shadow: {
    10: "#00000010",
    20: "#00000020",
    30: "#00000030",
    40: "#00000040",
    50: "#00000050",
    60: "#00000060",
    70: "#00000060",
    80: "#00000080",
    90: "#00000060",
  },
} as const;

const themeVariables = {
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

const themeColors = {
  light: {
    background: {
      primary: colors.white,
      secondary: colors.gray[100],
      tertiary: colors.gray[300],
      inverse: colors.black,
    },
    text: {
      primary: colors.black,
      secondary: colors.gray[700],
      tertiary: colors.gray[500],
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

const createThemeStyles = (type: keyof typeof themeColors) => {
  return Object.keys(themeColors[type]).reduce((acc, key) => {
    const variables = themeVariables[key as keyof typeof themeVariables];
    const colors = themeColors[type][key as keyof typeof themeColors.dark];

    const css = Object.entries(colors).reduce((acc, [key, color]) => {
      const variable = variables[key as keyof typeof variables];
      return `${acc}${variable}: ${color};`;
    }, "");

    return acc + css;
  }, "");
};

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

export const themeCSS = css`
  body {
    ${createThemeStyles("light")}

    &[data-theme="dark"] {
      ${createThemeStyles("dark")}
    }

    &[data-theme="system"] {
      @media (prefers-color-scheme: dark) {
        ${createThemeStyles("dark")}
      }
    }
  }
`;

export default themeCSS;
