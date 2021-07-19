import React from 'react';
import LandingSearchBar from './LandingSearchBar';

const LandingPictureMain: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen -mt-12 space-y-16 bg-center bg-cover bg-landingPicture">
    <span className="text-3xl text-white font-secondary md:text-9xl filter drop-shadow">Life is a bitch... so learn to fuck it.</span>
    <LandingSearchBar />
  </div>

);

export default LandingPictureMain;
