// src/components/Filter.js

import React from "react";

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating"
        onChange={(e) => onRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
