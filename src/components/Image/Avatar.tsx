import React from 'react';

export interface AvatarProps {
  name?: string;
  avatarLink: string;
  className?: string;
}

/**
 * Rounded image of one's profile picture.
 *
 * Use @property className to specify width and height of
 * the avatar. @property name is used as alternative text
 * for the avatar. @property avatarLink is url to the image.
 */
const Avatar: React.FC<AvatarProps> = ({
  name = '',
  avatarLink,
  className = 'w-20 h-20 md:w-32 md:h-32'
}) => (
  <div className={className}>
    <img src={avatarLink} alt={`${name} avatar`} className="object-cover w-full h-full rounded-full" />
  </div>
);

export default Avatar;
