import React from 'react';
import { FaCaretDown, FaTimes } from 'react-icons/fa';

interface ExpandButtonProps {
  className?: string;
  isExpanded: boolean;
  onClick: () => void;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({
  className = 'p-4 ml-auto',
  onClick,
  isExpanded
}) => (
  <button type="button" onClick={onClick} className={`text-xl text-white ${className}`}>
    {isExpanded ? <FaTimes /> : <FaCaretDown />}
  </button>
);

export default ExpandButton;
