import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => (
  <div className={`flex flex-col w-full h-full text-2xl text-center content-center items-center ${className}`}>
    <FaSpinner className={`animate-spin ${className}`} />
  </div>
);

export default Loader;
