import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'gatsby';
import { useAuth } from '../../../hooks';
import AlbumCard from '../../AlbumCard';
import { Loader, StatusMessage, Error } from '../../Status';

interface AlbumsProps {
  modelId: number;
}

export interface AlbumInterface {
  id: number;
  name: string;
  slug: string;
  photos: {
    id: number;
    url: string;
  }[];
}

const GET_ALBUMS = gql`
  query AlbumsByModelId($modelId: ID!) {
    albums(where: { model: { id_eq: $modelId } }) {
      id
      name
      slug
      photos(limit: 1) {
        id
        url
      }
    }
  }
`;

const Albums: React.FC<AlbumsProps> = ({ modelId }) => {
  const { isLoggedIn } = useAuth();
  const { data, loading, error } = useQuery(GET_ALBUMS, { variables: { modelId } });

  if (loading) return <Loader />;
  if (error) return <Error title="Could not load the albums." description="Try again later." />;

  if (!data?.albums?.length) {
    return (
      <StatusMessage>
        <span>Seems like there are no albums yet.</span>
      </StatusMessage>
    );
  }

  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3">
      {data?.albums.map((album: AlbumInterface) => (
        <Link key={album.id} to={!isLoggedIn ? '#horny' : `/albums/${album.slug}`}>
          <AlbumCard name={album.name} photo={album.photos[0].url} locked={!isLoggedIn} />
        </Link>
      ))}
    </div>
  );
};

export default Albums;
