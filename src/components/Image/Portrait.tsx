import React from 'react';

interface PortraitProps {
  imageLink: string;
  personName: string;
  imageClass?: string;
  className?: string;
}

/** Rectangular image of model with model's name and hover effects. */
const Portrait: React.FC<PortraitProps> = ({
  imageLink,
  personName,
  className = '',
  imageClass = 'h-80 w-72'
}) => (
  <div className={`flex flex-col py-2 items-center ${className}`}>
    <div className="flex flex-row transition-all hover:shadow-lg">
      <img
        srcSet={imageLink}
        alt={personName}
        className={`object-cover rounded-sm  ${imageClass}`}
      />
    </div>
    <p className="text-xl font-medium text-center text-black">{personName}</p>
  </div>
);

export default Portrait;
