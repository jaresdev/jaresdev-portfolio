import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

const ThemeToggle: FunctionalComponent = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    console.log("Component mounted");
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") ?? "light";
      setTheme(savedTheme);
    }
  }, []);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div class="relative toggle-switch w-full h-full rounded-full bg-[#87CEEB] dark:bg-[#2C3E50] flex justify-center items-center cursor-pointer shadow-xl dark:shadow-md dark:shadow-slate-500/20" onClick={handleClick}>
      <div class={`switch absolute size-12 flex items-center justify-center bg-white dark:bg-black rounded-full ${theme === 'dark' ? 'translate-x-full' : '-translate-x-full'} transition-all duration-300`}>
        { theme == 'light' ? <div class="sun text-4xl">☀️</div> : '' }
        { theme == 'dark' ? (
          <>
            <div class="moon text-4xl">🌙</div>
          </>
        ) : '' }
      </div>
    </div>
  );
};

export default ThemeToggle;
