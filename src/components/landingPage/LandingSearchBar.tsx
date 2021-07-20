import React from 'react';
import { navigate } from 'gatsby';
import { FaSearch } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const LandingSearchBar: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: unknown): void => {
    navigate('/search?s='.concat(data.search));
  };
  const classString = 'text-white focus:border-transparent font-medium bg-gray-900 rounded-l filter backdrop-blur-lg bg-opacity-70';
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-3/4 rounded-md md:w-1/2 focus:border-white focus:border">
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...register('search')}
        className={`w-full p-3  placeholder-gray-200 ${classString} md:text:base`}
        type="text"
        placeholder="Photos, artists, categories"
        required
      />
      <button
        className="p-3 text-white bg-gray-900 rounded-r bg-opacity-70 filter backdrop-blur-lg "
        type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default LandingSearchBar;
