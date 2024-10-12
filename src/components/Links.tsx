const ITEMS = [
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Deploy now1",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Read our docs2",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Deploy now3",
  },
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    title: "Read our docs4",
  },
];

export function Links() {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      {ITEMS.map((item) => {
        return (
          <a
            key={item.href}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        );
      })}
    </div>
  );
}
