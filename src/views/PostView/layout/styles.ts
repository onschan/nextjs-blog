import { css } from "@emotion/react";

import { BREAK_POINT } from "@/constants";

export const layout = css`
  position: relative;
  display: grid;
  gap: 28px;
  grid-template-columns: 280px 1fr 280px;
  width: 100%;
  max-width: 96rem;
  padding: 32px 20px;

  @media screen and (max-width: ${BREAK_POINT}px) {
    grid-template-columns: 1fr;
    padding: 28px;
  }
`;