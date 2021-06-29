import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

interface AvatarProps {
  name: string;
  avatarLink: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, avatarLink }) => {
  const [followed, setFollow] = useState(false);

  return (
    <div className="h-60 w-60">
      <img src={avatarLink} alt={`${name} avatar`} className="w-full h-full rounded-full" />
      <button className="relative left-3/4 -top-1/4 w-10 h-10 z-0"
        onClick={() => {
          setFollow(!followed);
        }}>
        {followed ? (
          <FaHeart className="w-full h-full" fill="#B51212" />
        ) : (
          <FaRegHeart className="w-full h-full" fill="#B51212" />
        )}
      </button>
    </div>
  );
};

export default Avatar;
