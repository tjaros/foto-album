import React from 'react';
import { navigate } from 'gatsby';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const LandingSearchBar: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown): void => {
    navigate('/search?s='.concat(data.search));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-3/4 rounded-md md:w-1/2">
      <input
        {...register('search')}
        className="w-full p-2 text-xs font-bold text-white placeholder-white bg-gray-800 bg-opacity-50 md:text:base "
        type="text"
        placeholder="Photos, artists, categories"
      />
      <button className="p-2 text-white bg-gray-800 opacity-50" type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default LandingSearchBar;
