import React from 'react';
import { useQuery, gql } from '@apollo/client';
import SequenceGrids from './image-grids';

interface PhotosProps {
  photographerId: number;
}

const Photos: React.FC<PhotosProps> = ({ photographerId }) => {
  const GET_PHOTOS = gql`
    query GetPhotosFromAlbums($photographerId: ID!) {
      photographer(id: $photographerId) {
        albums {
          name
          photos(limit: 3) {
            id
            url
          }
        }
      }
    }
  `;
  const { data, loading, error } = useQuery(GET_PHOTOS, { variables: { photographerId } });
  if (loading) return <div>loading...</div>;
  if (error) return <div>Could not load the photos</div>;
  const mappedData = data.photographer.albums.map((album) => ({
    urls: album.photos.map((photo) => photo.url),
    alt: `Album: ${album.name}`
  }));

  return (
    <div className="flex flex-col w-full">
      <SequenceGrids items={mappedData} />
    </div>
  );
};

export default Photos;
