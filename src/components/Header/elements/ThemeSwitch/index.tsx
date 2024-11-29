import { useEffect, useLayoutEffect, useState } from "react";
import { MdLightMode, MdNightlight, MdDesktopMac } from "react-icons/md";

import { THEME } from "@/styles/theme";

import * as styles from "./styles";

const DEFAULT = "system";

export default function ThemeSwitch() {
  const [mode, setMode] = useState<THEME | undefined>(undefined);

  const handleClickSwitch = (mode: THEME) => {
    setMode(mode);
    document.body.dataset.theme = mode;
    window.localStorage.setItem("theme-mode", mode);
  };

  useLayoutEffect(() => {
    const mode = window.localStorage.getItem("theme-mode") || "system";

    if (!["light", "dark", "system"].includes(mode)) {
      document.body.dataset.theme = DEFAULT;
      setMode(DEFAULT);
      return;
    }

    setMode(mode as THEME);
    document.body.dataset.theme = mode;
  }, []);

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
