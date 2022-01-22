import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddItemEdit(props) {
  const { toggleAddEdit, setShopItems } = props;
  const id = uuidv4();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  function handleAddShopItems() {
      setShopItems(prevItems => {
        return [...prevItems, {id: id, name: name, price: price, image: image}]
      })
      setName(null)
      setPrice(null)
      setImage(null)
  }



  if (toggleAddEdit) {
    return (
      <form className="add-item-edit" onSubmit={(e) => {
        e.preventDefault();
        handleAddShopItems();
      }}>
        <h3>Add Item</h3>
        <div className="form-container">
          <label htmlFor="name">Item Name</label>
          <input required type="text" name="name" value={name || ''} onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="name">Item Price</label>
          <input required type="number" name="name" value={price  || ''} onChange={(e) => setPrice(e.target.value)}/>
          <label htmlFor="image">Item Image</label>
          <input required placeholder="imgur.jpg" type="url" name="image" value={image  || ''} onChange={(e) => setImage(e.target.value)}/>
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    );
  } else {
    return null;
  }
}
