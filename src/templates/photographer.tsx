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

enum NavTexts {
  ALBUMS = 'Albums',
  REVIEWS = 'Reviews',
  WORKED_WITH = 'Worked With'
}

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
    case NavTexts.REVIEWS:
      return <Reviews photographerId={id} className="pb-8 layout--content" />;
    case NavTexts.WORKED_WITH:
      return <WorkedWith photographerId={id} className="px-2 layout--content" />;
    default:
      return <Albums query={GET_ALBUMS} options={{ variables: { id } }} className="layout--content" />;
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

  const [currentTabIndex, changeCurrentTab] = useState(0);
  const navItems: NavItemData[] = [
    { text: NavTexts.ALBUMS, onClick: () => changeCurrentTab(0) },
    { text: NavTexts.REVIEWS, onClick: () => changeCurrentTab(1), onlyAuthenticated: true },
    { text: NavTexts.WORKED_WITH, onClick: () => changeCurrentTab(2) }
  ];

  return (
    <Layout className="container m-auto max-w-7xl">
      <PersonInfo
        name={name}
        availableLocation={location}
        bio={bio}
        avatar={<Avatar name={name} avatarLink={avatar[0].url} />}
        socialMediaLinks={links}
        className="layout--add"
      />
      <Nav navItems={navItems} currentIndex={currentTabIndex} />
      {renderSwitch(navItems[currentTabIndex].text, id)}
    </Layout>
  );
};

export default Photographer;
