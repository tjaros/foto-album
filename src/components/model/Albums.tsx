import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'gatsby';
import Album from './Album';

interface AlbumsProps {
  modelId: number;
}

interface AlbumInterface {
  id: number;
  name: string;
  slug: string;
  photos: {
    id: number;
    url: string;
  }[];
}

const Albums: React.FC<AlbumsProps> = ({ modelId }) => {
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
  const { data, loading, error } = useQuery(GET_ALBUMS, { variables: { modelId } });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Could not load albums</div>;
  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2">
      {data?.albums.map((album: AlbumInterface) => (
        <Link to={`/albums/${album.slug}`}>
          <Album key={album.id} name={album.name} photos={album.photos} />
        </Link>
      ))}
    </div>
  );
};

export default Albums;
