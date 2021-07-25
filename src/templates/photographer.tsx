import { gql } from '@apollo/client';
import { PageProps } from 'gatsby';
import React, { useState } from 'react';
import { Layout } from '../components';
import Albums, { ALBUM_FIELDS } from '../components/Dynamic/AlbumsPreview';
import { Reviews, WorkedWith } from '../components/Dynamic/Photographer';
import { Avatar } from '../components/Image';
import Nav, { NavItemData } from '../components/Nav';
import PersonInfo from '../components/Person';
import { SocialMediaLink, SocialMediaType } from '../components/SocialMedia';

const links: SocialMediaLink[] = [
  { url: 'https://instagram.com', type: SocialMediaType.INSTAGRAM },
  { url: 'https://facebook.com', type: SocialMediaType.FACEBOOK },
  { url: 'https://google.com', type: SocialMediaType.WEBSITE }
];

const GET_ALBUMS = gql`
  ${ALBUM_FIELDS}
  query AlbumsByPhotographer($id: ID!) {
    albums(where: { photographer: { id_eq: $id } }) {
      ...AlbumFields
    }
  }
`;

const renderSwitch = (state: string, id: number) => {
  switch (state) {
    case 'Reviews':
      return <Reviews photographerId={id} />;
    case 'Worked With':
      return <WorkedWith photographerId={id} />;
    default:
      return <Albums query={GET_ALBUMS} options={{ variables: { id } }} />;
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
  const { name, location, bio, avatar, id } = pageContext as PhotograpgerData;
  const [currentTab, changeTab] = useState('Albums');

  const navItems: NavItemData[] = [
    { text: 'Albums', onClick: () => changeTab('Albums') },
    { text: 'Reviews', onClick: () => changeTab('Reviews'), onlyAuthenticated: true },
    { text: 'Worked With', onClick: () => changeTab('Worked With') }
  ];

  return (
    <Layout className="m-auto max-w-7xl">
      <PersonInfo
        name={name}
        availableLocation={location}
        bio={bio}
        avatar={<Avatar name={name} avatarLink={avatar.url} />}
        socialMediaLinks={links}
      />
      <Nav navItems={navItems} />
      {renderSwitch(currentTab, id)}
    </Layout>
  );
};

export default Photographer;
