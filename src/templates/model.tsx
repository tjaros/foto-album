import React from 'react';
import { useRecoilValue } from 'recoil';
import { Layout } from '../components';
import {
  Albums, ModelInfo, ModelNav, WorkedWith
} from '../components/model';
import modelCurrentTabAtom from '../recoil/model';

const renderSwitch = (state, id) => {
  switch (state) {
    case 'Albums':
      return <Albums modelId={id} />;
    case 'Worked With':
      return <WorkedWith modelId={id} />;
    default:
      return <Albums modelId={id} />;
  }
};
const model: React.FC = ({ pageContext }) => {
  const currentTab = useRecoilValue(modelCurrentTabAtom);
  const stats = {
    age: pageContext.age,
    height: pageContext.height,
    eyeColor: pageContext.eyeColor,
    hairColor: pageContext.hairColor,
    bustLine: pageContext.bustLine,
    waistLine: pageContext.waistLine,
    hipLine: pageContext.hipLine
  };
  return (
    <Layout>
      <ModelInfo
        name={pageContext.name}
        avatarLink={pageContext.avatar.url}
        location={pageContext.location}
        description={pageContext.bio}
        stats={stats}
      />
      <ModelNav />
      {renderSwitch(currentTab, pageContext.id)}
    </Layout>
  );
};

export default model;
