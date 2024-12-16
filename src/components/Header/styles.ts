import { css } from "@emotion/react";

import { theme } from "@/theme";

import { typography } from "@/styles";

export const headerWrapper = ({ isScrolled }: { isScrolled: boolean }) => css`
  z-index: 9999;
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${theme.background.primary};

  ${isScrolled &&
  css`
    border-bottom: 1px solid ${theme.border.default};
  `}
`;

export const contents = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;
  height: 100%;
  padding: 0 20px;
`;

export const left = css``;
export const right = css``;

export const home = css`
  ${typography.subsection}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
