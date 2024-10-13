interface LinkItem {
  title: string;
  href: string;
}

export function Links({items, handleReduce}: {items: LinkItem[], handleReduce: () => void}) {

  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <button onClick={handleReduce}>減らす</button>
      {items.map((item) => {
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
