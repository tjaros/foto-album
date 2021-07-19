import React from 'react';

interface TableGridProps {
  className?: string;
}

const TableGrid: React.FC<TableGridProps> = ({ children, className = 'grid-cols-4 gap-2' }) => (
  <div className={`grid grid-flow-row ${className}`}>
    {children}
  </div>
);

export default TableGrid;
