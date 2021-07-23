import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link, navigate } from 'gatsby';
import LoadMoreHider from './LoadMoreHider';
import Loader from '../Loader';
import Error from '../Error';
import StatusMessage from '../StatusMessage';
import { ColumnsGrid } from '../Grid';
import { ModelImage } from '../Image';

const MODELS_QUERY = gql`
  query GET_ALL_AVATARS($offset: Int!, $limit: Int!) {
    models(start: $offset, limit: $limit) {
      name
      slug
      avatar {
        url
      }
    }
  }
`;

interface Model {
  name: string;
  slug: string;
  avatar: {
    url: string;
  };
}

interface ModelsData {
  models: Model[];
}

const distinct = (models: Model[]): Model[] => {
  const distinctSet = new Set(models);
  return Array.from(distinctSet);
};

export const PicturesFeed: React.FC = () => {
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;

  const {
    loading, error, data, fetchMore
  } = useQuery<ModelsData>(MODELS_QUERY, {
    variables: {
      offset: 0,
      limit
    }
  });

  const onLoadMore = () => {
    if (data && fetchMore && hasMore) {
      fetchMore({
        variables: { offset: data.models.length },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult || fetchMoreResult.models === prev.models) return prev;
          const newData = {
            ...prev,
            models: [...prev.models, ...fetchMoreResult.models]
          };
          if (fetchMoreResult?.models?.length < limit) setHasMore(false);
          return newData;
        }
      });
    }
  };

  const onNavigate = () => navigate('/search');

  if (loading) return <Loader />;
  if (error) return <Error title="Could not load the pictures." description="Try again later." />;

  if (!data?.models?.length) {
    return (
      <StatusMessage>
        <span>Seems like there are no pictures yet.</span>
      </StatusMessage>
    );
  }

  return (
    <div className="relative flex flex-col w-full overflow-hidden">
      <ColumnsGrid className="w-full h-auto -mb-96">
        {data
          && distinct(data.models).map((model) => (
            <Link to={`model/${model.slug}`} key={model.slug}>
              <ModelImage src={model.avatar.url} name={model.name} className="w-full" />
            </Link>
          ))}
      </ColumnsGrid>
      <LoadMoreHider onClick={(hasMore) ? onLoadMore : onNavigate} />
    </div>
  );
};

export default PicturesFeed;
