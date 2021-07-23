import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ColumnsLayout } from '..';
import { useWindowSize } from '../../hooks';
import Error from '../Error';
import Loader from '../Loader';
import StatusMessage from '../StatusMessage';

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
}

const AlbumPhotos: React.FC<AlbumPhotosProps> = ({ albumId, albumName }) => {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [width] = useWindowSize();
  const { data, loading, error } = useQuery<AlbumPhotosData>(ALBUM_PHOTOS, {
    variables: { albumId }
  });

  if (loading) return <Loader />;
  if (error) return <Error title="Could not load the photos." description="Try again later." />;

  const photos = data?.collection?.[0]?.photos;
  if (!photos?.length) {
    return (
      <StatusMessage>
        <span>Seems like there are no photos yet.</span>
      </StatusMessage>
    );
  }

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
      </ColumnsLayout>
      {photos?.length > 0 && isOverlayOpen && (
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
