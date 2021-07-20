import React from 'react';

const range = (end: number): Array<number> => [...Array(end).keys()];

interface ColumnsLayoutProps {
  nColumns?: number;
  className?: string;
}

/**
 * Organise children into columns with same width.
 */
const ColumnsLayout: React.FC<ColumnsLayoutProps> = ({ nColumns = 3, className = '', children }) => {
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

export default ColumnsLayout;
