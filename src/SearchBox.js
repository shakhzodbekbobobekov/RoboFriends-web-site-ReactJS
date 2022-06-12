import React from "react";

function SearchBox({ searchfieled, onSearchChange }) {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green ba bg-light-blue"
        type="search"
        placeholder="search robot..."
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
