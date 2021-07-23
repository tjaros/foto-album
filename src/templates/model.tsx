import { PageProps } from 'gatsby';
import React, { useState } from 'react';
import { Layout } from '../components';
import { Albums, ModelInfo, WorkedWith } from '../components/model';
import Nav, { NavItemData } from '../components/Nav';

enum NavTexts {
  ALBUMS = 'Albums', WORKED_WITH = 'Worked With'
}

const renderSwitch = (tabText: string, id: number) => {
  switch (tabText) {
    case NavTexts.WORKED_WITH:
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
    id, name, age, location, bio, avatar: { url },
    height, eyeColor, hairColor,
    bustLine, waistLine, hipLine
  } = pageContext as PageContextData;

  const [currentTabIdx, changeCurrentTab] = useState(0);
  const navTextItems = [NavTexts.ALBUMS as string, NavTexts.WORKED_WITH];
  const navItems: NavItemData[] = navTextItems.map((text, idx) => ({
    text,
    onClick: () => changeCurrentTab(idx)
  }));

  const stats = {
    age, height, eyeColor, hairColor, bustLine, waistLine, hipLine
  };

  return (
    <Layout className="w-full pb-20 mx-auto max-w-7xl">
      <ModelInfo name={name} avatarLink={url} location={location} description={bio} stats={stats} />
      <Nav navItems={navItems} currentIndex={currentTabIdx} />
      {renderSwitch(navTextItems[currentTabIdx], id)}
    </Layout>
  );
};

export default Model;
