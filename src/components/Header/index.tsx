import { css } from "@emotion/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useBoolean, useLockBodyScroll, useWindowScroll } from "react-use";

import { BREAK_POINT } from "@/constants";

import * as styles from "./styles";

import { NAVIGATION } from "./constants";
import { ThemeSwitch } from "./elements";

export default function Header() {
  const { y } = useWindowScroll();

  const [isOpen, toggle] = useBoolean(false);

  useLockBodyScroll(isOpen);

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
          <div>
            <div
              css={css`
                display: flex;
                gap: 8px;

                @media screen and (max-width: ${BREAK_POINT}px) {
                  display: none;
                }
              `}
            >
              {NAVIGATION.map(({ href, label }) => (
                <Link key={label} href={href}>
                  <span css={styles.linkStyle}>{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <ThemeSwitch />
          </div>
          <div
            css={css`
              display: none;

              @media screen and (max-width: ${BREAK_POINT}px) {
                display: block;
              }
            `}
          >
            <button css={styles.menuButton} onClick={toggle}>
              <IoMenu />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div css={styles.menu}>
          {NAVIGATION.map(({ href, label }) => (
            <Link key={label} href={href} onClick={toggle}>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
