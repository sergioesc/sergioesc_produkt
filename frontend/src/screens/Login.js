import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Produkt } from "../Produkt.js";
import axios from "axios";
import { toast } from "react-toastify";
export default function Login() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { state, dispatch: ctxDispatch } = useContext(Produkt);
  const { userInfo } = state;
  const [authMode, setAuthMode] = useState("signin");
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/signin",
        {
          email,
          password,
        }
      );
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (err) {
      toast.error("error");
    }
  };
  const handldeSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/users/signup",
        {
          name,
          email,
          password,
        }
      );
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      toast.error("error");
    }
  };
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmitLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Iniciar Sesión</h3>
            <div className="text-center">
              No tienes una cuenta?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Registrate
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Correo electrónico</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Ingrese su correo"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>
            <p className="text-center mt-2">
              <Link to="/">Olvidaste la contraseña?</Link>
            </p>
          </div>
        </form>
      </div>
    );
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handldeSubmitRegister}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Registrarse</h3>
          <div className="text-center">
            Ya tienes una cuenta?
            <span className="link-primary" onClick={changeAuthMode}>
              Iniciar Sesión
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Nombre y Apellido</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Ej.: Dona Telo"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingrese su correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese su contraseña"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Registrarse
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
