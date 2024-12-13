import Link from "next/link";
import { useWindowScroll } from "react-use";

import * as styles from "./styles";

import { ThemeSwitch } from "./elements";

export default function Header() {
  const { y } = useWindowScroll();

  return (
    <header
      css={styles.headerWrapper({
        isScrolled: y > 0,
      })}
    >
      <div css={styles.contents}>
        <div css={styles.left}>
          <Link css={styles.home} href="/">
            <span>onschan.me</span>
          </Link>
        </div>
        <div css={styles.right}>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
