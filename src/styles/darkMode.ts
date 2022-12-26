import { toCssVar } from ".";
import { css } from "@emotion/react";

import theme from "./theme";

export const darkModePalette = {
  text: toCssVar("text"),
  background: toCssVar("background"),
  toggleIcon: toCssVar("toggle-icon"),
  toggleBackGround: toCssVar("toggle-background"),
};

const lightTheme = css`
  --text: ${theme.colors.black};
  --background: ${theme.colors.white};
  --toggle-icon: ${theme.colors.red};
  --toggle-background: ${theme.colors.gray400};
`;

const darkTheme = css`
  --text: ${theme.colors.white};
  --background: ${theme.colors.black};
  --toggle-icon: yellow;
  --toggle-background: ${theme.colors.gray500};
`;

const darkMode = css`
  body {
    ${lightTheme}
    transition: 0.125s all ease-in;
  }

  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
    }
  }

  body[data-theme="light"] {
    ${lightTheme}
  }

  body[data-theme="dark"] {
    ${darkTheme}
  }

  body {
    color: ${darkModePalette.text};
    background: ${darkModePalette.background};
  }
`;

export default darkMode;
