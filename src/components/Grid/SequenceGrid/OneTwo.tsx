import React from 'react';
import { ImageGridsProps } from './models';

/**
 * Display three images in a row, such that first one spans 2 columns, and other two
 * are in the third column, each in its row of same height.
 */
const OneTwo: React.FC<ImageGridsProps> = ({ urls, alt, className = '' }) => {
  if (urls.length < 3) return null;
  return (
    <div className={`grid grid-cols-3 grid-rows-8 ${className}`}>
      <img
        srcSet={urls[0]}
        className="object-cover w-full h-full col-span-2 row-span-full"
        alt={alt}
      />
      <div className="flex flex-col col-span-1 row-span-full">
        <img srcSet={urls[1]} className="object-cover w-full h-1/2" alt={alt} />
        <img srcSet={urls[2]} className="object-cover w-full h-1/2" alt={alt} />
      </div>
    </div>
  );
};

export default OneTwo;
