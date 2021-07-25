import React from 'react';

interface BioProps {
  className?: string;
  text: string;
}

const Bio: React.FC<BioProps> = ({ className = '', text }) => (
  <p className={`flex-grow px-2 whitespace-pre-wrap ${className}`}>{text}</p>
);

export default Bio;
