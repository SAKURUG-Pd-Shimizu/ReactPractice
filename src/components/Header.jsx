import dockerLogo from "../assets/image/docker-mark-blue.svg";
import reactLogo from "../assets/image/react.svg";
import viteLogo from "../assets/image/vite.svg";

import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <header>
      <ul className="logoWrap flex justify-center gap-1">
        <li>
          <img src={dockerLogo} className="logo h-40" alt="Docker logo" />
        </li>
        <li>
          <img src={reactLogo} className="logo h-40" alt="React logo" />
        </li>
        <li>
          <img src={viteLogo} className="logo h-40" alt="Vite logo" />
        </li>
      </ul>
      <h1 className="text-6xl">Docker + React + vite</h1>
      <Navigation />
    </header>
  );
};

export default Header;
