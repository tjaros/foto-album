import React from 'react';

interface AlbumProps {
  name: string;
  photos: {
    id: number;
    url: string;
  }[];
}

const Album: React.FC<AlbumProps> = ({ name, photos }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-3 grid-rows-2">
        <img className="col-span-2 row-span-2 h-96 w-full object-cover" src={photos[0]?.url} />
        <div className="col-span-1 row-span-2 ml-2">
          <img className="h-48 w-full object-cover pb-1" src={photos[1]?.url} />
          <img className="h-48 w-full object-cover pt-1" src={photos[2]?.url} />
        </div>
      </div>
      <span className="text-3xl font-medium pb-2">{name}</span>
      <span className="text-1xl pb-2">{`${photos.length} Photos`}</span>
    </div>
  );
};

export default Album;
