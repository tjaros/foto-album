import React from 'react';
import { FaCaretDown, FaTimes } from 'react-icons/fa';

interface MenuBurgerProps {
  className?: string;
  isExpanded: boolean;
  onClick: () => void;
}

const MenuBurger: React.FC<MenuBurgerProps> = ({
  className = 'p-4 ml-auto',
  onClick,
  isExpanded
}) => (
  <button type="button" onClick={onClick} className={`text-xl text-white ${className}`}>
    {isExpanded ? <FaTimes /> : <FaCaretDown />}
  </button>
);

export default MenuBurger;
