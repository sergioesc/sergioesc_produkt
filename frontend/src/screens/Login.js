import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
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
              />
            </div>
            <div className="form-group mt-3">
              <label>Contraseña</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Ingrese su contraseña"
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
      <form className="Auth-form">
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
            />
          </div>
          <div className="form-group mt-3">
            <label>Correo electrónico</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div className="form-group mt-3">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Ingrese su contraseña"
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
