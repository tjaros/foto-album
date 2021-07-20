import React from 'react';

interface BioProps {
  className?: string;
  text: string;
}

const Bio: React.FC<BioProps> = ({ className, text }) => (
  <p className={className}>{text}</p>
);

export default Bio;