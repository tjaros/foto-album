import { PageProps } from 'gatsby';
import React, { useState } from 'react';
import { Layout } from '../components';
import Nav, { NavItemData } from '../components/Nav';
import {
  AuthorInfo, Photos, Reviews, WorkedWith
} from '../components/photographer';
import { SocialMediaLink, SocialMediaType } from '../components/SocialMedia';

const links: SocialMediaLink[] = [
  { url: 'https://instagram.com', type: SocialMediaType.INSTAGRAM },
  { url: 'https://facebook.com', type: SocialMediaType.FACEBOOK },
  { url: 'https://google.com', type: SocialMediaType.WEBSITE }
];

const renderSwitch = (state: string, id: number) => {
  switch (state) {
    case 'Reviews':
      return <Reviews photographerId={id} />;
    case 'Worked With':
      return <WorkedWith photographerId={id} />;
    default:
      return <Photos photographerId={id} />;
  }
};

interface PhotograpgerData {
  id: number;
  name: string;
  location: string;
  bio: string;
  avatar: { url: string }[];
}

const Photographer: React.FC<PageProps> = ({ pageContext }) => {
  const {
    name, location, bio, avatar, id
  } = pageContext as PhotograpgerData;
  const [currentTab, changeTab] = useState('Albums');

  const navItems: NavItemData[] = [
    { text: 'Albums', onClick: () => changeTab('Albums') },
    { text: 'Reviews', onClick: () => changeTab('Reviews'), onlyAuthenticated: true },
    { text: 'Worked With', onClick: () => changeTab('Worked With') }
  ];

  return (
    <Layout className="m-auto max-w-7xl">
      <AuthorInfo
        name={name}
        availableLocation={location}
        bio={bio}
        imageLink={avatar[0]?.url}
        socialMediaLinks={links}
      />
      <Nav navItems={navItems} />
      {renderSwitch(currentTab, id)}
    </Layout>
  );
};

export default Photographer;
