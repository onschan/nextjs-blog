import { css } from "@emotion/react";
import Link from "next/link";
import { useRef } from "react";

import * as styles from "./styles";

import { ThreeJS } from "./elements";

export default function Hero() {
  return (
    <div css={styles.layout}>
      <ThreeJS />
      <div css={styles.content}>
        <h1 css={styles.title}>{`Solving Challenges,\nServing Users`}</h1>
        <p css={styles.subText}>
          <span>SeungChan On</span>
          <span css={styles.separator}>|</span>
          <span>Frontend Developer</span>
        </p>
        <div css={styles.buttons}>
          <Link href="/postList">
            <button type="button" css={styles.primary}>
              Read Posts
            </button>
          </Link>
          {/* <Link href="/postList">
            <button type="button" css={styles.secondary}>
              About
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
