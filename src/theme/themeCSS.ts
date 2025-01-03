import { css } from "@emotion/react";

import { materialLightStyle, materialOceanicStyle } from "./primesStyle";
import { themeColors, themeVariables } from "./theme";

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

export const themeCSS = css`
  body {
    ${createThemeStyles("light")}
    color-scheme: light;
    ${materialLightStyle}

    &[data-theme="dark"] {
      ${createThemeStyles("dark")}
      color-scheme: dark;
      ${materialOceanicStyle}
    }

    &[data-theme="system"] {
      @media (prefers-color-scheme: dark) {
        ${createThemeStyles("dark")}
        color-scheme: dark;
        ${materialOceanicStyle}
      }
    }
  }
`;
