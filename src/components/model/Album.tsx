import React from 'react';

export interface AlbumProps {
  name: string;
  photos: {
    url: string;
  }[];
}

const Album: React.FC<AlbumProps> = ({ name, photos }) => (
  <div className="flex flex-col">
    <img
      className="z-20 object-cover w-full h-96"
      srcSet={photos[0].url}
      alt={`From album: ${name}`}
    />
    <span className="pb-2 text-3xl font-medium">{name}</span>
  </div>
);

export default Album;
