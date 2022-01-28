import React from "react";

export default function Navbar() {

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
