import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

interface LoadMoreHiderProps {
  onClick: React.MouseEventHandler;
}

const LoadMoreHider: React.FC<LoadMoreHiderProps> = ({ onClick }) => (
  <div
    className="absolute bottom-0 z-20 flex flex-row justify-around w-full h-48 divide-gray-500 outline-none md:h-96 bg-gradient-to-b from-transparent to-black">
    <button onClick={onClick} type="button" className="flex flex-col items-center self-center">
      <span className="text-2xl text-white">Show more</span>
      <FaChevronDown className="w-16 h-auto animate-bounce" fill="#FFFFFF" />
    </button>
  </div>
);

export default LoadMoreHider;
