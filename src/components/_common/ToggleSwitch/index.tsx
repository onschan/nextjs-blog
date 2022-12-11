import { ReactNode } from "react";

import styles from "./styles";

interface Props {
  toggle: boolean;
  onClickSwitch: () => void;
  left: ReactNode;
  right: ReactNode;
}

export default function ToggleSwitch({ toggle, onClickSwitch, left, right }: Props) {
  return (
    <button css={styles.wrapper} type="button" onClick={onClickSwitch}>
      <div css={styles.element(toggle)}>{left}</div>
      <div css={styles.element(!toggle)}>{right}</div>
      <div css={styles.ball(toggle)} />
    </button>
  );
}
