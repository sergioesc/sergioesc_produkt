import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUserAstronaut,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menu, setMenu] = useState(true);
  return (
    <div className="navbar-container">
      <div className="menu-container centered">
        <div className="menu-inner">
          <Link to="/auth" className="a-nd">
            <FontAwesomeIcon icon={faUserAstronaut} />
          </Link>
        </div>
      </div>
      <div className="logo-container centered">
        <div className="logo-inner">
          <Link to="/" className="a-nd">logo</Link>
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
