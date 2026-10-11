import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";

// 더미 값: 실제 내용·사진은 나중에 교체
const profile = { name: "김클로", bio: "세계 최강 바이브코더", image: "https://i.pravatar.cc/224?img=12" };
const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-md flex-col items-center px-4 py-16">
      <ThemeToggle />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profile.image} alt={profile.name} className="h-28 w-28 rounded-full object-cover" />
      <h1 className="mt-4 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-neutral-500 dark:text-neutral-400">{profile.bio}</p>
      <div className="mt-8 flex w-full flex-col gap-3">
        {links.map((l) => <LinkCard key={l.url} {...l} />)}
      </div>
    </main>
  );
}
