import React, { useState, useEffect } from "react";
import BackStageItem from "./BackStageItem";
import "../css/backstage-item.scss";
import AddItemEdit from "./AddItemEdit";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";

export default function BackStage() {
  const [shopItems, setShopItems] = useState([]);
  const [editItemId, setEditItemId] = useState();
  const [removeItemId, setRemoveItemId] = useState();
  const editItem = shopItems.find((item) => {
    return item.id === editItemId;
  });
  const stage = "back";

  const LOCAL_STORAGE_KEY_LIST = "shoppingList.list";

  useEffect(() => {
    const shopItemsJSON = localStorage.getItem(LOCAL_STORAGE_KEY_LIST);
    if (shopItemsJSON != null) setShopItems(JSON.parse(shopItemsJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LIST, JSON.stringify(shopItems));
  }, [shopItems]);

  function handleItemChange(id, item) {
    const newItems = [...shopItems];
    const index = newItems.findIndex((i) => i.id === id);
    newItems[index] = item;
    setShopItems(newItems);
  }

  function handleItemRemove(id) {
    const newItems = [...shopItems];
    const index = newItems.findIndex((i) => i.id === id);
    newItems.splice(index, 1)
    setShopItems(newItems)
  }

  function handleEditItemId(id) {
    setEditItemId(id);
  }

  function addNewItem() {
    const newItem =   {
      id: uuidv4(),
      name: "",
      price: 1,
      image: null,
    }

    const newItems = shopItems;
    newItems.push(newItem)
    console.log(newItems)
    setShopItems(newItems);
    setEditItemId(newItem.id);
  }

  return (
    <>
      <div className="backstage-container">
        {editItem && (
          <AddItemEdit
            editItem={editItem}
            handleItemChange={handleItemChange}
            setEditItemId={setEditItemId}
          />
        )}
        <Navbar stage={stage} addNewItem={addNewItem}  />
        <div className="backstage-item-list">
          {shopItems.map((item) => {
            return (
              <BackStageItem key={item.id} item={item} handleEditItemId={handleEditItemId} handleItemRemove={handleItemRemove} />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
