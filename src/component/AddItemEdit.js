import React from "react";


export default function AddItemEdit(props) {
  const { editItem, handleItemChange, setEditItemId } = props;

  function handleChange(changes) {
    handleItemChange(editItem.id, { ...editItem, ...changes });
  }

  return (
    <form
      className="add-item-edit"
      onSubmit={(e) => {
        e.preventDefault();
        setEditItemId();
      }}
    >
      <h3>Item</h3>
      <div className="form-container">
        <label htmlFor="name">Item Name</label>
        <input
          required
          type="text"
          name="name"
          value={editItem.name || ""}
          onChange={(e) => handleChange({ name: e.target.value })}
        />
        <label htmlFor="price">Price</label>
        <input
          required
          type="number"
          name="price"
          value={editItem.price || ""}
          onChange={(e) => handleChange({price: e.target.value})}
          min="0"
        />
        {/* <label htmlFor="image">Item Image</label>
        <input
          required
          placeholder="imgur.jpg"
          type="url"
          name="image"
          value={editItem.image || ""}
          onChange={(e) => handleChange(e.target.value)}
        /> */}
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
