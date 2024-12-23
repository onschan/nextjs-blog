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
  height: 60px;
  background: ${theme.background.primary};

  ${isScrolled &&
  css`
    border-bottom: 1px solid ${theme.border.default};
  `}
`;

export const contents = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 88rem;
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
  ${typography.nav}
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

export const menuButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border: 1px solid ${theme.border.default};
  border-radius: 9999px;
  color: ${theme.text.primary};
`;

export const menu = css`
  @keyframes slideDown {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  position: absolute;
  top: 58px;
  width: calc(100vw);
  height: calc(100vh - 60px + 2px);
  background: ${theme.background.primary};
  border-top: 1px solid ${theme.border.default};
  animation: slideDown 0.3s ease-out;
  display: flex;
  flex-direction: column;

  > a {
    font-size: 18px;
    color: ${theme.text.primary};
    text-decoration: none;
    padding: 20px;
    border-bottom: 1px solid ${theme.border.default};
    width: 100%;

    &:hover {
      background: ${theme.text.hero};
      color: ${theme.text.inverse};
    }
  }
`;
