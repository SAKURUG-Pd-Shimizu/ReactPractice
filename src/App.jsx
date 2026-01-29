import Header from "./components/Header";
import Main from "./components/Main";
import Hoge from "./components/Footer";
import "./assets/styles/App.css";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Main />

      <Hoge />
    </div>
  );
};

export default App;
