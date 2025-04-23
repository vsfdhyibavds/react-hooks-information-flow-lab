import React from "react";

function Filter({ onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" onChange={onCategoryChange} defaultValue="All" aria-label="Filter items by category">
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
