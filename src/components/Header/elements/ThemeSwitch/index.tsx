import { MdDesktopMac, MdLightMode, MdNightlight } from "react-icons/md";

import * as styles from "./styles";

import { useThemeSwitch } from "./hooks";

export default function ThemeSwitch() {
  const { mode, handleClickSwitch } = useThemeSwitch();

  return (
    <fieldset css={styles.wrapper}>
      <legend className="sr-only">테마 변경</legend>
      <input
        checked={mode === "light"}
        className="sr-only"
        id="theme-switch-light"
        name="theme-switch"
        type="radio"
        value="light"
        onChange={() => handleClickSwitch("light")}
      />
      <label
        css={styles.element({ isSelected: mode === "light" })}
        htmlFor="theme-switch-light"
        title="라이트 테마"
      >
        <MdLightMode size={16} />
        <span className="sr-only">라이트 테마</span>
      </label>
      <input
        checked={mode === "dark"}
        className="sr-only"
        id="theme-switch-dark"
        name="theme-switch"
        type="radio"
        value="dark"
        onChange={() => handleClickSwitch("dark")}
      />
      <label
        css={styles.element({ isSelected: mode === "dark" })}
        htmlFor="theme-switch-dark"
        title="다크 테마"
      >
        <MdNightlight size={16} />
        <span className="sr-only">다크 테마</span>
      </label>
      <input
        checked={mode === "system"}
        className="sr-only"
        id="theme-switch-system"
        name="theme-switch"
        type="radio"
        value="system"
        onChange={() => handleClickSwitch("system")}
      />
      <label
        css={styles.element({ isSelected: mode === "system" })}
        htmlFor="theme-switch-system"
        title="시스템 테마"
      >
        <MdDesktopMac size={16} />
        <span className="sr-only">시스템 테마</span>
      </label>
    </fieldset>
  );
}
