import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LandingSearchBar: React.FC = () => (
  <form className="flex rounded-md w-3/4 md:w-1/2">
    <input
      className="placeholder-white text-xs md:text:base font-bold bg-gray-800 bg-opacity-50 text-white p-2 w-full "
      type="text"
      placeholder="Photos, artists, categories"
      />
    <button className="opacity-50 bg-gray-800 text-white p-2" type="submit">
      <FaSearch />
    </button>
  </form>
);

export default LandingSearchBar;
