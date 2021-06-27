import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = ['Photos', 'Advertising', 'Reviews', 'Worked With'];

const AuthorPageNav: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <nav className="flex flex-col items-center justify-center w-full mt-20 bg-black rounded md:flex-row md:h-16">
      <div className="md:hidden ">
        <button type="button" onClick={() => setIsExpanded(!isExpanded)} className="p-4 text-2xl text-white">
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {navItems.map((item) => (
        <a
          className={`text-2xl text-white px-4 pb-1 md:pb-0 md:block ${
            isExpanded ? 'block' : 'hidden'
          }`}
          href={item}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default AuthorPageNav;
