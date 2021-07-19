import React, { useState } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { ColumnsLayout, Layout, MetaData } from '../components';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator to generate all types from graphQL schema
interface AlbumPageProps extends PageProps {
  data: {
    strapi: {
      album: {
        name: string;
        model: {
          name: string;
          slug: string;
          avatar: { url: string };
        };
        photographer: {
          name: string;
          slug: string;
          avatar: { url: string }[];
        };
        photos: { url: string }[];
      };
    };
  };
}

export const query = graphql`
  query GetAlbumData($id: ID!) {
    strapi {
      album(id: $id) {
        name
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
        photos {
          url
        }
      }
    }
  }
`;

const Avatar = ({ url, alt, roleAs }: { url: string; alt: string; roleAs: string }) => (
  <div className="flex flex-col justify-items-center">
    <p className="font-bold text-center">{roleAs}</p>
    <div className="w-20 h-20">
      <img className="object-cover w-full h-full rounded-full" src={url} alt={alt} />
    </div>
    <p className="text-center">{alt}</p>
  </div>
);

const SmallPic = ({
  slug,
  url,
  name,
  roleAs
}: {
  slug: string;
  url: string;
  name: string;
  roleAs: string;
}) => (
  <Link to={slug} className="text-black">
    <Avatar url={url} alt={name} roleAs={roleAs} />
  </Link>
);

const AlbumPageTemplate: React.FC<AlbumPageProps> = ({
  data: {
    strapi: { album }
  }
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const nPhotos = album.photos.length;

  console.log('rerender', photoIndex, isOverlayOpen);

  return (
    <Layout>
      <MetaData title={`Album ${album.name}`} />
      <h1 className="py-6 mb-4 text-3xl font-medium border-b border-gray-800 md:text-5xl lg:text-6xl ">
        {album.name}
      </h1>
      <p className="py-4 mb-4 md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sequi quia hic excepturi ipsum
        assumenda deleniti laudantium perspiciatis facilis rem autem eligendi laboriosam quasi quo,
        nulla dolores quisquam dolore architecto.
      </p>
      <ColumnsLayout nColumns={4}>
        {album.photos.map(({ url }, index) => (
          <button
            type="button"
            onClick={() => {
              setPhotoIndex(index);
              setOverlayOpen(true);
            }}>
            <img alt="" src={url} key={url} />
          </button>
        ))}
      </ColumnsLayout>
      <div className="flex flex-row py-12 justify-evenly">
        <SmallPic
          slug={`/photographer/${album.photographer.slug}`}
          url={album.photographer.avatar[0].url}
          name={album.photographer.name}
          roleAs="Photographer"
        />
        <SmallPic
          slug={`/model/${album.model.slug}`}
          url={album.model.avatar.url}
          name={album.model.name}
          roleAs="Model"
        />
      </div>
      {nPhotos > 0 && isOverlayOpen && (
        <Lightbox
          mainSrc={album.photos[photoIndex].url}
          nextSrc={album.photos[(photoIndex + 1) % nPhotos].url}
          prevSrc={album.photos[(photoIndex + nPhotos - 1) % nPhotos].url}
          onCloseRequest={() => setOverlayOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + nPhotos - 1) % nPhotos)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % nPhotos)}
        />
      )}
    </Layout>
  );
};

export default AlbumPageTemplate;
