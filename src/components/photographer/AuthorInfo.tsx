import React from 'react';

import ProfilePicture from './ProfilePicture';
import Button from './Button';
import SocialMedia, { SocialMediaLink } from './SocialMedia';

interface AuthorProps {
  name: string;
  location: string;
  bio: string;
  imageLink: string;
  socialMediaLinks: SocialMediaLink[];
}

const AuthorInfo: React.FC<AuthorProps> = ({
  name,
  location,
  bio,
  imageLink,
  socialMediaLinks,
}) => (
  <div className="flex flex-col md:flex-row">
    <div className="flex flex-col items-center gap-1">
      <ProfilePicture name={name} imageLink={imageLink} />
      <Button className="mt-8">Follow me!</Button>
      <Button>Contact me!</Button>
    </div>
    <div className="flex flex-col pt-16 md:pt-2 md:pl-8 md:pr-16">
      <h1 className="self-center text-4xl font-bold md:self-start">{name}</h1>
      <div className="flex flex-col pt-6 md:flex-row md:pt-3">
        <span className="flex flex-col text-xl font-bold align-bottom md:px-4">Available:</span>
        <p className="flex flex-col text-xl align-bottom">{location}</p>
      </div>
      <div className="flex flex-col pt-4 md:flex-row md:pt-2">
        <span className="flex flex-col text-xl font-bold align-bottom md:px-4">About Me:</span>
        <p className="flex flex-col max-w-xl text-xl align-bottom">{bio}</p>
      </div>
    </div>
    <div className="flex flex-col pt-6">
      <SocialMedia links={socialMediaLinks} />
    </div>
  </div>
);

export default AuthorInfo;
