import React from "react";
import Item from "./ShopItem";

export default function ShopItemList(props) {
  const { shopItems, cartItems, setCartItems } = props;

  function handleSetCart(id) {
    let makeUpdate = false;
    const cartUpdate = cartItems.map((item) => {
      if (item.id === id) {
        makeUpdate = true;
        return { ...item, amount: item.amount + 1 };
      } else return item;
    });

    if (makeUpdate) {
      setCartItems(cartUpdate);
      return;
    }

    const found = shopItems.find((item) => {
      if (item.id === id) return item;
      else return null;
    });

    setCartItems((prevItem) => [...prevItem, { ...found, amount: 1 }]);
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
