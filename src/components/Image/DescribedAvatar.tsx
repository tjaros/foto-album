import React from 'react';
import Avatar, { AvatarProps } from './Avatar';

interface DescribedAvatarProps extends AvatarProps {
  roleAs: string;
}

/** Display role, then avatar and model name in a columns. */
const DescribedAvatar: React.FC<DescribedAvatarProps> = ({
  name,
  roleAs,
  avatarLink,
  className = ''
}) => (
  <div className={`flex flex-col items-center text-black ${className}`}>
    <span className="font-bold">{roleAs}</span>
    <Avatar name={name} avatarLink={avatarLink} className="w-20 h-20" />
    <span>{name}</span>
  </div>
);

export default DescribedAvatar;
