import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { Layout, MetaData } from '../components';
import { useAuth } from '../hooks';
import { Error } from '../components/Status';
import { DescribedAvatar } from '../components/Image';
import AlbumPhotos from '../components/Dynamic/AlbumPhotos';

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
        };
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
  }
}) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return (
      <Layout>
        <MetaData title="Access Forbidden" />
        <Error title="Access Forbidden" description="You must be logged in to see this content" />
      </Layout>
    );
  }

  return (
    <Layout className="container mx-auto max-w-7xl">
      <MetaData title={`Album ${album.name}`} />
      <h1 className="px-2 py-6 mb-4 text-3xl font-medium border-b border-gray-800 md:text-5xl lg:text-6xl ">
        {album.name}
      </h1>
      <p className="px-2 py-4 mb-4 md:text-lg">{album.description}</p>
      <AlbumPhotos albumId={album.id} albumName={album.name} />
      <div className="flex flex-row py-12 justify-evenly">
        {album.photographer && (
          <Link to={`/photographer/${album.photographer.slug}`}>
            <DescribedAvatar
              avatarLink={album.photographer.avatar[0].url}
              name={album.photographer.name}
              roleAs="Photographer"
            />
          </Link>
        )}
        <Link to={`/model/${album.model.slug}`}>
          <DescribedAvatar
            avatarLink={album.model.avatar.url}
            name={album.model.name}
            roleAs="Model"
          />
        </Link>
      </div>
    </Layout>
  );
};

export default AlbumPageTemplate;
