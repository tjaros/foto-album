import React from 'react';
import AboutMe from '../AboutMe';
import Avatar from '../Avatar';
import Bio from '../Bio';
import Stats, { ModelStats } from './Stats';

export interface ModelInfoProps {
  name: string;
  avatarLink: string;
  location: string;
  description: string;
  stats: ModelStats;
}

const ModelInfo: React.FC<ModelInfoProps> = ({
  name,
  avatarLink,
  location,
  description,
  stats
}) => (
  <div className="flex flex-col">
    <AboutMe
      name={name}
      location={location}
      avatar={<Avatar name={name} avatarLink={avatarLink} />}
    />
    <div className="flex flex-col gap-2 pt-12 text-lg md:flex-row-reverse">
      <Stats stats={stats} className="pb-3 border-b-2 border-black md:border-b-0 md:border-l-4 md:pb-0" />
      <Bio text={description} className="flex flex-col px-4 pb-8 md:pb-0 md:w-4/5 md:pl-0 md:pr-8" />
    </div>
  </div>
);

export default ModelInfo;
