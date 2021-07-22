import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface LoadMoreHiderProps {
  onClick: React.MouseEventHandler;
}

const LoadMoreHider: React.FC<LoadMoreHiderProps> = ({ onClick }) => (
  <div
    className="flex flex-row w-full h-48 md:h-96 z-40 absolute bottom-0 bg-gradient-to-b from-transparent divide-gray-500
            to-black justify-around outline-none">
    <button onClick={onClick} type="button" className="flex flex-col self-center items-center">
      <span className="text-2xl text-white">Show more</span>
      <FaChevronDown className="w-16 h-auto animate-bounce" fill="#FFFFFF" />
    </button>
  </div>
);

export default LoadMoreHider;
