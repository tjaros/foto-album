import React from 'react';

interface ButtonProps {
  onClick?;
  className?;
}

const Button: React.FC<ButtonProps> = ({ onClick, className = '', children }) => (
  <button
    onClick={onClick}
    type="button"
    className={`h-12 font-bold text-white bg-gray-900 rounded-full hover:bg-gray-800 w-36 ${className}`}
  >
    {children}
  </button>
);

export default Button;
