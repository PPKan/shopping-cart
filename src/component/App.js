import ShopItemList from "./ShopItemList";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import moonLamp from "../images/moonLamp.jpg";
import fridge from "../images/fridge.jpg";
import dsTShirt from "../images/dsTShirt.jpg";
import "../css/app.scss";
import Navbar from "./Navbar";
import CartItemList from "./CartItemList";
import AddItemEdit from "./AddItemEdit";

function App() {
  const [shopItems, setShopItems] = useState(sampleShopItems);
  const [cartItems, setCartItems] = useState([]);
  const [toggleCartList, setToggleCartList] = useState(false);
  const [toggleAddEdit, setToggleAddEdit] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [, setValue] = useState(0); // integer state

  useEffect(() => {
    setToggleCartList(true);
    handleUpdateTotalPrice(cartItems);
  }, [cartItems]);

  // useEffect(() => {
  //   setToggleAddEdit(true);
  // }, []);

  const LOCAL_STORAGE_KEY_CART = "shoppingCart.cart";
  const LOCAL_STORAGE_KEY_LIST = "shoppingList.list";

  useEffect(() => {
    const cartItemsJSON = localStorage.getItem(LOCAL_STORAGE_KEY_CART);
    if (cartItemsJSON != null) setCartItems(JSON.parse(cartItemsJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_CART, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const shopItemsJSON = localStorage.getItem(LOCAL_STORAGE_KEY_LIST);
    if (shopItemsJSON != null) setShopItems(JSON.parse(shopItemsJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LIST, JSON.stringify(shopItems));
  }, [shopItems]);

  function handleCartDisplay(toggle) {
    if (toggleCartList) {
      setToggleCartList(false);
    } else {
      setToggleCartList(true);
    }
  }

  function handleAddDisplay(toggle) {
    if (toggleAddEdit) {
      setToggleAddEdit(false);
    } else {
      setToggleAddEdit(true);
    }
  }

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
    handleUpdateTotalPrice(newCartItems);
    setValue((value) => value + 1);
    return;
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

  function handleUpdateTotalPrice(cart) {
    if (cart.length === 0) return setTotalPrice(0);

    let total = 0;

    cart.forEach((item) => {
      total += item.amount * item.price;
    });

    setTotalPrice(total);
  }

  return (
    <>
      <Navbar
        handleCartDisplay={handleCartDisplay}
        handleAddDisplay={handleAddDisplay}
      />
      <AddItemEdit toggleAddEdit={toggleAddEdit} setShopItems={setShopItems} />
      <CartItemList
        cartItems={cartItems}
        toggleCartList={toggleCartList}
        handleCartAppend={handleCartAppend}
        handleCartDelete={handleCartDelete}
        handleCartRemove={handleCartRemove}
        totalPrice={totalPrice}
      />
      <header>
        <h1>PP's Shopping Center</h1>
        <h4>Welcome to sell or buy items here!</h4>
      </header>
      <ShopItemList
        shopItems={shopItems}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </>
  );
}

const sampleShopItems = [
  {
    id: uuidv4(),
    name: "Moon Lamp",
    price: 20,
    image: moonLamp,
  },
  {
    id: uuidv4(),
    name: "Death Stranding T-shirt",
    price: 10,
    image: dsTShirt,
  },
  {
    id: uuidv4(),
    name: "Fridge",
    price: 2000,
    image: fridge,
  },
];

// const sampleCartItems = [
// {
//   id: sampleShopItems[0].id,
//   name: "Moon Lamp",
//   price: "20",
//   amount: 1,
// },
// {
//   id: sampleShopItems[1].id,
//   name: "Death Stranding T-shirt",
//   price: "10",
//   amount: 1,
// },
// ];

export default App;
