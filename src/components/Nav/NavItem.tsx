import React from 'react';

/**
 * Text with controls displayed on the page navigation panel.
 *
 * @field text is text displayed. If @field onlyAuthenticated is true,
 * display items iff the user is logged in. @field onClick specifies
 * action to perform when the item is clicked. */
export interface NavItemData {
  text: string;
  onlyAuthenticated?: boolean;
  onClick?: () => void;
}

interface NavItemProps extends NavItemData {
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, onClick, className }) => (
  <button
    key={text}
    className={`text-white md:text-2xl px-4 py-2 md:py-4 w-full md:w-auto md:block ${className}`}
    type="button"
    onClick={onClick}>
    {text}
  </button>
);

export default NavItem;
