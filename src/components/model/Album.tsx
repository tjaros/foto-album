import React from 'react';
import { FaUserLock } from 'react-icons/fa';
import { Link } from 'gatsby';

export interface AlbumProps {
  name: string;
  photos: {
    url: string;
  };
  locked: boolean;
}

const Album: React.FC<AlbumProps> = ({ name, photos, locked }) => (
  <div
    className={'relative flex flex-col p-2 m-2 '.concat(
      locked ? 'cursor-not-allowed ' : 'hover:shadow-lg'
    )}>
    {locked ? (
      <div className="absolute z-30 flex flex-col items-center justify-center w-full -ml-2 h-96 backdrop-brightness-50 backdrop-filter backdrop-blur-md">
        <span className="text-6xl font-bold text-white">
          <FaUserLock />
        </span>
        <span className="my-5 text-2xl font-bold text-white">Register to view the content</span>
        <Link to="/register">
          <button
            type="button"
            className="p-3 px-5 text-2xl text-white bg-black border-4 border-white rounded-md">
            Register
          </button>
        </Link>
      </div>
    ) : (
      {}
    )}

    <img
      className="z-20 object-cover w-full transition-all rounded-sm h-96 "
      srcSet={photos[0].url}
      alt={`From album: ${name}`}
    />
    <span className="py-2 text-3xl font-medium">{name}</span>
  </div>
);

export default Album;
