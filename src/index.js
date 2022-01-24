import React from "react";
import ReactDOM from "react-dom";
import Checkout from "./component/Checkout";
import App from "./component/App";
import ThankYou from "./component/ThankYou";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
