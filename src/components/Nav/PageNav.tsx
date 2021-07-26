import React, { useState } from 'react';

import { FaTimes, FaCaretDown } from 'react-icons/fa';
import { RecoilState, useRecoilState } from 'recoil';
import { useAuth } from '../../hooks';

export type NavItem = {
  text: string;
  auth?: boolean;
};

interface PageNavProps {
  navItems: NavItem[];
  recoilState: RecoilState<string>;
}

const PageNav: React.FC<PageNavProps> = ({ navItems, recoilState }) => {
  const [currentTab, setCurrentTab] = useRecoilState(recoilState);
  const [isExpanded, setIsExpanded] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <nav className="flex flex-col items-center justify-center w-full my-4 bg-black rounded md:flex-row">
      <div className="flex flex-row items-center w-full pl-4 md:hidden">
        <span className="font-semibold text-white">{currentTab}</span>
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-4 ml-auto text-xl text-white">
          {isExpanded ? <FaTimes /> : <FaCaretDown />}
        </button>
      </div>
      {navItems.map((item) => {
        if (!isLoggedIn && item.auth) return null;
        return (
          <button
            key={item.text}
            className={`text-white md:text-2xl px-4 py-2 md:py-4 w-full md:w-auto md:block ${
              isExpanded ? 'block' : 'hidden'
            }`}
            type="button"
            onClick={() => setCurrentTab(item.text)}>
            {item.text}
          </button>
        );
      })}
    </nav>
  );
};

export default PageNav;
