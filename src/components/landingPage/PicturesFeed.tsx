import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { FaTruckLoading } from 'react-icons/fa';
import { Link } from 'gatsby';
import ColumnsLayout from '../ColumnsLayout';

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
  }
}

interface ModelsData {
  models: Model[]
}

const distinct = (models: Model[]): Model[] => {
  const distinctSet = new Set(models);
  return Array.from(distinctSet);
};

export const PicturesFeed: React.FC = () => {
  const { loading, error, data, fetchMore } = useQuery<ModelsData>(MODELS_QUERY, {
    variables: {
      offset: 0,
      limit: 6
    }
  });

  useEffect(() => {
    const onLoadMore = () => {
      if (data) {
        fetchMore({
          variables: { offset: data.models.length },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult || fetchMoreResult.models === prev.models) return prev;
            const newData = {
              ...prev,
              models: [...prev.models, ...fetchMoreResult.models]
            };
            return newData;
          }
        });
      }
    };

    const handleOnScroll = () => {
      const docEl = document.documentElement;
      const scrollTop = (docEl && docEl.scrollTop) || document.body.scrollTop;
      const scrollHeight = (docEl && docEl.scrollHeight) || document.body.scrollHeight;
      const clientHeight = docEl.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom) {
        onLoadMore();
      }
    };
    window.addEventListener('scroll', handleOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, [data, fetchMore]);

  if (error) return <div>Failed to load image</div>;
  if (loading) return <FaTruckLoading />;

  return (
    <ColumnsLayout>
      {data && distinct(data.models).map((model) => (
        <Link to={`model/${model.slug}`} key={model.slug}>
          <img src={model.avatar.url} alt={model.name} className="w-full" />
        </Link>
      ))}
    </ColumnsLayout>
  );
};

export default PicturesFeed;
