import { PageProps } from 'gatsby';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Layout } from '../components';
import PageNav, { NavItem } from '../components/PageNav';
import {
  AuthorInfo, Photos, Reviews, WorkedWith
} from '../components/photographer';
import { SocialMediaLink, SocialMediaType } from '../components/photographer/SocialMedia';
import photographerCurrentTabAtom from '../recoil/photographer';

const links: SocialMediaLink[] = [
  { url: 'https://instagram.com', type: SocialMediaType.INSTAGRAM },
  { url: 'https://facebook.com', type: SocialMediaType.FACEBOOK },
  { url: 'https://google.com', type: SocialMediaType.WEBSITE }
];

const renderSwitch = (state: string, id: number) => {
  switch (state) {
    case 'Photos':
      return <Photos photographerId={id} />;
    case 'Reviews':
      return <Reviews photographerId={id} />;
    case 'Worked With':
      return <WorkedWith photographerId={id} />;
    default:
      return <Photos photographerId={id} />;
  }
};

const navItems: NavItem[] = [
  { text: 'Albums' },
  { text: 'Reviews', auth: true },
  { text: 'Worked With' }
];

interface PhotograpgerData {
  id: number;
  name: string;
  location: string;
  bio: string;
  avatar: { url: string }[];
}

const Photographer: React.FC<PageProps> = ({ pageContext }) => {
  const currentTab = useRecoilValue(photographerCurrentTabAtom);
  const { name, location, bio, avatar, id } = pageContext as PhotograpgerData;
  return (
    <Layout className="m-auto max-w-7xl">
      <AuthorInfo
        name={name}
        availableLocation={location}
        bio={bio}
        imageLink={avatar[0]?.url}
        socialMediaLinks={links}
      />
      <PageNav navItems={navItems} recoilState={photographerCurrentTabAtom} />
      {renderSwitch(currentTab, id)}
    </Layout>
  );
};

export default Photographer;
