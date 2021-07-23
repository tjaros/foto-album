import React from 'react';
import RegisterOverlay from './RegisterOverlay';

export interface AlbumCardProps {
  name: string;
  photo: string;
  locked: boolean;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ name, photo, locked }) => (
  <div className={`relative flex flex-col p-2 m-2 ${locked ? 'cursor-not-allowed ' : 'hover:shadow-lg'}`}>
    {locked && <RegisterOverlay />}
    <img
      className="z-20 object-cover w-full transition-all rounded-sm h-96 "
      src={photo}
      alt={`From album: ${name}`}
    />
    <span className="py-2 text-3xl font-medium">{name}</span>
  </div>
);

export default AlbumCard;
