import { MdDesktopMac, MdLightMode, MdNightlight } from "react-icons/md";

import * as styles from "./styles";

import { useThemeSwitch } from "./hooks";

export default function ThemeSwitch() {
  const { mode, handleClickSwitch } = useThemeSwitch();

  return (
    <fieldset css={styles.wrapper}>
      <legend className="sr-only">테마 변경</legend>
      <input className="sr-only" id="theme-switch-light" type="radio" value="light" />
      <label
        css={styles.element({ isSelected: mode === "light" })}
        htmlFor="theme-switch-light"
        onClick={() => handleClickSwitch("light")}
      >
        <MdLightMode size={16} />
      </label>
      <input className="sr-only" id="theme-switch-dark" type="radio" value="dark" />
      <label
        css={styles.element({ isSelected: mode === "dark" })}
        htmlFor="theme-switch-dark"
        onClick={() => handleClickSwitch("dark")}
      >
        <MdNightlight size={16} />
      </label>
      <input className="sr-only" id="theme-switch-system" type="radio" value="system" />
      <label
        css={styles.element({ isSelected: mode === "system" })}
        htmlFor="theme-switch-system"
        onClick={() => handleClickSwitch("system")}
      >
        <MdDesktopMac size={16} />
      </label>
    </fieldset>
  );
}
