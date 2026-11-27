import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const STORAGE_KEY = "theme";

const getInitialDark = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "dark";
  } catch {
    return false;
  }
};

const ThemeToggle = () => {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#0c0a09" : "#f5f5f4");
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      /* localStorage mavjud emas */
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Yorug' rejimga o'tish" : "Tungi rejimga o'tish"}
      title={dark ? "Yorug' rejim" : "Tungi rejim"}
      className="fixed top-6 right-6 z-50 grid h-11 w-11 cursor-pointer place-items-center rounded-full bg-white/80 text-green-900 shadow-md ring-1 ring-slate-900/5 backdrop-blur transition duration-300 hover:scale-105 active:scale-95 dark:bg-stone-800/80 dark:text-amber-300 dark:ring-white/10"
    >
      {dark ? <FiSun size={19} /> : <FiMoon size={19} />}
    </button>
  );
};

export default ThemeToggle;
