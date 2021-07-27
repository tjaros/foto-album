import React from 'react';

interface CategoryButtonProps {
  setFilter: React.Dispatch<React.SetStateAction<{ values: string[], }>>,
  filter: { values: string[], },
  categories: string[],
}
const CategoryButton: React.FC<CategoryButtonProps> = ({ filter, setFilter, categories }) => (
  <div className="dropdown">
    <button
      type="button"
      className={`btn-white ${filter.values.length > 0 && 'bg-black text-white hover:bg-gray-700'
      }`}>
      Category
    </button>
    <div className="absolute flex flex-col invisible w-32 transition-all duration-300 origin-top-right transform bg-white shadow-lg opacity-0 dropdown-menu ">
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`capitalize px-6 py-3 hover:bg-gray-200 ${filter.values.includes(cat) && 'bg-black text-white hover:bg-gray-700'
          }`}
          onClick={() => {
            const index = filter.values.indexOf(cat);
            setFilter((p) => {
              const res = index >= 0 ? p.values.filter((val) => val !== cat) : [cat, ...p.values];

              return { ...p, values: res };
            });
          }}>
          {cat}
        </button>
      ))}
    </div>
  </div>
);

export default CategoryButton;
