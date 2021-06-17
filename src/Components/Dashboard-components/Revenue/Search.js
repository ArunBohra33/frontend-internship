import React from "react";

import symbols from "../../../assets/svgs/symbols.svg";

const Search = () => {
  return (
    <div className="search">
      <svg className="search-icon">
        <use href={symbols + "#icon-search-thin"}></use>
      </svg>
    </div>
  );
};

export default Search;
