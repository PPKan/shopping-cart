import React from "react";

export default function ShopItem(props) {
  const { id, name, price, image, handleSetCart } = props;

  return (
    <div className="item-container">
      <img className="item-image" src={image} alt="" />
      <div className="item-name">{name}</div>
      <div className="item-price">{price}$</div>
      <button
        name={id}
        className="btn item-button btn--add-cart"
        onClick={(e) => {
          handleSetCart(e.target.name);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
