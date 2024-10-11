export function Headline(props) {
  console.log(props);

  return (
    <div>
      <h1 className="title">{props.page} page</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/{props.page}.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
    </div>
  );
}
