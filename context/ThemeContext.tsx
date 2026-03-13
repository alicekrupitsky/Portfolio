"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { themes, type ThemeName } from "@/themes/themes";

type ThemeContextValue = {
  activeTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeName>("green");

  useEffect(() => {
    const root = document.documentElement;
    const palette = themes[activeTheme];

    Object.entries(palette).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
  }, [activeTheme]);

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setTheme: setActiveTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
