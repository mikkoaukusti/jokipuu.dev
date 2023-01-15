import { useState, useEffect } from "react";

import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

const themes = ["light", "dark"];

export default function ThemeSwitch() {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const changeTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center justify-center p-0.5 rounded-3xl bg-green-200 dark:bg-zinc-600">
      {themes.map((t) => {
        const checked = t === theme;
        return (
          <button
            key={t}
            className={`${
              checked ? "bg-white dark:bg-gray-200" : ""
            } cursor-pointer rounded-2xl px-2 py-0.5`}
            onClick={changeTheme}
            aria-label="Change the theme"
          >
            {t === "light" ? <Sun /> : <Moon />}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
}
