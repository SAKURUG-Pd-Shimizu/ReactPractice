import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";

const RootRouter = () => (
  <>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </>
);

export default RootRouter;
