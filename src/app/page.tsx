import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";

const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요.",
  image: "/dali.png",
};
const links = [
  { title: "🐙 깃허브", url: "https://github.com/" },
  { title: "📝 블로그", url: "https://blog.naver.com/" },
  { title: "✉️ 이메일", url: "mailto:달이@naver.com" },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-md flex-col items-center px-6 py-20">
      <ThemeToggle />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profile.image} alt={profile.name} className="h-28 w-28 rounded-full bg-white/60 object-cover shadow-xl shadow-orange-900/15 ring-4 ring-white/70 dark:ring-white/10" />
      <h1 className="mt-6 text-2xl font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 text-balance text-center text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{profile.bio}</p>
      <div className="mt-10 flex w-full flex-col gap-4">
        {links.map((l) => <LinkCard key={l.url} {...l} />)}
      </div>
    </main>
  );
}
