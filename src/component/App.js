import ShopItemList from "./ShopItemList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import moonLamp from "../images/moonLamp.jpg";
import fridge from "../images/fridge.jpg";
import dsTShirt from "../images/dsTShirt.jpg";
import "../css/app.scss";
import Navbar from "./Navbar";
import CartItemList from "./CartItemList";

function App() {
  const [shopItems, setShopItems] = useState(sampleShopItems);
  const [cartItems, setCartItems] = useState(sampleCartItems);

  return (
    <>
      {/* <Navbar /> */}
      <CartItemList cartItems={cartItems} />
      <ShopItemList shopItems={shopItems} setCartItems={setCartItems} />
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
  {
    id: uuidv4(),
    name: "Moon Lamp",
    price: "20",
    amount: 1,
  },
  {
    id: uuidv4(),
    name: "Death Stranding T-shirt",
    price: "10",
    amount: 1,
  },
];

export default App;
