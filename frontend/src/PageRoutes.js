import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import ProductScreen from "./screens/ProductScreen.js";
import Home from "./screens/Home.js";
import Login from "./screens/Login.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import MyProfile from "./screens/MyProfile.js";

function PageRoutes() {
  return (
    <div className="page-routes">
      <BrowserRouter>
      <ToastContainer position="bottom-center" limit={5} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/miperfil/:id" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default PageRoutes;
