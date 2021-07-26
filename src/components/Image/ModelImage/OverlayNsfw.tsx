import React from 'react';

interface NsfwProps {
  onClick?: () => void;
}

const OverlayNsfw: React.FC<NsfwProps> = ({ onClick }) => (
  <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full backdrop-filter backdrop-blur-md">
    <span className="text-4xl font-bold">NSFW</span>
    <button type="button" className="p-3 px-5 text-2xl text-white bg-black rounded-md" onClick={onClick}>
      Show
    </button>
  </div>
);

export default OverlayNsfw;
