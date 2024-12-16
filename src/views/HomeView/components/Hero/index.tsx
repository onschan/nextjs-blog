import Link from "next/link";

import * as styles from "./styles";

import { ThreeJS } from "./elements";

export default function Hero() {
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
          <Link href="/postList">
            <button type="button" css={styles.primary}>
              Read Posts
            </button>
          </Link>
          <Link href="/postList">
            <button type="button" css={styles.secondary}>
              About
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
