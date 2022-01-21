import ItemList from "./ItemList";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <>
      <ItemList />
    </>
  );
}

const cartItems = [
  {
    id: uuidv4(),
    name: "Moon Lamp",
    price: "20",
    image: "../images/moon-lamp.jpg",
  },
];

export default App;
