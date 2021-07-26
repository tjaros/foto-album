import { gql } from '@apollo/client';
import { PageProps } from 'gatsby';
import React, { useState } from 'react';
import { Layout } from '../components';
import Albums, { ALBUM_FIELDS } from '../components/Dynamic/AlbumsPreview';
import { WorkedWith } from '../components/Dynamic/Model';
import { Avatar } from '../components/Image';
import Nav, { NavItemData } from '../components/Nav';
import PersonInfo from '../components/Person';
import { SocialMediaLink, SocialMediaType } from '../components/SocialMedia';

const links: SocialMediaLink[] = [
  { url: 'https://instagram.com', type: SocialMediaType.INSTAGRAM },
  { url: 'https://facebook.com', type: SocialMediaType.FACEBOOK },
  { url: 'https://google.com', type: SocialMediaType.WEBSITE }
];

enum NavTexts {
  ALBUMS = 'Albums',
  WORKED_WITH = 'Worked With'
}

const GET_ALBUMS = gql`
  ${ALBUM_FIELDS}
  query AlbumsByModelId($id: ID!) {
    albums(where: { model: { id_eq: $id } }) {
      ...AlbumFields
    }
  }
`;

const renderSwitch = (tabText: string, id: number) => {
  switch (tabText) {
    case NavTexts.WORKED_WITH:
      return <WorkedWith modelId={id} className="px-2 layout--content" />;
    default:
      return (
        <Albums query={GET_ALBUMS} options={{ variables: { id } }} className="layout--content" />
      );
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

  const [currentTabIdx, changeCurrentTab] = useState(0);
  const navTextItems = [NavTexts.ALBUMS as string, NavTexts.WORKED_WITH];
  const navItems: NavItemData[] = navTextItems.map((text, idx) => ({
    text,
    onClick: () => changeCurrentTab(idx)
  }));

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
    <Layout className="container w-full pb-20 mx-auto max-w-7xl">
      <PersonInfo
        name={name}
        avatar={<Avatar name={name} avatarLink={url} />}
        availableLocation={location}
        bio={bio}
        stats={stats}
        socialMediaLinks={links}
        className="layout--add"
      />
      <Nav navItems={navItems} currentIndex={currentTabIdx} />
      {renderSwitch(navTextItems[currentTabIdx], id)}
    </Layout>
  );
};

export default Model;
