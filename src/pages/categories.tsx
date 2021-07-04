import React from 'react';
import { Layout, MetaData } from '../components';
import Category from '../components/category';

const categories = new Array(4).fill({
  data: Array(8).fill({
    imageLink: 'https://thispersondoesnotexist.com/image',
    personName: 'Your Papa',
  }),
  categoryName: 'MEN',
});

const Categories: React.FC = () => (
  <Layout>
    <MetaData title="Categories" />
    <div className="flex flex-col">
      {categories.map((e) => (<Category data={e.data} categoryName={e.categoryName} />))}
    </div>
  </Layout>
);

export default Categories;
