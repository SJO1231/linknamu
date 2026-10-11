"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.theme = dark ? "dark" : "light"; } catch {}
  };
  return (
    <button onClick={toggle} aria-label="다크모드 전환"
      className="absolute right-4 top-4 rounded-full border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700">
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  );
}
