import React from 'react';

const Image: React.FC = ({
  avatarSrc, src, name, nsfw = false, className
}) => {
  const nsfwAcc = true;

  return (
    <div className="py-1">
      <div className={'relative '.concat(className)}>
        {nsfwAcc && nsfw ? (
          <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full backdrop-filter backdrop-blur-md">
            <span className="text-4xl font-bold">NSFW</span>
            <button type="button" className="p-3 px-5 text-2xl text-white bg-black rounded-md ">
              Show
            </button>
          </div>
        ) : (
          <div className="absolute z-10 flex flex-col items-center justify-end w-full h-full transition-all opacity-0 hover:opacity-100 hover:backdrop-filter hover:backdrop-brightness-50">
            <div className="flex items-center w-full p-2 text-white bg-black bg-opacity-60">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={avatarSrc ?? src}
                alt={name}
              />
              <span className="px-3 capitalize">{name}</span>
            </div>
          </div>
        )}

        <img className="object-cover w-full" src={src} alt={name} />
      </div>
    </div>
  );
};

export default Image;
