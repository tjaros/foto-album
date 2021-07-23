import React, { useState } from 'react';
import { useAuth } from '../../hooks';
import ExpandButton from './ExpandButton';
import NavItem, { NavItemData } from './NavItem';

/**
 * Params for navigation panel.
 *
 * @field navItems is list of items to show. @field currentIndex points
 * to the item that is currently selected (first item if not specified).
 * @field className adds classes to outer container.
 *
 * If user is not logged in and @field currentIndex points to only auth
 * item, no item is currently selected.
 *
 * Text in @field navItems is expected to be unique and is used as key.
 */
interface NavProps {
  navItems: NavItemData[];
  currentIndex?: number;
  className?: string;
}

/**
 * In-page navigation that uses buttons to switch content.
 *
 * Displays items in a row on large screens and uses pick menu on small
 * screens.
 */
const Nav: React.FC<NavProps> = ({ navItems, currentIndex = 0, className = '' }) => {
  const [isMobileExpanded, setIsExpanded] = useState(false);
  const { isLoggedIn } = useAuth();
  const shownItems = navItems.filter(({ onlyAuthenticated }) => !onlyAuthenticated || isLoggedIn);
  const currentItem = navItems[currentIndex];
  const showCurrent = isLoggedIn || !currentItem.onlyAuthenticated;

  return (
    <nav
      className={`flex flex-col items-center justify-center w-full bg-black rounded md:flex-row ${className}`}>
      <div className="flex flex-row items-center w-full pl-4 md:hidden">
        {showCurrent && <span className="font-semibold text-white">{currentItem.text}</span>}
        <ExpandButton isExpanded={isMobileExpanded} onClick={() => setIsExpanded((old) => !old)} />
      </div>
      {shownItems.map((item) => (
        /* eslint-disable-next-line react/jsx-props-no-spreading */
        <NavItem key={item.text} {...item} className={isMobileExpanded ? 'block' : 'hidden'} />
      ))}
    </nav>
  );
};

export { NavItemData };
export default Nav;
