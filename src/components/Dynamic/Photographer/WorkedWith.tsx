import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { uniqBy } from 'lodash';
import { Link } from 'gatsby';
import { Portrait } from '../../Image';
import { TableGrid } from '../../Grid';
import { Loader, StatusMessage, Error } from '../../Status';

interface WorkedWithProps {
  photographerId: number;
  className?: string;
}

interface ModelInfo {
  id: number;
  name: string;
  slug: string;
  avatar: {
    url: string;
  };
}

interface AlbumsModels {
  albums: {
    id: number;
    name: number;
    model: ModelInfo;
  }[];
}

const GET_MODELS = gql`
  query ModelsFromAlbums($photographerId: ID!) {
    albums(sort: "id:desc", where: { photographer: { id_eq: $photographerId } }) {
      id
      name
      model {
        id
        name
        slug
        avatar {
          url
        }
      }
    }
  }
`;

const WorkedWith: React.FC<WorkedWithProps> = ({ photographerId, className = '' }) => {
  const { loading, error, data } = useQuery<AlbumsModels>(GET_MODELS, {
    variables: { photographerId }
  });

  if (loading) return <Loader />;
  if (error) { return <Error title="Could not load the collaborators." description="Try again later." />; }

  if (!data?.albums?.length) {
    return <StatusMessage>Seems like there are no official collaborators yet.</StatusMessage>;
  }

  const allModels = data?.albums.map((album) => album.model);
  const uniqModels = uniqBy(allModels, 'id');

  return (
    <TableGrid className={`table-grid--4 mt-5 ${className}`}>
      {uniqModels.map((model) => (
        <Link key={model.id} to={`/model/${model.slug}`}>
          <Portrait imageLink={model.avatar.url} personName={model.name} />
        </Link>
      ))}
    </TableGrid>
  );
};

export default WorkedWith;
