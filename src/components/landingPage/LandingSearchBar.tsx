import React from 'react';
import { FaSearch } from 'react-icons/fa';

const LandingSearchBar: React.FC = () => {
  return (
    <form className="flex rounded-md w-1/2 ">
      <input className="placeholder-white font-bold bg-gray-800 bg-opacity-50 text-white p-2 w-full " type="text" placeholder="Photos, artists, categories" />
        <button className="opacity-50 bg-gray-800 text-white p-2">
          <FaSearch />
        </button>
    </form>
  )
};

export default LandingSearchBar;
