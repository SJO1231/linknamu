import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "링크나무" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* 첫 페인트 전에 저장된 테마 적용 (깜빡임 방지) */}
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.theme==="dark")document.documentElement.classList.add("dark")}catch(e){}` }} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-[#fffaf0] to-[#ffe0cc] bg-fixed font-sans text-neutral-900 antialiased dark:from-neutral-950 dark:to-stone-900 dark:text-neutral-100">{children}</body>
    </html>
  );
}
