import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useRecoilValue } from 'recoil';
import { Portrait, ColumnsLayout } from '..';
import photographerCurrentTabAtom from '../../recoil/photographer';

interface WorkedWithProps {
  photographerId: number;
}

interface ModelInfoFlattened {
  id: number;
  url: string;
  name: string;
}

interface ModelInfo {
  model: {
    id: number;
    name: string;
    avatar: {
      url: string;
    };
  };
}

const distinct = (albumModels: ModelInfo[]) => {
  const output: ModelInfoFlattened[] = [];
  albumModels.forEach((item: ModelInfo) => {
    const obj = {
      id: item.model.id,
      url: item.model.avatar.url,
      name: item.model.name
    };
    if (!output.some((x) => x.id === obj.id)) {
      output.push(obj);
    }
  });
  return output;
};

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
  const currentTab = useRecoilValue(photographerCurrentTabAtom);
  const {
    loading, error, data
  } = useQuery(GET_MODELS, {
    variables: { photographerId },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Could not load albums</div>;

  return (
    <ColumnsLayout className={`${currentTab === 'Worked With' ? '' : 'hidden'}`}>
      {data
        && distinct(data.albums).map((item: ModelInfoFlattened) => (
          <Portrait key={item.id} imageLink={item.url} personName={item.name} />
        ))}
    </ColumnsLayout>
  );
};

export default WorkedWith;
