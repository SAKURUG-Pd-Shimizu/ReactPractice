import dockerLogo from "./assets/image/docker-mark-blue.svg";
import reactLogo from "./assets/image/react.svg";
import viteLogo from "./assets/image/vite.svg";
import "./assets/styles/App.css";

const App = () => {
  const h2Text = "JSX内にJavaScriptを書く";
  const attributes = {
    id: "JSX-Javascript",
    className: "font-bold mt-6 text-red-500",
  };
  const fontSizeLg = true;
  return (
    <>
      <header>
        <h1>Docker + React + vite</h1>
        <ul className="logoWrap flex justify-center">
          <li>
            <img src={dockerLogo} className="logo" alt="Docker logo" />
          </li>
          <li>
            <img src={reactLogo} className="logo" alt="React logo" />
          </li>
          <li>
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </li>
        </ul>
      </header>
      <main>
        <h2
          {...attributes}
          className={`${attributes.className} ${fontSizeLg ? "text-4xl" : ""}`}
        >
          {h2Text}
        </h2>
      </main>
    </>
  );
};

export default App;
