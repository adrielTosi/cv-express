import React from "react";

const AddButton = ({ handleAdd }) => (
  <div className="add-button" data-test="component-add-button">
    <button type="button" onClick={handleAdd}>
      Add <i className="fas fa-plus" />
    </button>
  </div>
);

export default AddButton;
