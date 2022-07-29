import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserAstronaut,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Auth } from "../Reducers.js";

export default function Navbar() {
  const { state, dispatch: ctxDispatch } = useContext(Auth);
  const { userInfo } = state;
  const [existUser, setExistUser] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  useEffect(() => {
    if (userInfo) {
      setExistUser(true);
    } else {
      setExistUser(false);
    }
  }, [setExistUser, userInfo]);

  const [menu, setMenu] = useState(true);
  return (
    <div className="navbar-container">
      <div className="menu-container centered">
        <div className="menu-inner">
          {existUser ? (
            <div>
              <FontAwesomeIcon
                icon={faUserAstronaut}
                onClick={() => {
                  setShowPopup(!showPopup);
                }}
              />
              {showPopup ? (
                <div className="popup-userExist">
                  <ul>
                    <li
                      onClick={() => {
                        setShowPopup(!showPopup);
                      }}
                    >
                      <Link to={`/miperfil/${userInfo._id}`} className="a-nd">
                        Mi perfil
                      </Link>
                    </li>
                    <li onClick={signoutHandler}>Cerrar sesión</li>
                  </ul>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ) : (
            <div>
              <Link to="/auth" className="a-nd">
                <FontAwesomeIcon icon={faUserAstronaut} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="logo-container centered">
        <div className="logo-inner">
          <Link to="/" className="a-nd">
            logo
          </Link>
        </div>
      </div>
      <div className="user-container centered">
        <div className="user-inner">
          <FontAwesomeIcon
            icon={menu ? faBars : faXmark}
            onClick={() => setMenu(!menu)}
          />
        </div>
      </div>
      <div>
        <ul className={menu ? "menu-list-close" : "menu-list"}>
          <div className="search-bar">
            <input type="text" placeholder="🔍" />
          </div>
          <li>Productos</li>
          <li>Comunidad</li>
          <li>Herramientas</li>
          <li>Trabajos</li>
          <li>Publicar un trabajo</li>
          <li>¿Como publicar un producto?</li>
          <li>Sobre nosotros</li>
          <li>Embajadores</li>
          <li>Carreras</li>
          <li>Preguntas frecuentes</li>
          <li>Promocionar producto</li>
        </ul>
      </div>
    </div>
  );
}
