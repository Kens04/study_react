import styles from "../../css/styles.module.css";

type Props = {
  page: string;
  children: React.ReactNode;
};

export const Headline = (props: Props) => {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page</h1>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2">Get started by editing {props.children}.</li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </div>
  );
}
