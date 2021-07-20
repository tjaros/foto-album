import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ColumnsLayout } from '..';
import { useWindowSize } from '../../hooks';

/** Shape of returned data.  */
interface AlbumPhotosData {
  collection: {
    photos: { url: string }[];
  }[];
}

const ALBUM_PHOTOS = gql`
  query GetAlbumPhotos($albumId: ID!) {
    collection: photoCollections(where: { album: { id: $albumId } }) {
      photos: Photos {
        url
      }
    }
  }
`;

interface AlbumPhotosProps {
  albumId: number;
  albumName: string;
  className?: string;
}

const AlbumPhotos: React.FC<AlbumPhotosProps> = ({ albumId, albumName, className = '' }) => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [width] = useWindowSize();
  const { data, loading, error } = useQuery<AlbumPhotosData>(ALBUM_PHOTOS, {
    variables: { albumId }
  });

  if (loading || error || !data) {
    return (
      <div className={`flex w-full text-2xl text-center content-center items-center ${className}`}>
        <span>{loading ? 'Loading...' : 'Could not load data :('}</span>
      </div>
    );
  }

  const { photos } = data.collection[0];
  return (
    <>
      <ColumnsLayout nColumns={Math.min(4, Math.floor(width / 300))}>
        {photos?.map(({ url }, index) => (
          <button
            type="button"
            onClick={() => {
              setPhotoIndex(index);
              setOverlayOpen(true);
            }}>
            <img alt={`From ${albumName} album`} src={url} key={url} />
          </button>
        ))}
        {error && <h2>Could not load images</h2>}
      </ColumnsLayout>
      {photos.length > 0 && isOverlayOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].url}
          nextSrc={photos[(photoIndex + 1) % photos.length].url}
          prevSrc={photos[(photoIndex + photos.length - 1) % photos.length].url}
          onCloseRequest={() => setOverlayOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + photos.length - 1) % photos.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photos.length)}
        />
      )}
    </>
  );
};

export default AlbumPhotos;
