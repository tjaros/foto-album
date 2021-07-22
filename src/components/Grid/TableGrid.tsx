import React from 'react';

/**
 * Params for TableGrid.
 *
 * Use @field className to apply styles
 * to outer most container and to specify number of columns by `grid-cols-M`
 * and elements gap using `gap-N`. Default is 4 columns and gap 2.
 */
interface TableGridProps {
  className?: string;
}

/**
 * Organize children into table grid, with column having same height.
 *
 * Splits children based on row-major order and the resulting rows have
 * height of the highest element within this row.
 */
const TableGrid: React.FC<TableGridProps> = ({ children, className = 'grid-cols-4 gap-2' }) => (
  <div className={`grid grid-flow-row ${className}`}>{children}</div>
);

export default TableGrid;
