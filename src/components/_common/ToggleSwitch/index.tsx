import { ReactNode } from "react";

import * as styles from "./styles";

interface Props {
  toggle: boolean;
  onClickSwitch: (value: boolean) => void;
  left: ReactNode;
  right: ReactNode;
}

export default function ToggleSwitch({ toggle, onClickSwitch, left, right }: Props) {
  return (
    <button css={styles.wrapper} type="button" onClick={() => onClickSwitch(!toggle)}>
      <div css={styles.element(toggle)}>{left}</div>
      <div css={styles.element(!toggle)}>{right}</div>
      <div css={styles.ball(toggle)} />
    </button>
  );
}
