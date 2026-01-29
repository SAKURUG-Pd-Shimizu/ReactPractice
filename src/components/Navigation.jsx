import clsx from "clsx";

const Navigation = () => {
  return (
    <nav className="mt-10">
      <ul className={clsx("flex gap-1 justify-center items-center")}>
        <li>
          <a href="#JSX-01">JSXについて</a>
        </li>
        <li>
          <a href="#components-01">JSX</a>
        </li>
        <li>
          <a href="#event-01">イベントについて</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
