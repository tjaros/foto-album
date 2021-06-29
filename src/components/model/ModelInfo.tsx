import React from 'react';
import Avatar from './Avatar';

export interface ModelStats {
  age: number;
  height: number;
  eyeColor: string;
  hairColor: string;
  bustLine: number;
  waistLine: number;
}

export interface ModelInfoProps {
  name: string;
  avatarLink: string;
  location: string;
  description: string;
  stats: ModelStats;
}

const ModelInfo: React.FC<ModelInfoProps> = ({
  name,
  avatarLink,
  location,
  description,
  stats
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row mt-24 items-center">
        <Avatar name={name} avatarLink={avatarLink} />
        <div className="flex flex-col pt-8 md:ml-10">
          <h1 className="text-5xl">{name}</h1>
          <span className="text-xl pt-1">{location}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-12 text-lg">
        <div className="flex flex-col px-4 pb-8 md:pb-0 md:w-4/5 border-b-4 md:border-b-0 md:border-r-4 border-black md:pl-0 md:pr-8">
          <p>{description}</p>
        </div>
        <div className="flex flex-col px-4 pt-4 md:pt-0">
          <span>
            <b>Age: </b> {stats.age} years
          </span>
          <span>
            <b>Height: </b> {stats.height} cm
          </span>
          <span>
            <b>Eye color: </b> {stats.eyeColor}
          </span>
          <span>
            <b>Hair color: </b> {stats.hairColor}
          </span>
          <span>
            <b>Bust line: </b> {stats.bustLine} cm
          </span>
          <span>
            <b>Waist line: </b> {stats.waistLine} cm
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModelInfo;
