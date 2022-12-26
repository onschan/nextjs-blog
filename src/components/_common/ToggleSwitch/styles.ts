import { css } from "@emotion/react";

import { themedPalette } from "@/styles/darkMode";
import theme from "@/styles/theme";

const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.gray800};
  border-radius: 16px;
  border: none;
  width: 66px;
  height: 28px;
  position: relative;
  cursor: pointer;
`;

const element = (selector: boolean) => css`
  width: 45%;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  color: ${selector ? themedPalette.text : themedPalette.toggleIcon};
  transition: all 0.3s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ball = (toggle: boolean) => css`
  background-color: ${themedPalette.background};
  width: 48%;
  height: 80%;
  border-radius: 12px;
  position: absolute;
  left: 3px;
  transition: all 0.3s ease-in-out;
  box-shadow: 2px 2px 2px 0px ${theme.colors.shadow30};
  ${toggle &&
  css`
    transform: translate(90%, 0);
    transition: all 0.3s ease-in-out;
  `}
`;

const styles = { wrapper, element, ball };

export default styles;
