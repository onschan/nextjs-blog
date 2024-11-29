import { css } from "@emotion/react";

export const resetCSS = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    appearance: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  img,
  picture,
  video,
  svg,
  canvas {
    display: block;
    max-width: 100%;
  }
`;
