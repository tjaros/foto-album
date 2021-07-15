import React from 'react';
import { Layout } from '../components';
import AuthorInfo from '../components/photographer/AuthorInfo';
import AuthorPageNav from '../components/photographer/AuthorPageNav';
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
      <div className="flex flex-col">
        {
          // TODO Content
        }
      </div>
    </div>
  </Layout>
);

export default Photographer;
