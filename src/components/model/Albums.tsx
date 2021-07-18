import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Album from './Album';

interface AlbumsProps {
  modelId: number;
}

interface AlbumInterface {
  id: number;
  name: string;
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
    <div className="grid grid-cols-2 grid-rows-1">
      {data
        && data.albums.map((album: AlbumInterface) => (
          <Album key={album.id} name={album.name} photos={album.photos} />
        ))}
    </div>
  );
};

export default Albums;
