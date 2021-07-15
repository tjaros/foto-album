import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { modelCurrentTabAtom } from '../../recoil/model';
import Album from './Album';

interface AlbumsProps {
  modelId: number;
}

const Albums: React.FC<AlbumsProps> = ({ modelId }) => {
  const GET_ALBUMS = gql`
    query AlbumsByModelId($modelId: ID!) {
      albums(where: { model: { id_eq: $modelId } }) {
        id
        name
        photos {
          id
          url
        }
      }
    }
  `;
  const currentTab = useRecoilValue(modelCurrentTabAtom);
  const { data, loading, error } = useQuery(GET_ALBUMS, { variables: { modelId: modelId } });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Could not load albums</div>;
  return (
    <div className={`${currentTab === 'Albums' ? `grid` : `hidden`} grid-cols-2 grid-rows-1`}>
      {data.albums.map(album => (
        <Album key={album.id} name={album.name} photos={album.photos} />
      ))}
    </div>
  );
};

export default Albums;
