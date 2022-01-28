import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./component/Checkout";
import App from "./component/App";
import ThankYou from "./component/ThankYou";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackStage from "./component/BackStage";
import Homepage from "./component/Homepage"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="shop" element={<App />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="thankyou" element={<ThankYou />} />
        <Route path="backstage" element={<BackStage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
