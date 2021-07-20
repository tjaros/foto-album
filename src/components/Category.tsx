import { Link } from 'gatsby';
import React from 'react';
import { TableGrid } from './grid';

interface CategoryProps {
  className?: string;
  categoryName: string;
}

/** Display content of one category. Use children to pass photos/other elements.
 * TODO: create connection to search for all models.
 */
const Category: React.FC<CategoryProps> = ({ children, className, categoryName }) => (
  <div className={`flex flex-col items-center capitalize ${className}`}>
    <h1 className="pb-10 text-5xl font-semibold">{categoryName}</h1>
    <TableGrid className="grid-cols-2 gap-2 md:grid-cols-4">
      {children}
    </TableGrid>
    <Link to="/into-the-unknown" className="btn-white">
      <span className="text-base md:text-lg">All</span>
    </Link>
  </div>
);

export default Category;
