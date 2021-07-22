import { Link } from 'gatsby';
import React from 'react';

interface ErrorProps {
  title: string;
  description: string;
  className?: string;
}

const Error: React.FC<ErrorProps> = ({ title, description, className = '' }) => (
  <div className={`flex flex-col items-center my-20 ${className}`}>
    <h1 className="pb-6 text-xl font-bold md:text-3xl lg:text-5xl">{title}</h1>
    <p className="md:text-lg">{description}</p>
    <Link to="/" className="btn-white">
      <span className="text-base md:text-lg">Take me home</span>
    </Link>
  </div>
);

export default Error;
