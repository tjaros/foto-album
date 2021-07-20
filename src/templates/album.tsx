import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ColumnsLayout, Layout, MetaData } from '../components';
import DescribedAvatar from '../components/album/DescribedAvatar';
import Error from '../components/Error';
import useWindowSize from '../hooks/useWindowsSize';
import { useAuth } from '../hooks';

interface AlbumPageProps extends PageProps {
  data: {
    strapi: {
      album: {
        name: string;
        description: string;
        model: {
          name: string;
          slug: string;
          avatar: { url: string };
        };
        photographer?: {
          name: string;
          slug: string;
          avatar: { url: string }[];
        };
        collection: {
          photos: { url: string }[]
        }[]
      };
    };
  };
}

export const query = graphql`
  query GetAlbumData($id: ID!) {
    strapi {
      album(id: $id) {
        name
        description: Description
        model {
          name
          slug
          avatar {
            url
          }
        }
        photographer {
          name
          slug
          avatar {
            url
          }
        }
        collection: photo_collections {
          photos: Photos {
            url
          }
        }
      }
    }
  }
`;

const AlbumPageTemplate: React.FC<AlbumPageProps> = ({
  data: {
    strapi: { album }
  }
}) => {
  const { isLoggedIn } = useAuth();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const [width] = useWindowSize();

  if (!isLoggedIn) {
    return (
      <Layout>
        <MetaData title="Forbidden Access" />
        <Error title="Forbidden Access" description="You must be logged in to see this content" />
      </Layout>
    );
  }

  const { photos } = album.collection[0];
  const nPhotos = photos.length;

  return (
    <Layout>
      <MetaData title={`Album ${album.name}`} />
      <h1 className="py-6 mb-4 text-3xl font-medium border-b border-gray-800 md:text-5xl lg:text-6xl ">
        {album.name}
      </h1>
      <p className="py-4 mb-4 md:text-lg">
        {album.description}
      </p>
      <ColumnsLayout nColumns={Math.min(4, Math.floor(width / 300))}>
        {photos.map(({ url }, index) => (
          <button
            type="button"
            onClick={() => {
              setPhotoIndex(index);
              setOverlayOpen(true);
            }}>
            <img alt={`From ${album.name} album`} src={url} key={url} />
          </button>
        ))}
      </ColumnsLayout>
      <div className="flex flex-row py-12 justify-evenly">
        {album.photographer && (
          <DescribedAvatar
            slug={`/photographer/${album.photographer.slug}`}
            avatarLink={album.photographer.avatar[0].url}
            name={album.photographer.name}
            roleAs="Photographer"
          />
        )}
        <DescribedAvatar
          slug={`/model/${album.model.slug}`}
          avatarLink={album.model.avatar.url}
          name={album.model.name}
          roleAs="Model"
        />
      </div>
      {nPhotos > 0 && isOverlayOpen && (
        <Lightbox
          mainSrc={photos[photoIndex].url}
          nextSrc={photos[(photoIndex + 1) % nPhotos].url}
          prevSrc={photos[(photoIndex + nPhotos - 1) % nPhotos].url}
          onCloseRequest={() => setOverlayOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + nPhotos - 1) % nPhotos)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % nPhotos)}
        />
      )}
    </Layout>
  );
};

export default AlbumPageTemplate;
