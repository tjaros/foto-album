import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar, { SearchIcon } from './SearchBar';
import UserLogin from './UserLogin';
import { Logo } from '../Image';

const headerLinks = [
  { description: 'Models', url: '/categories' },
  { description: 'Photographers', url: '/photographers' }
];

interface HeaderProps {
  showSearchbar?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showSearchbar = true }) => {
  // when on small screens, determines wheter users see hamburger menu or it is expanded
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <header className="sticky top-0 z-30 flex flex-wrap items-center justify-between px-2 py-2 bg-black lg:py-4 lg:px-8">
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => toggleExpansion(!isExpanded)}
          className="px-3 py-2 text-white">
          {isExpanded ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <Link to="/" className="flex items-center text-white">
        <Logo style={{ height: 'calc(1em + 1rem)' }} />
      </Link>
      {showSearchbar && (
        <Link to="/search" className="items-center px-3 py-2 text-white no-underline lg:hidden">
          <SearchIcon title="Go to search" />
        </Link>
      )}
      <div
        className={`${
          isExpanded ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto space-x-2`}>
        <nav className="flex flex-col p-4 lg:items-center lg:p-0 lg:pr-4 lg:flex-row">
          {headerLinks.map(({ description, url }) => (
            <Link
              key={description}
              to={url}
              className="block pt-4 mr-4 text-lg text-white lg:text-2xl lg:inline-block lg:pt-0">
              {description}
            </Link>
          ))}
          {showSearchbar && <SearchBar className="hidden lg:inline-block" />}
          <div className="pt-4 mr-4 lg:pt-0">
            <UserLogin />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
