import { createContext, useEffect, type ReactNode, useState } from "react";
import type { Theme } from "../types/theme";

const ThemeContext = createContext<Theme | null>(null);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined"
      ? (localStorage.getItem("theme") ??
          (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"))
      : "light",
  );
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (
        e.key === "theme" &&
        (e.newValue === "light" || e.newValue === "dark")
      ) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { ThemeContext };
