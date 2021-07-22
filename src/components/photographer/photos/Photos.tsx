import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'gatsby';
import { useAuth } from '../../../hooks';
import { AlbumInterface } from '../../model/Albums';
import Album from '../../model/Album';

interface PhotosProps {
  photographerId: number;
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
      slug
      photos {
        id
        url
      }
    }
  }
`;

const Photos: React.FC<PhotosProps> = ({ photographerId }) => {
  const { isLoggedIn } = useAuth();
  const { loading, error, fetchMore, data } = useQuery(GET_PHOTOS_IN_ALBUMS, {
    variables: {
      offset: 0,
      limit: 3,
      photographerId
    }
  });

  useEffect(() => {
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
      const docElement = document.documentElement;
      const scrollTop = docElement?.scrollTop || document.body.scrollTop;
      const scrollHeight = docElement?.scrollHeight || document.body.scrollHeight;
      const clientHeight = docElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (scrolledToBottom) {
        onLoadMore();
      }
    };
    window.addEventListener('scroll', handleOnScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleOnScroll);
  }, [data, fetchMore, photographerId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Could not load the photots...</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3">
      {data?.albums.map((album: AlbumInterface) => (
        <Link to={!isLoggedIn ? '#horny' : `/albums/${album.slug}`}>
          <Album key={album.id} name={album.name} photos={album.photos} locked={!isLoggedIn} />
        </Link>
      ))}
    </div>
  );
};
export default Photos;
