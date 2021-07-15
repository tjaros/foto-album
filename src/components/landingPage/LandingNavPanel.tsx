import React from 'react';

export const LandingNavPanel: React.FC = () => {
    return (
        <nav className="my-10 h-14 flex flex-row space-x-10 justify-center items-center bg-black text-2xl text-white">
            <a className="text-white" href="#">Trending</a>
            <a className="text-white" href="#">Recent</a>
            <a className="text-white" href="#">New</a>
            <a className="text-white" href="#">Subscriptions</a>

        </nav>
    )
}