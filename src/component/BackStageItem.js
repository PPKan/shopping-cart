import React from "react";
import deleteButton from "../images/deleteButton.png";
import editButton from "../images/editButton.png"

export default function BackStageItem(props) {
  const { item, handleEditItemId, handleItemRemove } = props;
  return (
    <>
      <div className="backstage-item-container" key={item.id}>
        <div>
          <img src={item.image} alt="" />
        </div>
        <div className="name">{item.name}</div>
        <div className="amount">{item.price}$</div>
        <input type="image" src={editButton} alt="" onClick={() => handleEditItemId(item.id)}/>
        <input type="image" src={deleteButton} alt="" onClick={() => handleItemRemove(item.id)} />
      </div>
    </>
  );
}
