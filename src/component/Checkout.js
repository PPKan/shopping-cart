import React from "react";
import { useLocation } from "react-router-dom";
import "../css/checkout.scss";
import Footer from "./Footer";
import PaymentInfo from "./PaymentInfo";


export default function Checkout(props) {
  const location = useLocation();
  const cartItems = location.state[0];
  const totalPrice = location.state[1];

  return (
    <>
      <div className="checkout-body">
        <div className="checkout-container">
          <h1 className="title">Here to finish your purchase!</h1>
          {cartItems.map((item) => {
            return (
              <>
                <div className="checkout-items-list" key={item.id}>
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="amount">{item.amount} piece(s)</div>
                  <div className="price">{item.amount * item.price}$</div>
                </div>
              </>
            );
          })}
          <h3 className="checkout-total-price">
            Total Price:&nbsp; {totalPrice}$
          </h3>
          <PaymentInfo />
        </div>
        <Footer />
      </div>
    </>
  );
}
