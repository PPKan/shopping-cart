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
  const [cartItems, setCartItems] = useState(sampleCartItems);
  const [toggleCartList, setToggleCartList] = useState(false);
  const [toggleAddEdit, setToggleAddEdit] = useState(false);

  useEffect(() => {
    setToggleCartList(true);
  }, [cartItems]);

  // useEffect(() => {
  //   setToggleAddEdit(true);
  // }, []);

  // const LOCAL_STORAGE_KEY = 'shoppingCart.cart'

  // useEffect(() => {
  //   const cartItemsJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
  //   if (cartItemsJSON != null) setCartItems(JSON.parse(cartItemsJSON))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cartItems))
  // }, [cartItems])

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

  return (
    <>
      <Navbar handleCartDisplay={handleCartDisplay} handleAddDisplay={handleAddDisplay} />
        <AddItemEdit toggleAddEdit={toggleAddEdit} setShopItems={setShopItems}/>
        <CartItemList
          cartItems={cartItems}
          setCartItems={setCartItems}
          toggleCartList={toggleCartList}
        />
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
    price: "20",
    image: moonLamp,
  },
  {
    id: uuidv4(),
    name: "Death Stranding T-shirt",
    price: "10",
    image: dsTShirt,
  },
  {
    id: uuidv4(),
    name: "Fridge",
    price: "2000",
    image: fridge,
  },
];

const sampleCartItems = [
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
];

export default App;
