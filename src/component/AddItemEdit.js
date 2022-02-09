import React from "react";

export default function AddItemEdit(props) {
  const { editItem, handleItemChange, setEditItemId } = props;

  function handleChange(changes) {
    handleItemChange(editItem.id, { ...editItem, ...changes });
  }

  function handleFile(changes, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(changes);
    reader.onload = () => {
      callback({ image: reader.result });
    };
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
          onChange={(e) => handleChange({ price: e.target.value })}
          min="0"
        />
        <label htmlFor="image">Image</label>
        <input
          accept="image/png, image/jpeg"
          type="file"
          onChange={(e) => {
            handleFile(e.target.files[0], handleChange);
          }}
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}
