import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "링크나무" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 첫 페인트 전에 저장된 테마 적용 (깜빡임 방지) */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.theme==="dark")document.documentElement.classList.add("dark")}catch(e){}` }} />
      </head>
      <body className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">{children}</body>
    </html>
  );
}
