import React from 'react';

const RegisteredLandingNavPanel: React.FC = () => (
  <nav className="md:mr-4 md:ml-4 my-4 md:my-10 h-8 md:h-14 flex flex-row space-x-2 md:space-x-12 justify-center items-center bg-black text-ms md:text-xl text-white">
    <a className="text-white" href="#trending">Trending</a>
    <a className="text-white" href="#recent">Recent</a>
    <a className="text-white" href="#new">New</a>
  </nav>
);

export default RegisteredLandingNavPanel;
