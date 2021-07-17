import React from 'react';
import { Layout } from '../components';
import { AuthorInfo, AuthorPageNav, Photos } from '../components/photographer';
import { SocialMediaLink, SocialMediaType } from '../components/photographer/SocialMedia';

const links: SocialMediaLink[] = [
  { url: 'https://instagram.com', type: SocialMediaType.INSTAGRAM },
  { url: 'https://facebook.com', type: SocialMediaType.FACEBOOK },
  { url: 'https://google.com', type: SocialMediaType.WEBSITE }];

const Photographer: React.FC = ({ pageContext }) => (
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
      <Photos photographerId={pageContext.id} />
    </div>
  </Layout>
);

export default Photographer;
