import React from "react";
import Item from "./ShopItem";

export default function ShopItemList(props) {
  const { shopItems, setCartItems } = props;

  function handleSetCart(id) {
    setCartItems((prevItem) => {
      const found = shopItems.find((item) => {
        if (item.id === id) return item;
      });
      return [...prevItem, found]
    });
  }

  return (
    <div className="items-container">
      {shopItems.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            handleSetCart={handleSetCart}
          />
        );
      })}
    </div>
  );
}
