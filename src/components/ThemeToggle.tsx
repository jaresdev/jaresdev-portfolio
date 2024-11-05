import { useEffect, useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";

const ThemeToggle: FunctionalComponent = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") ?? "dark"
      setTheme(savedTheme)
    }
  }, []);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      localStorage.setItem("theme", theme)
    }
  }, [theme]);

  return (
    <div class="toggle-switch px-2 w-1/2 max-w-20 h-[40px] sm:h-12 bg-[#C7C7C7] dark:bg-[#2c3e50] shadow-xl transition-all duration-300 rounded-full overflow-hidden flex items-center cursor-pointer" onClick={handleClick}>
      <div class="relative w-full h-8">
        <div class={`absolute switch size-8 bg-white dark:bg-black rounded-full ${theme == 'light' ? 'left-0' : 'left-[calc(100%-2rem)]'} transition-all duration-300 flex items-center justify-center`}>
          <div class="text-2xl">{ theme == 'light' ? '☀️' : '🌙' }</div>
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
