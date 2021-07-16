import React from 'react';
import { ImageGridsProps } from './interfaces';

const Huge: React.FC<ImageGridsProps> = ({ urls, alt }) => (
  <img srcSet={urls[0]} className="w-full h-auto " alt={alt} />
);

export default Huge;
