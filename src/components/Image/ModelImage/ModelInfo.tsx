import React from 'react';

interface ModelInfoProps {
  modelName: string;
  imageUrl: string;
}

/** Display model information on hover. */
const ModelInfo: React.FC<ModelInfoProps> = ({ modelName, imageUrl }) => (
  <div className="absolute z-10 flex flex-col items-center justify-end w-full h-full transition-all opacity-0 hover:opacity-100 hover:backdrop-filter hover:backdrop-brightness-50">
    <div className="flex items-center w-full p-2 text-white bg-black bg-opacity-60">
      <img className="object-cover w-10 h-10 rounded-full" src={imageUrl} alt={modelName} />
      <span className="px-3 capitalize">{modelName}</span>
    </div>
  </div>
);

export default ModelInfo;
