import React, { useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import * as JsSearch from 'js-search';
import {
  MetaData, Layout, ColumnsLayout, Portrait
} from '../components';

export const pageQuery = graphql`
  query GetPhotographers {
    strapi {
      photographers {
        id
        slug
        name
        location
        avatar {
          url
        }
      }
    }
  }
`;

interface Photographer {
  id: number;
  slug: string;
  name: string;
  location: string;
  avatar: { url: string }[];
}

interface SearchPageProps extends PageProps {
  data: {
    strapi: {
      photographers: Photographer[];
    };
  };
}

const Photographers: React.FC<SearchPageProps> = ({ data, location }) => {
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('s'));

  const search = new JsSearch.Search('slug');
  search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
  search.sanitizer = new JsSearch.LowerCaseSanitizer();
  search.addIndex('name');
  search.addDocuments(data.strapi.photographers);

  const [photographers, setPhotographers] = useState<Photographer[]>(
    query === '' || !query ? data.strapi.photographers : (search.search(query) as Photographer[])
  );
  const handleSearch = (event: { target: HTMLInputElement }) => {
    setQuery(event.target.value);
    setPhotographers(
      event.target.value === ''
        ? data.strapi.photographers
        : (search.search(event.target.value) as Photographer[])
    );
  };

  return (
    <Layout showSearchbar={false}>
      <MetaData title={'Search for: '.concat(query || '')} />
      <div className="max-w-5xl py-20 mx-auto">
        <div className="flex justify-between pb-20">
          <h1 className="text-4xl font-semibold">Photographers</h1>
          <input
            type="text"
            className="w-64 p-2 px-4 bg-gray-100 border-gray-500 rounded"
            value={query ?? ''}
            placeholder="Type your search"
            onChange={handleSearch}
          />
        </div>

        {photographers.length > 0 ? (
          <ColumnsLayout>
            {photographers.map((photographer) => (
              <Link to={`/photographer/${photographer.slug}`} key={photographer.slug}>
                <Portrait
                  key={photographer.id}
                  personName={photographer.name}
                  imageLink={photographer.avatar[0].url}
                />
              </Link>
            ))}
          </ColumnsLayout>
        ) : (
          <h1 className="w-full text-3xl font-bold text-center uppercase">No photographers found</h1>
        )}
      </div>
    </Layout>
  );
};

export default Photographers;
