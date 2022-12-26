import { HiStar } from "react-icons/hi";

import * as styles from "./styles";

import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  // TODO: 홈버튼, 다크모드 버튼
  // TODO: 반응형

  return (
    <header css={styles.headerWrapper}>
      <div css={styles.left}>
        <div css={styles.titleWrapper}>
          <HiStar size={32} />
          <span>OnStar.Dev</span>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}

// 홈 버튼 // 버튼s
