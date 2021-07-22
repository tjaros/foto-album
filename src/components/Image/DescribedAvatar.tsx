import { Link } from 'gatsby';
import React from 'react';
import Avatar, { AvatarProps } from '../Avatar';

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
      <p className="font-bold text-center">{roleAs}</p>
      <Avatar name={name} avatarLink={avatarLink} className="w-20 h-20" />
      <p className="text-center">{name}</p>
    </div>
  </Link>
);

export default DescribedAvatar;
