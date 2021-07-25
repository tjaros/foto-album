import React from 'react';
import { navigate } from 'gatsby';

interface NonregPanelProps {
  className?: string;
}

const UnregisteredLandingNavPanel: React.FC<NonregPanelProps> = ({ className }) => (
  <div className={`flex w-full py-3 px-2 justify-center gap-3 items-center bg-black md:text-xl text-white ${className}`}>
    <span>Register and get access to exclusive content!</span>
    <button
      className="p-2 text-lg text-black bg-white rounded hover:bg-teal-dark md:px-4 md:py-1 md:mb-0"
      type="submit"
      role="link"
      onClick={() => {
        navigate('/register');
      }}>
      Register
    </button>
  </div>
);

export default UnregisteredLandingNavPanel;
