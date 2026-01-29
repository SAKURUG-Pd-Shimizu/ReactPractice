import clsx from "clsx";
import Content from "./Content";

const contents = [
  {
    id: "jsx",
    title: "JSXについて",
    description: "JSXについて説明します。",
  },
  {
    id: "Components",
    className: "mt-10", // ← 追加
    title: "コンポーネントについて",
    description: "コンポーネントについて説明します。",
  },
  {
    id: "Event",
    className: "mt-10", // ← 追加
    title: "イベントについて",
    description: "イベントについて説明します。",
  },
];

const Main = () => {
  return (
    <main className={clsx("flex-1 mt-10")}>
      {contents.map(content => (
        <Content key={content.id} {...content} />
      ))}
    </main>
  );
};

export default Main;
