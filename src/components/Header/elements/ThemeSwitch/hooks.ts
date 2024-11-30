import { useState } from "react";
import { useMount } from "react-use";

import { THEME } from "@/theme";

const DEFAULT = "system";

export const useThemeSwitch = () => {
  const [mode, setMode] = useState<THEME | undefined>(undefined);

  const handleClickSwitch = (mode: THEME) => {
    setMode(mode);
    document.body.dataset.theme = mode;
    window.localStorage.setItem("theme-mode", mode);
  };

  useMount(() => {
    const mode = window.localStorage.getItem("theme-mode") || "system";

    if (!["light", "dark", "system"].includes(mode)) {
      document.body.dataset.theme = DEFAULT;
      setMode(DEFAULT);
      return;
    }

    setMode(mode as THEME);
    document.body.dataset.theme = mode;
  });

  return { mode, handleClickSwitch };
};
