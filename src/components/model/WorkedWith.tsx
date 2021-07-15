import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Portrait, ColumnsLayout } from '..';
import { useRecoilValue } from 'recoil';
import { modelCurrentTabAtom } from '../../recoil/model';

interface WorkedWithProps {
  modelId: number;
}

interface PhotographerInfo {
  id: number;
  url: string;
  name: string;
}

const distinct = (albums: any[]) => {
  const output: PhotographerInfo[] = [];
  albums.forEach((item: any) => {
    const obj = {
      id: item.photographer.id,
      url: item.photographer.avatar[0].url,
      name: item.photographer.name
    };
    if (!output.some(x => x.id === obj.id)) {
      output.push(obj);
    }
  });
  return output;
};

const WorkedWith: React.FC<WorkedWithProps> = ({ modelId }) => {
  const GET_PHOTOGRAPHERS = gql`
    query AlbumsByModelId($modelId: ID!) {
      albums(where: { model: { id_eq: $modelId } }) {
        photographer {
          id
          name
          avatar {
            url
          }
        }
      }
    }
  `;
  const currentTab = useRecoilValue(modelCurrentTabAtom);
  const { loading, error, data } = useQuery(GET_PHOTOGRAPHERS, { variables: { modelId: modelId } });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Could not load albums</div>;
  console.log(data);
  return (
    <ColumnsLayout className={`${currentTab === 'Worked With' ? `` : `hidden`}`}>
      {distinct(data.albums).map((item: PhotographerInfo) => (
        <Portrait key={item.id} imageLink={item.url} personName={item.name} />
      ))}
    </ColumnsLayout>
  );
};

export default WorkedWith;
