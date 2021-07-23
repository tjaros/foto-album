import React from 'react';
import SocialMedia, { Orientation, SocialMediaLink } from '../SocialMedia';
import AboutMe from './AboutMe';
import Bio from './Bio';
import Stats, { ModelStats } from './Stats';

export interface PersonInfoProps {
  name: string;
  availableLocation: string;
  bio: string;
  avatar: JSX.Element;
  socialMediaLinks: SocialMediaLink[];
  stats?: ModelStats;
  className?: string;
}

const PersonInfo: React.FC<PersonInfoProps> = ({
  name,
  availableLocation,
  bio,
  avatar,
  socialMediaLinks,
  stats,
  className = ''
}) => (
  <div className={`flex flex-col ${className}`}>
    <div className="flex flex-col items-center justify-between gap-1 md:flex-row">
      <AboutMe name={name} location={availableLocation} avatar={avatar} />
      <SocialMedia links={socialMediaLinks} orientation={Orientation.HORIZONTAL} />
    </div>
    <div className="flex flex-col gap-2 pt-12 text-lg md:flex-row-reverse">
      {stats && (
        <Stats
          stats={stats}
          className="pb-3 border-b-2 border-black md:border-b-0 md:border-l-4 md:pb-0"
        />
      )}
      <Bio text={bio} className="pt-4 lg:pt-8" />
    </div>
  </div>
);

export default PersonInfo;
