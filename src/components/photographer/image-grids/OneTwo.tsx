import React from 'react';
import { ImageGridsProps } from './interfaces';

const OneTwo: React.FC<ImageGridsProps> = ({ urls, alt }) => (
  <div className="grid grid-cols-3 grid-rows-8">
    <img srcSet={urls[0]} className="col-span-2 row-span-full w-full h-full object-cover" alt={alt} />
    <div className="flex flex-col col-span-1 row-span-full">
      <img
        srcSet={urls[1]}
        className="h-1/2 w-full object-cover"
        alt={alt}
      />
      <img
        srcSet={urls[2]}
        className="h-1/2 w-full object-cover"
        alt={alt}
      />
    </div>
  </div>
);

export default OneTwo;
