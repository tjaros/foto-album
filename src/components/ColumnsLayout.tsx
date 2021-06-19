import React from 'react';

const range = (end: number): Array<number> => [...Array(end).keys()];

interface ColumnsLayoutProps {
  nColumns?: number;
  className?: string;
}

/**
 * Organise children into columns with same width. 
 * 
 * @param nColumns number of columns to create
 * @param className additional classes to add to the columns wrapper
 * @param children elements to be organized into columns, with flat structure
 */
const ColumnsLayout: React.FC<ColumnsLayoutProps> = ({ nColumns = 3, className = '', children }) => {
  const childrenArray = React.Children.toArray(children);
  const columsChildren = range(nColumns).map((whichColumn) => (
      childrenArray.filter((_, idx) => idx % nColumns === whichColumn)
  ));
  return (
    <div className={`flex flex-row gap-0 sm:gap-1 lg:gap-2 ${className}`}>
        {columsChildren.map((column, i) => <div className="flex-1" key={i}>{column}</div>)}
    </div>
  );
};

export default ColumnsLayout;
