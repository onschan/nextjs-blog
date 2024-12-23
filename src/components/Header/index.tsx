import { css, keyframes } from "@emotion/react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useBoolean, useLockBodyScroll, useWindowScroll } from "react-use";

import { theme } from "@/theme";

import { BREAK_POINT } from "@/constants";

import * as styles from "./styles";

import { ThemeSwitch } from "./elements";

const slideDown = keyframes`
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

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
              <button
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  width: 28px;
                  height: 28px;
                  border: 1px solid ${theme.border.default};
                  border-radius: 9999px;
                  color: ${theme.text.primary};
                `}
                onClick={toggle}
              >
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
        <div
          css={css`
            position: absolute;
            top: 58px;
            width: calc(100vw);
            height: calc(100vh - 60px + 2px);
            background: ${theme.background.primary};
            border-top: 1px solid ${theme.border.default};
            animation: ${slideDown} 0.3s ease-out;
            display: flex;
            flex-direction: column;
          `}
        >
          <Link
            href="/"
            css={css`
              font-size: 18px;
              color: ${theme.text.primary};
              text-decoration: none;
              padding: 20px;
              border-bottom: 1px solid ${theme.border.default};
              width: 100%;
            `}
          >
            Home
          </Link>
          <Link
            href="/postList"
            css={css`
              font-size: 18px;
              color: ${theme.text.primary};
              text-decoration: none;
              padding: 20px;
              border-bottom: 1px solid ${theme.border.default};
              width: 100%;
            `}
          >
            Posts
          </Link>
          <Link
            href="/about"
            css={css`
              font-size: 18px;
              color: ${theme.text.primary};
              text-decoration: none;
              padding: 20px;
              border-bottom: 1px solid ${theme.border.default};
              width: 100%;
            `}
          >
            About
          </Link>
          <Link
            href="/rss.xml"
            css={css`
              font-size: 18px;
              color: ${theme.text.primary};
              text-decoration: none;
              padding: 20px;
              border-bottom: 1px solid ${theme.border.default};
              width: 100%;
            `}
          >
            RSS
          </Link>
        </div>
      )}
    </header>
  );
}
