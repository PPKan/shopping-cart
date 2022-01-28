import React from "react";
import Navbar from "./Navbar";
import "../css/home.scss"

export default function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-intro">
        <div>Peter Kan Official Merch</div>
        <a href="/shop"><button>START SHOPPING</button></a>
      </div>
    </div>
  );
}
