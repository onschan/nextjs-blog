import { css } from "@emotion/react";

import { theme } from "@/theme";

export const wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 28px;
  border: 1px solid ${theme.border.default};
  border-radius: 9999px;
`;

export const element = ({ isSelected }: { isSelected: boolean }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: ${theme.text.tertiary};
  border-radius: 9999px;
  cursor: pointer;

  :hover {
    color: ${theme.text.primary};
  }

  ${isSelected &&
  css`
    color: ${theme.text.primary};
    box-shadow: 0 0 0 1px ${theme.border.default}, 0 1px 2px 0 ${theme.border.default};
  `}
`;
