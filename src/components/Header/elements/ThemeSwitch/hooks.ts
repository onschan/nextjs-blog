import { useMount } from "react-use";

import { THEME, useTheme } from "@/theme";

const DEFAULT = "system";

export const useThemeSwitch = () => {
  const { mode, changeMode } = useTheme();

  const handleClickSwitch = (mode: THEME) => {
    changeMode(mode);
    document.body.dataset.theme = mode;
    window.localStorage.setItem("theme-mode", mode);
  };

  useMount(() => {
    const mode = window.localStorage.getItem("theme-mode") || "system";

    if (!["light", "dark", "system"].includes(mode)) {
      document.body.dataset.theme = DEFAULT;
      changeMode(DEFAULT);
      return;
    }

    changeMode(mode as THEME);
    document.body.dataset.theme = mode;
  });

  return { mode, handleClickSwitch };
};
