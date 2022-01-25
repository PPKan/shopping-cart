import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../images/shoppingCart.png";

export default function Navbar(props) {
  const { stage, handleCartDisplay, addNewItem } = props;

  return (
    <nav>
      {stage === "back" ? (
        <>
          <button className="btn" onClick={() => addNewItem()}>
            Add Items
          </button>
          <Link to="/">
            <button className="btn">Front-stage</button>
          </Link>
        </>
      ) : null}
      {stage === "front" ? (
        <>
          <Link to="/backstage">
            <button className="btn">Back-stage</button>
          </Link>
          <input
            className="cart-button"
            type="image"
            src={shoppingCart}
            onClick={() => handleCartDisplay()}
            alt="shopping-cart button"
          ></input>
        </>
      ) : null}
      {stage === "checkout" ? (
        <>
          <Link to="/">
            <button className="btn">Back to Front</button>
          </Link>
        </>
      ) : null}
    </nav>
  );
}
