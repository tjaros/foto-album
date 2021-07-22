import React from 'react';
import SocialMedia, { Orientation, SocialMediaLink } from './SocialMedia';
import AboutMe from '../AboutMe';
import Avatar from '../Avatar';
import Bio from '../Bio';

export interface AuthorProps {
  name: string;
  availableLocation: string;
  bio: string;
  imageLink: string;
  socialMediaLinks: SocialMediaLink[];
}

const AuthorInfo: React.FC<AuthorProps> = ({
  name,
  availableLocation: location,
  bio,
  imageLink,
  socialMediaLinks
}) => (
  <div className="flex flex-col">
    <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
      <AboutMe
        name={name}
        location={location}
        avatar={<Avatar name={name} avatarLink={imageLink} />}
      />
      <SocialMedia links={socialMediaLinks} orientation={Orientation.HORIZONTAL} />
    </div>
    <Bio text={bio} className="pt-4 lg:pt-8" />
  </div>
);

export default AuthorInfo;
