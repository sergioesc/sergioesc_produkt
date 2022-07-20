import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./screens/Home.js";
function PageRoutes() {
  return (
    <div className="page-routes">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PageRoutes;
