import React from 'react';

interface PortraitProps {
  imageLink: string;
  personName: string;
}

const Portrait: React.FC<PortraitProps> = ({ imageLink, personName }) => (
  <div className="flex flex-col items-center px-5 pb-4 md:pb-0">
    <div className="flex flex-row">
      <img srcSet={imageLink} alt={personName} className="object-cover rounded-md h-80 w-72" />
    </div>
    <div className="flex flex-row">
      <p className="text-xl font-medium">{personName}</p>
    </div>
  </div>
);

export default Portrait;
