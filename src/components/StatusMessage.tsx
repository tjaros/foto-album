import React from 'react';

interface StatusMessageProps {
  className?: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ children, className = '' }) => (
  <div className={`flex flex-col w-full h-full text-2xl text-center content-center items-center ${className}`}>
    {children}
  </div>
);

export default StatusMessage;
