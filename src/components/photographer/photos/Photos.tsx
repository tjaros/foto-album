import React, { useEffect, useState } from 'react';
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
  query Albums($photographerId: ID!, $start: Int!, $limit: Int!) {
    albums(
      start: $start
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
  const [limit, setLimit] = useState(3);
  const {
    loading, error, fetchMore, data
  } = useQuery(GET_PHOTOS_IN_ALBUMS, {
    variables: {
      start: 0,
      limit,
      photographerId
    }
  });

  const handleScroll = () => {
    const windowStats = Math.ceil(window.innerHeight + window.scrollY);
    const docStats = document.documentElement.scrollHeight;
    const bottom = windowStats >= docStats;
    const currentLength = data.albums.length;

    if (bottom) {
      fetchMore({
        variables: {
          start: currentLength,
          limit: 3,
          photographerId
        }
      }).then((result) => { setLimit(currentLength + result.data.albums.length); });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
