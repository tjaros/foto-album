import { PageProps } from 'gatsby';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { Layout } from '../components';
import PageNav from '../components/PageNav';
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

const navItems = ['Photos', 'Reviews', 'Worked With'];

const Photographer: React.FC<PageProps> = ({ pageContext }) => {
  const currentTab = useRecoilValue(photographerCurrentTabAtom);
  return (
    <Layout className="m-auto max-w-7xl">
      <AuthorInfo
        name={pageContext.name}
        availableLocation={pageContext.location}
        bio={pageContext.bio}
        imageLink={pageContext.avatar[0]?.url}
        socialMediaLinks={links}
      />
      <PageNav navItems={navItems} recoilState={photographerCurrentTabAtom} />
      {renderSwitch(currentTab, pageContext.id)}
    </Layout>
  );
};

export default Photographer;
