import React from 'react';

export interface AlbumProps {
  name: string;
  photos: {
    url: string;
  }[];
}

const Album: React.FC<AlbumProps> = ({ name, photos }) => {
  return(
  <div className="flex flex-col">
    <img className="w-full h-96 object-cover" srcSet={photos[0].url}/>
    <span className="text-3xl font-medium pb-2">{name}</span>
  </div>
);
  }

export default Album;
