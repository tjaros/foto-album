import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from './searchBar';
import UserLogin from './userLogin';

const headerLinks = [
  { description: 'Models', url: '/models' },
  { description: 'Photographers', url: '/photographers' },
];

const Header: React.FC = () => {
  // when on small screens, determines wheter users see hamburger menu or it is expanded
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="sticky top-0 flex flex-wrap items-center justify-between px-2 py-2 bg-black lg:py-4 lg:px-8">
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="px-3 py-2 text-white"
        >
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className="flex items-center text-white">
        <span className="text-xl font-semibold tracking-tight">LOGO</span>
      </div>
      <div className="lg:hidden">
        <SearchBar />
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full lg:flex lg:items-center lg:w-auto space-x-2`}
      >
        <nav className="flex flex-col p-4 lg:items-center lg:p-0 lg:pr-4 lg:flex-row">
          {headerLinks.map(({ description, url }) => (
            <Link
              key={description}
              to={url}
              className="block pt-4 mr-4 text-lg text-white lg:text-2xl lg:inline-block lg:pt-0"
            >
              {description}
            </Link>
          ))}
          <div className="hidden lg:inline-block">
            <SearchBar />
          </div>
          <div className="pt-4 mr-4 lg:pt-0">
            <UserLogin />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;