"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.theme = dark ? "dark" : "light"; } catch {}
  };
  return (
    <button onClick={toggle} aria-label="다크모드 전환"
      className="absolute right-6 top-6 rounded-full border border-white/60 bg-white/50 px-3 py-1 text-sm backdrop-blur-md transition hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  );
}
