import clsx from "clsx";
import Content from "./Content";

const Main = () => {
  return (
    <main className={clsx("flex-1 mt-10")}>
      <Content
        id="jsx"
        title="JSXについて"
        description="JSXについて説明します。"
      />
      <Content
        id="Components"
        className={clsx("mt-10")}
        title="コンポーネントについて"
        description="コンポーネントについて説明します。"
      />
      <Content
        id="Event"
        className={clsx("mt-10")}
        title="イベントについて"
        description="イベントについて説明します。"
      />
    </main>
  );
};

export default Main;
