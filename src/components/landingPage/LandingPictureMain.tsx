import React from 'react';
import LandingSearchBar from './LandingSearchBar';

const LandingPictureMain: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-16 min-h-screen bg-landingPicture bg-cover bg-center">
                <span className="font-secondary text-3xl md:text-9xl text-white filter drop-shadow">Life is a bitch... so learn to fuck it.</span>
                <LandingSearchBar />
        </div>

    )
};

export default LandingPictureMain;