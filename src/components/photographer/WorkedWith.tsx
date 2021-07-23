import React from 'react';
import { useQuery, gql } from '@apollo/client';
import StatusMessage from '../StatusMessage';
import Error from '../Error';
import Loader from '../Loader';
import { uniqBy } from 'lodash';
import { Portrait } from '../Image';
import { TableGrid } from '../Grid';

interface WorkedWithProps {
  photographerId: number;
}

interface ModelInfo {
  id: number;
  name: string;
  avatar: {
    url: string;
  };
}

interface AlbumsModels {
  albums: {
    id: number;
    name: number;
    model: ModelInfo;
  }[]
}

const GET_MODELS = gql`
  query ModelsFromAlbums($photographerId: ID!) {
    albums(
      sort: "id:desc"
      where: { photographer: { id_eq: $photographerId } }
    ) {
      id
      name
      model {
        id
        name
        avatar {
          url
        }
      }
    }
  }
`;

const WorkedWith: React.FC<WorkedWithProps> = ({ photographerId }) => {
  const { loading, error, data } = useQuery<AlbumsModels>(GET_MODELS, {
    variables: { photographerId }
  });

  if (loading) return <Loader />;
  if (error) return <Error title="Could not load the collaborators." description="Try again later." />;

  if (!data?.albums?.length) {
    return (
      <StatusMessage>
        <span>Seems like there are no official collaborators yet.</span>
      </StatusMessage>
    );
  }

  const allModels = data?.albums.map((album) => album.model);
  const uniqModels = uniqBy(allModels, 'id');

  return (
    <TableGrid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {uniqModels.map((model) => (
        <Portrait key={model.id} imageLink={model.avatar.url} personName={model.name} />
      ))}
    </TableGrid>
  );
};

export default WorkedWith;
