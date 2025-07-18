import { css } from "@emotion/react";

import { theme } from "@/theme";

import { typography } from "@/styles";

export const footer = css`
  ${typography.caption}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 24px 0;
`;

export const copyright = css`
  font-size: 8px;
  color: ${theme.text.secondary};

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
