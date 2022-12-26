import { HiStar } from "react-icons/hi";

import * as styles from "./styles";

import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  // TODO: 홈버튼, 다크모드 버튼
  // TODO: 반응형

  return (
    <header css={styles.headerWrapper}>
      <div css={styles.contents}>
        <div css={styles.left}>
          <HiStar size={36} />
          <span>OnStar.Dev</span>
        </div>
        <div css={styles.right}>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

// 홈 버튼 // 버튼s
