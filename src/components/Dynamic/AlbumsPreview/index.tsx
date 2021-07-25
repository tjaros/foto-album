import React from 'react';
import { useQuery, gql, OperationVariables, TypedDocumentNode, DocumentNode, QueryHookOptions } from '@apollo/client';
import { useAuth } from '../../../hooks';
import AlbumCard from '../../AlbumCard';
import { Loader, StatusMessage, Error } from '../../Status';

interface AlbumData {
  id: number;
  name: string;
  slug: string;
  photos: { url: string; }[];
}

export const ALBUM_FIELDS = gql`
  fragment AlbumFields on Album {
    id
    name
    slug
    photos(limit: 1) {
      id
      url
    }
  }
`;

interface QueriedAlbum {
  albums: AlbumData[];
}

interface AlbumsProps<TData = any, TVariables = OperationVariables> {
  query: DocumentNode | TypedDocumentNode<TData, TVariables>;
  options?: QueryHookOptions<TData, TVariables> | undefined;
  className?: string;
}

const Albums: React.FC<AlbumsProps> = ({ query, options, className = '' }) => {
  const { isLoggedIn } = useAuth();
  const { data, loading, error } = useQuery<QueriedAlbum>(query, options);

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
    <div className={`grid grid-cols-1 grid-rows-1 md:grid-cols-3 ${className}`}>
      {data?.albums.map((album) => (
        <AlbumCard
          key={album.id}
          albumSlug={album.slug}
          name={album.name}
          photo={album.photos[0].url}
          locked={!isLoggedIn}
        />
      ))}
    </div>
  );
};

export default Albums;
