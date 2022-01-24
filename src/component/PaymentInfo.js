import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentInfo() {

  let navigate = useNavigate();

  return (
    <>
      <h2 className="payment-info">Payment Information</h2>
      <form
        className="payment-form"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/thankyou")
        }}
      >
        <div className="payment-form-container">
          <label htmlFor="Name">Name</label>
          <input required type="text" name="Name"></input>
          <label htmlFor="email">Email Address</label>
          <input required type="email" name="email"></input>
          <label htmlFor="card">Credit Card</label>
          <input
            required
            type="text"
            name="card"
            pattern="[0-9]*"
            inputMode="numeric"
            placeholder="0001 0001 0001 0001"
          ></input>
          <label htmlFor="date">Expire Date</label>
          <input required type="text" name="date" placeholder="01/2025"></input>
          <label htmlFor="security">Security Code</label>
          <input
            required
            type="text"
            name="security"
            min="1"
            max="999"
            placeholder="001"
          ></input>
        </div>
        <button className="btn" type="submit">
          Purchase
        </button>
      </form>
    </>
  );
}
