import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <div
      className={`${
        isExpanded ? 'bg-white text-black' : 'bg-transparent text-white'
      } flex rounded-md`}>
      <label htmlFor="search-bar" className="text-lg text-white lg:text-2xl">
        Search
      </label>
      <input
        id="search-bar"
        type="text"
        className={`${isExpanded ? 'block' : 'hidden'} w-64 px-4 bg-transparent`}
        placeholder="Type your search"
      />
      <button
        type="button"
        onClick={() => toggleExpansion(!isExpanded)}
        className="flex items-center px-3 py-2">
        <FaSearch title="Search models and photographers" />
      </button>
    </div>
  );
};

export default SearchBar;
