import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { Link, navigate } from 'gatsby';

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data: unknown): void => {
    navigate('/search?s='.concat(data.search));
  };

  return (
    <div
      className={`${
        isExpanded ? 'bg-white text-black' : 'bg-transparent text-white'
      } flex rounded-md`}>
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
          <FaSearch title="Search models and photographers" />
        </button>
      </form>
      <button
        type="button"
        onClick={() => setIsExpanded(true)}
        className={`${isExpanded ? 'hidden' : 'hidden md:flex'} items-center px-3 py-2`}>
        <FaSearch title="Search models and photographers" />
      </button>
      <Link to="/search" className="items-center px-3 py-2 text-white no-underline md:hidden">
        <FaSearch title="Search models and photographers" />
      </Link>
    </div>
  );
};

export default SearchBar;
