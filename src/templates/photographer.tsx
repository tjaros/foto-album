import React from 'react';
import { useRecoilValue } from 'recoil';
import { Layout } from '../components';
import {
  AuthorInfo, AuthorPageNav, Photos, Reviews, WorkedWith
} from '../components/photographer';
import { SocialMediaLink, SocialMediaType } from '../components/photographer/SocialMedia';
import photographerCurrentTabAtom from '../recoil/photographer';

const links: SocialMediaLink[] = [
  { url: 'https://instagram.com', type: SocialMediaType.INSTAGRAM },
  { url: 'https://facebook.com', type: SocialMediaType.FACEBOOK },
  { url: 'https://google.com', type: SocialMediaType.WEBSITE }
];

const renderSwitch = (state, id) => {
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

const Photographer: React.FC = ({ pageContext }) => {
  const currentTab = useRecoilValue(photographerCurrentTabAtom);
  return (
    <Layout>
      <div className="flex flex-col items-center px-8 py-12">
        <AuthorInfo
          name={pageContext.name}
          location={pageContext.location}
          bio={pageContext.bio}
          imageLink={pageContext.avatar[0]?.url}
          socialMediaLinks={links}
        />
        <AuthorPageNav />
        {renderSwitch(currentTab, pageContext.id)}
      </div>
    </Layout>
  );
};

export default Photographer;
