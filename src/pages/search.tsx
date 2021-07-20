import React, { useState } from 'react';
import { graphql } from 'gatsby';
import * as JsSearch from 'js-search';
import {
  MetaData, Layout, ColumnsLayout, Portrait
} from '../components';

const Search: React.FC = ({ data, location }) => {
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('s'));
  // const [filter, setFilter] = useState();
  const search = new JsSearch.Search('slug');

  search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
  search.sanitizer = new JsSearch.LowerCaseSanitizer();
  search.addIndex('name');
  search.addDocuments(data.strapi.models);

  const [models, setModels] = useState(query === '' ? data.strapi.models : search.search(query));
  const handleSearch = (event) => {
    setQuery(event.target.value);
    setModels(event.target.value === '' ? data.strapi.models : search.search(event.target.value));
  };
  // const curColors: Set[string] = new Set();
  // const curHair = new Set();
  // data.strapi.models?.forEach(({ hairColor, eyeColor }) => {
  //   curColors.add(eyeColor.trim());
  //   curHair.add(hairColor.trim());
  // });
  // const colors = {
  //   black: '#000',
  //   brown: '#5A3825',
  //   blonde: '#F4C14B',
  //   white: '#FFF',
  //   blue: '#1B2C99',
  //   red: '#D41223',
  //   green: '#0DC330'
  // };
  return (
    <Layout>
      <MetaData title={'Search for: '.concat(query)} />
      <div className="max-w-5xl py-20 mx-auto">
        <div className="flex justify-between pb-20">
          <h1 className="text-4xl font-semibold">Model search</h1>
          <input
            type="text"
            className="w-64 p-2 px-4 bg-gray-100 border-gray-500 rounded"
            value={query ?? ''}
            placeholder="Type your search"
            onChange={handleSearch}
          />
        </div>
        {/* <select
          className="z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
          value={filter}
          multiple
          onChange={e => {
            setFilter([...filter, Array.from(e.target.selectedOptions, o => o.value)]);
            console.log(Array.from(e.target.selectedOptions, o => o.value));
          }}>
          {[...curColors].map(color => (
            <option value={color}>{color}</option>
          ))}
        </select> */}

        {models.length > 0 ? (
          <ColumnsLayout>
            {models.map((model) => (
              <Portrait key={model.id} personName={model.name} imageLink={model.avatar.url} />
            ))}
          </ColumnsLayout>
        ) : (
          <h1 className="w-full text-3xl font-bold text-center uppercase">No models found</h1>
        )}
      </div>
    </Layout>
  );
};

export default Search;

export const pageQuery = graphql`
  query Models {
    strapi {
      models {
        id
        eyeColor
        avatar {
          url
        }
        categories {
          name
        }
        height
        hairColor
        hipLine
        location
        name
        slug
        age
        bustLine
      }
    }
  }
`;
