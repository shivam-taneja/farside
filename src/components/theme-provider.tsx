import { createContext, useContext, useEffect } from "react";
import { useSettingsStore, UISize } from "@/store/settings";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  uiSize: UISize;
  setUiSize: (size: UISize) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  uiSize: "system",
  setUiSize: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  // Sync the Zustand state with the Theme context
  const theme = useSettingsStore((state) => state.theme);
  const setTheme = useSettingsStore((state) => state.setTheme);
  const uiSize = useSettingsStore((state) => state.uiSize);
  const setUiSize = useSettingsStore((state) => state.setUiSize);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("ui-size-small", "ui-size-medium", "ui-size-large");

    if (uiSize === "system") {
      // Default system size translates to medium
      root.classList.add("ui-size-medium");
    } else {
      root.classList.add(`ui-size-${uiSize}`);
    }
  }, [uiSize]);

  const value = {
    theme,
    setTheme,
    uiSize,
    setUiSize,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
