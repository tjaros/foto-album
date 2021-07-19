import React from 'react';

interface AboutMeProps {
  name: string;
  location: string;
  avatar: JSX.Element;
  className?: string;
}

const AboutMe: React.FC<AboutMeProps> = ({
  name,
  location,
  avatar,
  className = 'mt-12 md:mt-18 lg:mt-24'
}) => (
  <div className={className}>
    <div className="flex flex-row items-start justify-center gap-2 md:justify-start md:gap-7">
      {avatar}
      <div className="flex flex-col md:ml-4">
        <h1 className="text-2xl font-semibold md:text-5xl">{name}</h1>
        <span className="pt-1 text-gray-900 md:text-xl">{location}</span>
      </div>
    </div>
  </div>
);

export default AboutMe;
