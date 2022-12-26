import { cssVar } from ".";
import { css } from "@emotion/react";

export const themedPalette = {
  text: cssVar("text"),
  background: cssVar("background"),
  toggleIcon: cssVar("toggleIcon"),
};

const lightTheme = css`
  --text: #1e272e;
  --background: white;
  --toggleIcon: tomato;
`;

const darkTheme = css`
  --text: white;
  --background: #1e272e;
  --toggleIcon: yellow;
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
    color: ${themedPalette.text};
    background: ${themedPalette.background};
  }
`;

export default darkMode;
