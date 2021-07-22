import React from 'react';
import { ImageGridsProps } from './models';
import Huge from './Huge';
import OneTwo from './OneTwo';
import ThreeInRow from './ThreeInRow';

const components = [
  { component: Huge, needed: 1 },
  { component: OneTwo, needed: 3 },
  { component: ThreeInRow, needed: 3 }
];

const defaultSequence = [0, 2, 1, 2, 0, 1, 2];

/**
 * Params for sequence grid.
 *
 * @field items will be split to form individual rows. Use @field sequence
 * to specify the order of Huge (0), OneTwo (1) and ThreeInRow (2) in the final
 * layout. @field className will be applied to outer most container.  */
export interface SequenceGridsProps {
  items: ImageGridsProps[];
  className?: string;
  sequence?: number[];
}

/**
 * Organises photos into row with one or three items.
 */
const SequenceGrids: React.FC<SequenceGridsProps> = ({
  items,
  className = '',
  sequence = defaultSequence
}) => (
  <div className={`w-full h-auto ${className}`}>
    {items.map(({ urls, alt }, index) => {
      const Candidate = components[sequence[index % sequence.length]];
      const Chosen = Candidate.needed <= urls.length ? Candidate.component : Huge;
      // eslint-disable-next-line react/no-array-index-key
      return <Chosen key={`${index}+${JSON.stringify(urls)}`} urls={urls} alt={alt} />;
    })}
  </div>
);

export default SequenceGrids;
