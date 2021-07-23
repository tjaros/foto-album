import { Link } from 'gatsby';
import React from 'react';
import Avatar, { AvatarProps } from './Avatar';

interface DescribedAvatarProps extends AvatarProps {
  roleAs: string;
  slug: string;
}

const DescribedAvatar: React.FC<DescribedAvatarProps> = ({
  name,
  roleAs,
  avatarLink,
  className = '',
  slug
}) => (
  <Link to={slug} className="text-black">
    <div className={`flex flex-col items-center ${className}`}>
      <span className="font-bold">{roleAs}</span>
      <Avatar name={name} avatarLink={avatarLink} className="w-20 h-20" />
      <span>{name}</span>
    </div>
  </Link>
);

export default DescribedAvatar;
