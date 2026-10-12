export default function LinkCard({ title, url }: { title: string; url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="block w-full rounded-3xl border border-white/60 bg-white/50 px-6 py-4 text-center font-medium shadow-sm shadow-orange-900/5 backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:bg-white/70 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10">
      {title}
    </a>
  );
}
