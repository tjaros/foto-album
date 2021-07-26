import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';

export const SearchIcon = FaSearch;

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: { search: string }): void => {
    navigate(`/search?s=${data.search}`);
  };

  return (
    <div
      className={`${
        isExpanded ? 'bg-white text-black' : 'bg-transparent text-white'
      } flex rounded-md ${className}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
        <label htmlFor="search" className="hidden text-lg text-white lg:text-2xl">
          Search
        </label>
        <input
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('search')}
          type="text"
          className={`${isExpanded ? 'flex' : 'hidden'} w-64 px-4 bg-transparent`}
          placeholder="Type your search"
          required
        />
        <button
          type="submit"
          className={`${isExpanded ? 'flex' : 'hidden'} items-center px-3 py-2`}>
          <SearchIcon title="Search models and photographers" />
        </button>
      </form>
      <button
        type="button"
        onClick={() => setIsExpanded(true)}
        className={`${isExpanded ? 'hidden' : 'hidden md:flex'} items-center px-3 py-2`}>
        <SearchIcon title="Open search bar." />
      </button>
    </div>
  );
};

export default SearchBar;
