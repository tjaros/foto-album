import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { FaTruckLoading } from 'react-icons/fa';
import { Link, navigate } from 'gatsby';
import { ColumnsLayout, Image } from '..';
import LoadMoreHider from './LoadMoreHider';

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
        },
      });
    }
  };
  const onNavigate = () => navigate('/search');

  if (loading) return <FaTruckLoading />;
  if (error) return <div>Failed to load image</div>;
  if (!data) return <FaTruckLoading />;

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <ColumnsLayout className="-mb-100">
        {data
          && distinct(data.models).map((model) => (
            <Link to={`model/${model.slug}`} key={model.slug}>
              <Image src={model.avatar.url} name={model.name} className="w-full" />
            </Link>
          ))}
      </ColumnsLayout>
      <LoadMoreHider onClick={(hasMore) ? onLoadMore : onNavigate} />
    </div>
  );
};

export default PicturesFeed;
