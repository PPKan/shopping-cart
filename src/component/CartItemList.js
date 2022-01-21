import React, { useRef, useState } from "react";
import CartItem from "./CartItem";

export default function CartItemList(props) {
  const { cartItems, setCartItems, toggleCartList } = props;
  const [, setState] = useState({ something: "changed" });
  const cartRef = useRef();

  function handleCartDelete(id) {
    const found = cartItems.find((item) => {
      if (item.id === id) return item;
      else return null;
    });

    const newCartItems = cartItems;

    const foundIndex = cartItems.indexOf(found);
    if (foundIndex > -1) {
      newCartItems.splice(foundIndex, 1);
    }

    setCartItems(newCartItems);
    setState({ something: "changed" });
  }

  function handleCartAppend(id) {
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
  }

  function handleCartRemove(id) {
    let makeUpdate = false;
    const cartUpdate = cartItems.map((item) => {
      if (item.id === id) {
        if (item.amount === 1) {
          handleCartDelete(id);
        } else {
          makeUpdate = true;
          return { ...item, amount: item.amount - 1 };
        }
      } else return item;
      return item;
    });

    if (makeUpdate) {
      setCartItems(cartUpdate);
    }
  }

  if (toggleCartList) {
    return (
      <>
        <div ref={cartRef} className="cart-item-list">
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
          <button className="btn btn--checkout">Check Out</button>
        </div>
      </>
    );
  } else {
    return null;
  }
}
