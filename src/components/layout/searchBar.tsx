import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div className={`${isExpanded ? `bg-white text-black` : `bg-transparent text-white`} flex rounded-md`}>
      <label
        htmlFor="header-search-bar"
        className="hidden"
      >
        Search
        </label>
      <input
        type="text"
        className={`${isExpanded ? `block` : `hidden`
          } w-64 px-4 bg-transparent`}
        placeholder="Type your search" />
      <button
        onClick={() => toggleExpansion(!isExpanded)}
        className="flex items-center px-3 py-2"
      >
        <FaSearch title="Search models and photographers" />
      </button>
    </div>
  );
};

export default SearchBar;
