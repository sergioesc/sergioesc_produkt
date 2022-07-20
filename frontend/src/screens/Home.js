import React from "react";
import Product from "../components/Product.js";
export default function Home() {
  return (
    <div>
      <div>
        <h2 className="title centered">¿Que habrá para descubrir hoy? 🧐</h2>
      </div>
      <div className="text1 centered">
        <select className="select-content">
          <option value="value1" selected>
            Recomendado
          </option>
          <option value="value2">Más recientes</option>
        </select>
      </div>
      <div>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
