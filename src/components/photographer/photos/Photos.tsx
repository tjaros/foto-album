import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import SequenceGrids from '../image-grids';

interface PhotosProps {
  photographerId: number;
}

interface Album {
  name: string;
  photos: Photo[];
}

interface Photo {
  id: number;
  url: string;
}

const GET_PHOTOS_IN_ALBUMS = gql`
  query Albums($offset: Int!, $limit: Int!, $photographerId: ID!) {
    albums(
      start: $offset
      limit: $limit
      sort: "id:desc"
      where: { photographer: { id_eq: $photographerId } }
    ) {
      id
      name
      photos(limit: 3) {
        id
        url
      }
    }
  }
`;

const Photos: React.FC<PhotosProps> = ({ photographerId }) => {
  const {
    loading, error, fetchMore, data
  } = useQuery(GET_PHOTOS_IN_ALBUMS, {
    variables: {
      offset: 0,
      limit: 3,
      photographerId
    }
  });

  const onLoadMore = () => {
    if (data) {
      fetchMore({
        variables: {
          offset: data.albums.length,
          photographerId
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult || fetchMoreResult.albums === prev.albums) return prev;
          const newData = {
            ...prev,
            albums: [...prev.albums, ...fetchMoreResult.albums]
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

  const flatten = (albums: Album[]) => albums.map((album: Album) => ({
    urls: album.photos.map((x) => x.url),
    alt: album.name
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Could not load the photots...</div>;

  return <SequenceGrids items={flatten(data.albums)} />;
};

export default Photos;
