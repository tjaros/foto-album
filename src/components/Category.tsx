import React from 'react';
import Portrait from './Portrait';

type Data = { imageLink: string; personName: string };

interface CategoryPorps {
  data: Data[];
  categoryName: string;
}

const Category: React.FC<CategoryPorps> = ({ data, categoryName }) => (
  <div className="flex flex-col items-center pb-16">
    <h1 className="pb-10 text-5xl font-semibold">{categoryName}</h1>
    <div className="flex flex-col pb-10 md:flex-row">
      {data.slice(0, 4).map(({ imageLink, personName }) => (
        <Portrait imageLink={imageLink} personName={personName} />
      ))}
    </div>
    <div className="flex flex-col pb-10 md:flex-row">
      {data.slice(4, 8).map(({ imageLink, personName }) => (
        <Portrait imageLink={imageLink} personName={personName} />
      ))}
    </div>
    <div className="flex flex-row">
      <button type="button" className="w-32 h-12 border-2 border-black border-solid rounded-md">
        <p>All</p>
      </button>
    </div>
  </div>
);

export default Category;
