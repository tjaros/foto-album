import { PageProps } from 'gatsby';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Layout } from '../components';
import {
  Albums, ModelInfo, WorkedWith
} from '../components/model';
import PageNav from '../components/PageNav';
import modelCurrentTabAtom from '../recoil/model';

const renderSwitch = (state: string, id: number) => {
  switch (state) {
    case 'Albums':
      return <Albums modelId={id} />;
    case 'Worked With':
      return <WorkedWith modelId={id} />;
    default:
      return <Albums modelId={id} />;
  }
};

const Model: React.FC<PageProps> = ({ pageContext }) => {
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
  const navItems = ['Albums', 'Worked With'];

  return (
    <Layout className="m-auto max-w-7xl">
      <ModelInfo
        name={pageContext.name}
        avatarLink={pageContext.avatar.url}
        location={pageContext.location}
        description={pageContext.bio}
        stats={stats}
      />
      <PageNav navItems={navItems} recoilState={modelCurrentTabAtom} />
      {renderSwitch(currentTab, pageContext.id)}
    </Layout>
  );
};

export default Model;
