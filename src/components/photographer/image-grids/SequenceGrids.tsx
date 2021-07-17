import React from 'react';

import { ImageGridsProps, SequenceGridsProps } from './interfaces';
import Huge from './Huge';
import OneTwo from './OneTwo';
import ThreeInRow from './ThreeInRow';

const components = [
  { comp: Huge, needed: 1 },
  { comp: OneTwo, needed: 3 },
  { comp: ThreeInRow, needed: 3 }
];

const SequenceGrids: React.FC<SequenceGridsProps> = ({
  items,
  className = '',
  sequence = [0, 2, 1]
}) => {
  let index = 0;
  return (
    <div className={`w-full h-auto ${className}`}>
      {items.map(({ urls, alt }) => {
        const Chosen: React.FC<ImageGridsProps> = components[sequence[index]].comp;
        index = (index + 1) % sequence.length;
        return <Chosen key={`${alt}+${index}+${JSON.stringify(urls)}`} urls={urls} alt={alt} />;
      })}
    </div>
  );
};

export default SequenceGrids;
