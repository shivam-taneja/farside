import { useEffect, useState } from "react";

const STORAGE_KEY = "farside-theme";

type ThemePreference = "light" | "dark" | "system";

function getSystemDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getStoredPreference(): ThemePreference {
  return (localStorage.getItem(STORAGE_KEY) as ThemePreference) ?? "system";
}

function resolveIsDark(preference: ThemePreference): boolean {
  if (preference === "system") return getSystemDark();
  return preference === "dark";
}

export function useTheme() {
  const [preference, setPreference] =
    useState<ThemePreference>(getStoredPreference);
  const [dark, setDark] = useState<boolean>(() =>
    resolveIsDark(getStoredPreference()),
  );

  // Apply .dark class to root whenever resolved value changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Listen for system theme changes — only matters when preference is "system"
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    function handleChange(e: MediaQueryListEvent) {
      if (getStoredPreference() === "system") {
        setDark(e.matches);
      }
    }

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  function toggleTheme() {
    setPreference((prev) => {
      const next: ThemePreference = prev === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      setDark(next === "dark");
      return next;
    });
  }

  function resetToSystem() {
    localStorage.setItem(STORAGE_KEY, "system");
    setPreference("system");
    setDark(getSystemDark());
  }

  return { dark, preference, toggleTheme, resetToSystem };
}
