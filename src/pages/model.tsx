import React from 'react';
import { Layout } from '../components';
import {
  Albums, ModelInfo, ModelNav, WorkedWith
} from '../components/model';

const model: React.FC = ({ pageContext }) => {
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
      <Albums modelId={pageContext.id} />
      <WorkedWith modelId={pageContext.id} />
    </Layout>
  );
};

export default model;
