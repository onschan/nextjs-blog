import { createContext, ReactNode, useContext, useState } from "react";

import type { THEME } from "./types";

interface ThemeContextType {
  mode: THEME;
  changeMode: (mode: THEME) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "system",
  changeMode: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [mode, setMode] = useState<THEME>("system");

  const changeMode = (newMode: THEME) => {
    setMode(newMode);
  };

  const value: ThemeContextType = {
    mode,
    changeMode,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
