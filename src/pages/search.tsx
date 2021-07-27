import React, { useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import * as JsSearch from 'js-search';
import { MetaData, Layout } from '../components';
import { TableGrid } from '../components/Grid';
import { Portrait } from '../components/Image';
import { StatusMessage } from '../components/Status';
import { CategoryButton, ColorButton } from '../components/SearchFilter';

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

interface Model {
  id: number;
  eyeColor: string;
  avatar: { url: string };
  categories: { name: string }[];
  height: number;
  hairColor: string;
  hipLine: string;
  location: string;
  name: string;
  slug: string;
  age: number;
  bustLine: number;
}

interface SearchPageProps extends PageProps {
  data: {
    strapi: {
      models: Model[];
    };
  };
}

interface FilterState { values: string[] }

const Search: React.FC<SearchPageProps> = ({ data, location }) => {
  const [query, setQuery] = useState(new URLSearchParams(location.search).get('s'));
  const categoryURL = new URLSearchParams(location.search).get('c');
  const categories = ['hostess', 'escort', 'female', 'male'];
  const [categoryFilter, setCategoryFilter] = useState<FilterState>({
    values: categoryURL !== null && categories.includes(categoryURL) ? [categoryURL] : []
  });
  const [hairFilter, setHairFilter] = useState<FilterState>({ values: [] });
  const [eyeFilter, setEyeFilter] = useState<FilterState>({ values: [] });
  const search = new JsSearch.Search('slug');

  search.indexStrategy = new JsSearch.AllSubstringsIndexStrategy();
  search.sanitizer = new JsSearch.LowerCaseSanitizer();
  search.addIndex('name');
  search.addDocuments(data.strapi.models);

  const [models, setModels] = useState<Model[]>(
    query === '' || !query ? data.strapi.models : (search.search(query) as Model[])
  );
  const handleSearch = (event: { target: HTMLInputElement }) => {
    setQuery(event.target.value);
    setModels(
      event.target.value === ''
        ? data.strapi.models
        : (search.search(event.target.value) as Model[])
    );
  };
  const curEyes: Set<string> = new Set();
  const curHair: Set<string> = new Set();
  data.strapi.models?.forEach(({ hairColor, eyeColor }) => {
    curEyes.add(eyeColor.trim() === 'grey' ? 'gray' : eyeColor.trim());
    curHair.add(hairColor.trim() === 'grey' ? 'gray' : hairColor.trim());
  });

  return (
    <Layout showSearchbar={false}>
      <MetaData title={`Search for: ${query || 'all models'}`} description="Search all models..." />
      <div className="max-w-5xl py-20 mx-auto">
        <div className="px-2 pb-20">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h1 className="py-2 text-4xl font-semibold">Models</h1>
            <input
              type="text"
              className="w-64 p-2 px-4 bg-gray-100 border-gray-500 rounded"
              value={query ?? ''}
              placeholder="Type your search"
              onChange={handleSearch}
            />
          </div>
          <div className="flex flex-col items-center gap-4 py-4 md:flex-row ">
            <CategoryButton
              setFilter={setCategoryFilter}
              filter={categoryFilter}
              categories={categories}
            />
            <ColorButton
              setFilter={setHairFilter}
              filter={hairFilter}
              cur={curHair}
              name="Hair"
            />
            <ColorButton
              setFilter={setEyeFilter}
              filter={eyeFilter}
              cur={curEyes}
              name="Eyes"
            />
          </div>
        </div>

        {models.length > 0 ? (
          <TableGrid className="table-grid--4 layout--content">
            {models
              .filter((m) => {
                const hairColor = m.hairColor.trim() === 'grey' ? 'gray' : m.hairColor.trim();
                const eyeColor = m.eyeColor.trim() === 'grey' ? 'gray' : m.eyeColor.trim();
                const filter = [
                  categoryFilter.values.length === 0,
                  (hairFilter.values.length === 0 || hairFilter.values.includes(hairColor)),
                  (eyeFilter.values.length === 0 || eyeFilter.values.includes(eyeColor)),
                ];
                const ctg = m.categories.map((c) => categoryFilter.values.includes(c.name));
                filter[0] = filter[0] || ctg.includes(true);
                return !filter.includes(false);
              })
              .map((model) => (
                <Link to={`/model/${model.slug}`} key={model.id}>
                  <Portrait personName={model.name} imageLink={model.avatar.url} />
                </Link>
              ))}
          </TableGrid>
        ) : (
          <StatusMessage>No models found</StatusMessage>
        )}
      </div>
    </Layout>
  );
};

export default Search;
