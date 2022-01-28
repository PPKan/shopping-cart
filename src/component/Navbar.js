import React from "react";
import { Link } from "react-router-dom";
import shoppingCart from "../images/shoppingCart.png";

export default function Navbar(props) {
  const { stage, handleCartDisplay, addNewItem } = props;

  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <li>
          <a className="nav__link" href="/">Home</a>
        </li>
        <label>|</label>
        <li>
          <a className="nav__link" href="/shop">Shop</a>
        </li>
        <label>|</label>
        <li>
          <a className="nav__link" href="/backstage">Backstage</a>
        </li>
      </ul>
    </nav>
  );
}
