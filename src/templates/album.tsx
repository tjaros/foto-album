import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout, MetaData } from '../components';
import DescribedAvatar from '../components/album/DescribedAvatar';
import Error from '../components/Error';
import { useAuth } from '../hooks';
import AlbumPhotos from '../components/album/AlbumPhotos';

interface AlbumPageProps extends PageProps {
  data: {
    strapi: {
      album: {
        id: number;
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
        }
      };
    };
  };
}

export const query = graphql`
  query GetAlbumData($id: ID!) {
    strapi {
      album(id: $id) {
        id
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
      }
    }
  }
`;

const AlbumPageTemplate: React.FC<AlbumPageProps> = ({
  data: {
    strapi: { album }
  },
}) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return (
      <Layout>
        <MetaData title="Forbidden Access" />
        <Error title="Forbidden Access" description="You must be logged in to see this content" />
      </Layout>
    );
  }

  return (
    <Layout>
      <MetaData title={`Album ${album.name}`} />
      <h1 className="py-6 mb-4 text-3xl font-medium border-b border-gray-800 md:text-5xl lg:text-6xl ">
        {album.name}
      </h1>
      <p className="py-4 mb-4 md:text-lg">
        {album.description}
      </p>
      <AlbumPhotos albumId={album.id} albumName={album.name} />
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
    </Layout>
  );
};

export default AlbumPageTemplate;
