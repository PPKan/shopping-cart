import React from "react";
import deleteButton from "../images/deleteButton.png";
import plusButton from "../images/plusButton.png";
import minusButton from "../images/minusButton.png";

export default function CartItem(props) {
  const {
    id,
    name,
    price,
    amount,
    handleCartDelete,
    handleCartAppend,
    handleCartRemove,
  } = props;

  return (
    <>
      <ul className="cart-item">
        <li className="cart-item-name">{name}</li>
        <li className="cart-item-price">{price}$</li>
        <input
          type="image"
          className="btn--minus"
          src={minusButton}
          onClick={() => handleCartRemove(id)}
          alt="minus button"
        />
        <li className="cart-item-amount">{amount}</li>
        <input
          type="image"
          className="btn--plus"
          src={plusButton}
          onClick={() => handleCartAppend(id)}
          alt="plus button"
        />
        <input
          type="image"
          className="btn--delete"
          src={deleteButton}
          onClick={() => handleCartDelete(id)}
          alt="remove button"
        />
      </ul>
    </>
  );
}
