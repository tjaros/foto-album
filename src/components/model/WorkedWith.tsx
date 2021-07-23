import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { uniqBy } from 'lodash';
import Error from '../Error';
import StatusMessage from '../StatusMessage';
import Loader from '../Loader';
import { TableGrid } from '../Grid';
import { Portrait } from '../Image';

interface WorkedWithProps {
  modelId: number;
}

interface PhotographerInfo {
  id: number;
  name: string;
  avatar: {
    url: string;
  };
}

interface ModelPhotographers {
  model: {
    albums: {
      photographer: PhotographerInfo;
    }[];
  };
}

const GET_PHOTOGRAPHERS = gql`
  query GetCollaborators($modelId: ID!) {
    model(id: $modelId) {
      albums {
        photographer {
          id
          name
          avatar {
            url
          }
        }
      }
    }
  }
`;

const WorkedWith: React.FC<WorkedWithProps> = ({ modelId }) => {
  const { loading, error, data } = useQuery<ModelPhotographers>(GET_PHOTOGRAPHERS, {
    variables: { modelId }
  });

  if (loading) return <Loader />;
  if (error) return <Error title="Could not load the collaborators." description="Try again later." />;

  if (!data?.model?.albums?.length) {
    return (
      <StatusMessage>
        <span>Seems like there are no official collaborators yet.</span>
      </StatusMessage>
    );
  }

  const allPhotographers = data?.model.albums.map((album) => album.photographer);
  const uniqPhotographers = uniqBy(allPhotographers, 'id');

  return (
    <TableGrid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {uniqPhotographers.map((photographer) => (
        <Portrait
          key={photographer.id}
          personName={photographer.name}
          imageLink={photographer.avatar.url}
        />
      ))}
    </TableGrid>
  );
};

export default WorkedWith;
