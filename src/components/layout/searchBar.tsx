import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link } from 'gatsby';

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any): void => console.log(data);

  return (
    <div
      className={`${
        isExpanded ? `bg-white text-black` : `bg-transparent text-white`
      } flex rounded-md`}>
      <label htmlFor="header-search-bar" className="hidden text-lg text-white lg:text-2xl">
        Search
      </label>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row">
        <input
          {...register('header-search-bar')}
          type="text"
          className={`${isExpanded ? `flex` : `hidden`} w-64 px-4 bg-transparent`}
          placeholder="Type your search"
        />
        <button
          type="submit"
          className={`${isExpanded ? `flex` : `hidden`} items-center px-3 py-2`}>
          <FaSearch title="Search models and photographers" />
        </button>
      </form>
      <button
        onClick={() => setIsExpanded(true)}
        className={`${isExpanded ? `hidden` : `hidden md:flex`} items-center px-3 py-2`}>
        <FaSearch title="Search models and photographers" />
      </button>
      <Link to="/search" className="md:hidden items-center px-3 py-2 no-underline text-white">
        <FaSearch title="Search models and photographers" />
      </Link>
    </div>
  );
};

export default SearchBar;
