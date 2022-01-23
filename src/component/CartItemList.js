import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

export default function CartItemList(props) {
  const {
    cartItems,
    toggleCartList,
    handleCartAppend,
    handleCartDelete,
    handleCartRemove,
    totalPrice,
  } = props;
  
  const checkoutState = [cartItems, totalPrice]

  if (toggleCartList) {
    return (
      <>
        <div className="cart-item-list">
          <h3>Shopping Cart</h3>
          {cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                handleCartDelete={handleCartDelete}
                handleCartAppend={handleCartAppend}
                handleCartRemove={handleCartRemove}
              />
            );
          })}
          <div className="total-price">
            <div className="total-price-text">Total Price:</div>
            <div className="total-price-value">{totalPrice}$</div>
          </div>
          <button className="btn btn--checkout">
            <Link to="/checkout" className="link" state={checkoutState}>Check Out</Link>
          </button>
        </div>
      </>
    );
  } else {
    return null;
  }
}
