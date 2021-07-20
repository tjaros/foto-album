import { Link } from 'gatsby';
import React from 'react';

interface ErrorPros {
  title: string;
  description: string;
  className?: string;
}

const Error: React.FC<ErrorPros> = ({ title, description, className = '' }) => (
  <div className={className}>
    <h1>{title}</h1>
    <p>{description}</p>
    <Link to="/">
      <span>Take me home</span>
    </Link>
  </div>
);

export default Error;
