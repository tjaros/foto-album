import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
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
    <img className="w-20 h-20 rounded-full" src={url} alt={alt} />
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
  console.log('Building', album);
  return (
    <Layout>
      <MetaData title={`Album ${album.name}`} />
      <p className="py-6 mx-6 text-6xl font-semibold">{album.name}</p>
      <ColumnsLayout nColumns={4}>
        {album.photos.map(({ url }) => (
          <img alt="" src={url} key={url} />
        ))}
        {album.photos.map(({ url }) => (
          <img alt="" src={url} key={url} />
        ))}
        {album.photos.map(({ url }) => (
          <img alt="" src={url} key={url} />
        ))}
        {album.photos.map(({ url }) => (
          <img alt="" src={url} key={url} />
        ))}
      </ColumnsLayout>
      <div className="flex flex-row justify-around py-12">
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
    </Layout>
  );
};

export default AlbumPageTemplate;
