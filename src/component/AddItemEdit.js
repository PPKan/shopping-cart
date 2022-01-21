import React from "react";

export default function AddItemEdit(props) {
  const { toggleAddEdit } = props;

  if (toggleAddEdit) {
    return (
      <form className="add-item-edit">
        <h3>Add Item</h3>
        <div className="form-container">
          <label htmlFor="name">Item Name</label>
          <input type="text" name="name" />
          <label htmlFor="name">Item Price</label>
          <input type="text" name="name" />
          <label htmlFor="image">Item Image</label>
          <input type="file" name="image" />
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
