import React from 'react';

interface StatusMessageProps {
  className?: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ children, className = '' }) => (
  <div
    className={`flex flex-col w-full h-72 min-h-full justify-center content-center items-center text-3xl font-bold text-center uppercase ${className}`}>
    {children}
  </div>
);

export default StatusMessage;
