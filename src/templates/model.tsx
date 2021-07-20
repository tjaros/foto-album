import { PageProps } from 'gatsby';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Layout } from '../components';
import { Albums, ModelInfo, WorkedWith } from '../components/model';
import PageNav, { NavItem } from '../components/PageNav';
import modelCurrentTabAtom from '../recoil/model';

const navItems: NavItem[] = [{ text: 'Albums' }, { text: 'Worked With' }];

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

interface PageContextData {
  id: number;
  name: string;
  avatar: { url: string };
  location: string;
  bio: string;
  age?: number;
  height?: number;
  eyeColor?: string;
  hairColor?: string;
  bustLine?: number;
  waistLine?: number;
  hipLine?: number;
}

const Model: React.FC<PageProps> = ({ pageContext }) => {
  const {
    id,
    name,
    age,
    location,
    bio,
    avatar: { url },
    height,
    eyeColor,
    hairColor,
    bustLine,
    waistLine,
    hipLine
  } = pageContext as PageContextData;
  const currentTab = useRecoilValue(modelCurrentTabAtom);
  const stats = {
    age,
    height,
    eyeColor,
    hairColor,
    bustLine,
    waistLine,
    hipLine
  };

  return (
    <Layout className="w-full pb-20 mx-auto max-w-7xl">
      <ModelInfo name={name} avatarLink={url} location={location} description={bio} stats={stats} />
      <PageNav navItems={navItems} recoilState={modelCurrentTabAtom} />
      {renderSwitch(currentTab, id)}
    </Layout>
  );
};

export default Model;
