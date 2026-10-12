import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: { fontFamily: { sans: ["Pretendard Variable", "Pretendard", "system-ui", "sans-serif"] } } },
} satisfies Config;
