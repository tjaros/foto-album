import React from 'react';
import { ImageGridsProps } from './models';

/**
 * Display one image that spans the entire row. If no urls
 * are provided, render nothing. */
const Huge: React.FC<ImageGridsProps> = ({ urls, alt, className = '' }) => {
  if (urls.length < 1) return null;
  return (
    <div className={className}>
      <img srcSet={urls[0]} className="w-full h-auto " alt={alt} />
    </div>
  );
};

export default Huge;
