import React from 'react';

interface ProfilePictureProps {
  name: string;
  imageLink: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  name,
  imageLink,
}: ProfilePictureProps) => (
  <div className="h-60 w-60">
    <img srcSet={imageLink} alt={`${name}'s profile`} className="w-full h-full rounded-full" />
  </div>
);

export default ProfilePicture;
