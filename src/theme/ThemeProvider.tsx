import { createContext, ReactNode, useContext, useState } from "react";

import { THEME } from "@/theme/types";

interface ThemeContextType {
  mode: THEME;
  changeMode: (mode: THEME) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
