import React from 'react';
import { ImageGridsProps } from './interfaces';

const ThreeInRow: React.FC<ImageGridsProps> = ({ urls, alt }) => (
  <div className="grid grid-cols-3 grid-rows-1">
    <img srcSet={urls[0]} className="col-span-1 w-full h-full object-cover " alt={alt} />
    <img srcSet={urls[1]} className="col-span-1 w-full h-full object-cover " alt={alt} />
    <img srcSet={urls[2]} className="col-span-1 w-full h-full object-cover " alt={alt} />
  </div>
);

export default ThreeInRow;
