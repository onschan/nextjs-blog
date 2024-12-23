import { css, keyframes } from "@emotion/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useBoolean, useLockBodyScroll, useWindowScroll } from "react-use";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import * as styles from "./styles";

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
              <Link href="/">
                <span css={styles.linkStyle}>Home</span>
              </Link>
              <Link href="/postList">
                <span css={styles.linkStyle}>Posts</span>
              </Link>
              <Link href="/about">
                <span css={styles.linkStyle}>About</span>
              </Link>
              <Link href="/rss.xml">
                <span css={styles.linkStyle}>RSS</span>
              </Link>
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
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
      {isOpen && (
        <div css={styles.menu}>
          <Link href="/" onClick={toggle}>
            Home
          </Link>
          <Link href="/postList" onClick={toggle}>
            Posts
          </Link>
          <Link href="/about" onClick={toggle}>
            About
          </Link>
          <Link href="/rss.xml" onClick={toggle}>
            RSS
          </Link>
        </div>
      )}
    </header>
  );
}
