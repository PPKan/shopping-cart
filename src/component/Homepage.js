import React from "react";
import Navbar from "./Navbar";
import "../css/home.scss"
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-intro">
        <div>Peter Kan Official Merch</div>
        <Link className="home-link" to="/shop"><button>START SHOPPING</button></Link>
      </div>
    </div>
  );
}
