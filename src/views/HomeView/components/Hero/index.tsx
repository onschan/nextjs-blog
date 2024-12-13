import * as styles from "./styles";

import { ThreeJS } from "./elements";

export function Hero() {
  return (
    <div css={styles.layout}>
      <ThreeJS />
      <div css={styles.content}>
        <h1 css={styles.title}>{`Solving Challenges,\nServing Users`}</h1>
        <p css={styles.subText}>
          <span>Frontend Developer</span>
          <span css={styles.separator}>|</span>
          <span>SeungChan On</span>
        </p>
        <div css={styles.buttons}>
          <button type="button">About</button>
          <button type="button">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
