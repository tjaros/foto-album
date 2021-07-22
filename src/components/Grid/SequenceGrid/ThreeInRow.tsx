import React from 'react';
import { ImageGridsProps } from './models';

/** Display each image in its own column, all images same width and height. */
const ThreeInRow: React.FC<ImageGridsProps> = ({ urls, alt, className }) => {
  if (urls.length < 3) return null;
  return (
    <div className={`grid grid-cols-3 grid-rows-1 ${className}`}>
      <img srcSet={urls[0]} className="object-cover w-full h-full col-span-1 " alt={alt} />
      <img srcSet={urls[1]} className="object-cover w-full h-full col-span-1 " alt={alt} />
      <img srcSet={urls[2]} className="object-cover w-full h-full col-span-1 " alt={alt} />
    </div>
  );
};

export default ThreeInRow;
