import React from "react";
import { useLocation } from "react-router-dom";
import CartItem from "./CartItem";
import "../css/checkout.scss";

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
          <h2 className="payment-info">Payment Information</h2>
          <form className="checkout-form">
            <div className="checkout-form-container">
              <label htmlFor="Name">Name</label>
              <input required type="text" name="Name"></input>
              <label htmlFor="email">Email Address</label>
              <input required type="email" name="email"></input>
              <label htmlFor="card">Credit Card</label>
              <input required type="text" name="card" pattern="[0-9]*" inputmode="numeric" placeholder="0001 0001 0001 0001"></input>
              <label htmlFor="date">Expire Date</label>
              <input required type="text" name="date" placeholder="01/2025"></input>
              <label htmlFor="security">Security Code</label>
              <input required type="text" name="security" min="1" max="999" placeholder="001"></input>
            </div>
            <button className="btn" type="submit">
              Purchase
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
