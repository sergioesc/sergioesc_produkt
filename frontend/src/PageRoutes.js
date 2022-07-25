import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import ProductScreen from "./screens/ProductScreen.js";
import Home from "./screens/Home.js";
import Login from "./screens/Login.js";
import "bootstrap/dist/css/bootstrap.min.css";

function PageRoutes() {
  return (
    <div className="page-routes">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/auth" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PageRoutes;
