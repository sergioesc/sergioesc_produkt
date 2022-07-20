import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
export default function Product() {
  return (
    <div className="product-container">
      <div className="product-inner">
        <div className="product-logo">
          <img src="logoprueba.png" alt="foto"/>
        </div>
        <div className="product-text">
          <div className="text1 bold">Softw Prueba</div>
          <div className="description">
            <p className="text1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.....
            </p>
          </div>
          <div className="category small1">
            Category1
          </div>
        </div>
        <div className="product-vote">
          <FontAwesomeIcon icon={faCaretUp} />
           <p>96</p>
        </div>
      </div>
    </div>
  );
}
