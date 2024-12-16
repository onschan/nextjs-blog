import { css } from "@emotion/react";

import { BREAK_POINT } from "@/constants";

export const layout = css`
  position: relative;
  display: grid;
  gap: 28px;
  grid-template-columns: 240px 1fr 240px;
  width: 100%;
  max-width: 90rem;
  padding: 32px 20px;

  @media screen and (max-width: ${BREAK_POINT}px) {
    grid-template-columns: 1fr;
    padding: 28px;
  }
`;
