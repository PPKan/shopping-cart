import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar">
      <ul className="navbar-container">
        <li>
          <Link className="nav__link" to="/">Home</Link>
        </li>
        <label>|</label>
        <li>
          <Link className="nav__link" to="/shop">Shop</Link>
        </li>
        <label>|</label>
        <li>
          <Link className="nav__link" to="/backstage">Backstage</Link>
        </li>
      </ul>
    </nav>
  );
}
