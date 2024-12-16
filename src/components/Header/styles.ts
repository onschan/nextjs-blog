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

export const right = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const home = css`
  ${typography.subsection}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const linkStyle = css`
  position: relative;
  text-decoration: none;
  display: inline-block;
  padding: 0 5px;
  color: ${theme.text.tertiary};
  font-weight: 500;

  &:hover {
    color: ${theme.text.primary};
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background: ${theme.text.tertiary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
    transform-origin: right;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: left;
  }
`;
