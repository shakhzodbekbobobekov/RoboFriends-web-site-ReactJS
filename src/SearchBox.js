import React, { useEffect, useRef } from "react";

function SearchBox({ onSearchChange }) {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="pa2">
      <input
        className="pa3 b--green ba bg-light-blue"
        type="search"
        placeholder="search robot..."
        onChange={onSearchChange}
        ref={usernameRef}
      />
    </div>
  );
}

export default SearchBox;
