import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Portrait, ColumnsLayout } from '..';
import Error from '../Error';
import StatusMessage from '../StatusMessage';
import Loader from '../Loader';

interface WorkedWithProps {
  modelId: number;
}

interface PhotographerInfo {
  photographer: {
    id: number;
    name: string;
    avatar: {
      url: string;
    };
  };
}

interface PhotographerInfoFlattened {
  id: number;
  name: string;
  url: string;
}

const distinct = (albumModels: PhotographerInfo[]) => {
  const output: PhotographerInfoFlattened[] = [];
  albumModels.forEach((item: PhotographerInfo) => {
    const obj = {
      id: item.photographer.id,
      url: item.photographer.avatar[0].url,
      name: item.photographer.name
    };
    if (!output.some((x) => x.id === obj.id)) {
      output.push(obj);
    }
  });
  return output;
};

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
  const { loading, error, data } = useQuery(GET_PHOTOGRAPHERS, { variables: { modelId } });

  if (loading) return <Loader />;
  if (error) return <Error title="Could not load the collaborators." description="Try again later." />;

  if (!data?.model?.albums?.length) {
    return (
      <StatusMessage>
        <span>Seems like there are no official collaborators yet.</span>
      </StatusMessage>
    );
  }

  return (
    <ColumnsLayout>
      {data
        && distinct(data.model.albums).map((photographer: PhotographerInfoFlattened) => (
          <Portrait
            key={photographer.id}
            personName={photographer.name}
            imageLink={photographer.url}
          />
        ))}
    </ColumnsLayout>
  );
};

export default WorkedWith;
