import React from 'react';
import { range } from 'lodash';

/**
 * Parameters for columns grid.
 *
 * Use @field nColumns to specify number of columns to render data to,
 * and @field className to apply style to outer container. */
interface ColumnsGridProps {
  nColumns?: number;
  className?: string;
}

/**
 * Organise children into columns with the same width.
 *
 * Split its children to groups in row-major order. The y-position within
 * a columns is determined only by the height of elements inside this columns.
 */
const ColumnsGrid: React.FC<ColumnsGridProps> = ({ nColumns = 3, className = '', children }) => {
  const childrenArray = React.Children.toArray(children);
  const columsChildren = range(nColumns).map((whichColumn) => (
    childrenArray.filter((_, idx) => idx % nColumns === whichColumn)
  ));
  return (
    <div className={`flex flex-row gap-0 sm:gap-1 lg:gap-2 md:mr-4 md:ml-4 ${className}`}>
      {columsChildren.map((column, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="flex-1" key={index}>
          {column}
        </div>
      ))}
    </div>
  );
};

export default ColumnsGrid;
