import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { FaTruckLoading } from 'react-icons/fa';
import ColumnsLayout from '../ColumnsLayout';

const Image = ({ url }: { url: string }) => (
  <div>
    <img src={url} alt="" className="w-full" />
  </div>
);

interface ModelAvatar {
  avatar: {
    url: string;
  };
}

interface ModelAvatarUrl {
  url: string;
}

const distinct = (avatar: ModelAvatar[]) => {
  const output: ModelAvatarUrl[] = [];
  avatar.forEach((item: ModelAvatar) => {
    const obj = {
      url: item.avatar.url
    };
    if (!output.some((x) => x.url === obj.url)) {
      output.push(obj);
    }
  });
  return output;
};

const MODELS_QUERY = gql`
  query GET_ALL_AVATARS($offset: Int!, $limit: Int!) {
    models(start: $offset, limit: $limit) {
      avatar {
        url
      }
    }
  }
`;

export const PicturesFeed: React.FC = () => {
  const {
    loading, error, data, fetchMore
  } = useQuery(MODELS_QUERY, {
    variables: {
      offset: 0,
      limit: 6
    }
  });

  const onLoadMore = () => {
    if (data) {
      fetchMore({
        variables: {
          offset: data.models.length
        },
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
    const scrollTop = (document.documentElement && document.documentElement.scrollTop)
          || document.body.scrollTop;
    const scrollHeight = (document.documentElement && document.documentElement.scrollHeight)
          || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      onLoadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  }, [data]);

  if (error) return <div>Failed to load avatars</div>;
  if (loading) return <FaTruckLoading />;
  return (
    <ColumnsLayout>
      {data && distinct(data.models).map((item: ModelAvatarUrl) => (
        <Image url={item.url} />
      ))}
    </ColumnsLayout>
  );
};

export default PicturesFeed;
