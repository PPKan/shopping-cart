import React from "react";
import shoppingCart from "../images/shoppingCart.png";

export default function Navbar(props) {
  const { handleCartDisplay, handleAddDisplay } = props;

  return (
    <nav>
      <button className="btn btn--add-item" onClick={() => handleAddDisplay()}>
        Add Item
      </button>
      <input
        className="cart-button"
        type="image"
        src={shoppingCart}
        onClick={() => handleCartDisplay()}
        alt="shopping-cart button"
      ></input>
    </nav>
  );
}
