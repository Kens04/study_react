"use client";

import { Headline } from "@/components/Headline";
import { Links } from "@/components/Links";
import Image from "next/image";

type Props = {
  page: string;
}

export function Main(props: Props) {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Headline page={props.page}>
        <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
          src/app/{props.page}.tsx
        </code>
      </Headline>
      <Links />
    </main>
  );
}
