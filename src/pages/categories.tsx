import { graphql, Link, PageProps } from 'gatsby';
import React from 'react';
import { Layout, MetaData, Category } from '../components';
import { Portrait } from '../components/Image';

export const query = graphql`
  query GetModelsForCategories {
    strapi {
      categories {
        name
        models(limit: 8) {
          name
          slug
          avatar {
            url
          }
        }
      }
    }
  }
`;

interface CategoryPageProps extends PageProps {
  data: {
    strapi: {
      categories: {
        name: string;
        models: {
          name: string;
          slug: string;
          avatar: { url: string };
        }[];
      }[];
    };
  };
}

const Categories: React.FC<CategoryPageProps> = ({
  data: {
    strapi: { categories }
  }
}) => (
  <Layout>
    <MetaData title="Categories" />
    <div className="flex flex-col">
      {categories.map(({ name, models }) => (
        <Category categoryName={name} key={name} className="pb-8 mt-8 md:pb-12 lg:pb-16">
          {models.map((model) => (
            <Link to={`/model/${model.slug}`} key={model.slug}>
              <Portrait
                imageLink={model.avatar.url}
                personName={model.name}
                imageClass="h-40 w-35 md:h-60 md:w-53 lg:h-80 lg:w-72"
              />
            </Link>
          ))}
        </Category>
      ))}
    </div>
  </Layout>
);

export default Categories;
