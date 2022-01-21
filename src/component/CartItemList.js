import React from "react";
import CartItem from "./CartItem";

export default function CartItemList(props) {
  const { cartItems } = props;

  return (
    <div className="cart-item-list">
      <h3>Shopping Cart</h3>
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
          />
        );
      })}
      <button className="btn btn--checkout">Check Out</button>
    </div>
  );
}
