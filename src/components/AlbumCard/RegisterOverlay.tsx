import React from 'react';
import { FaUserLock } from 'react-icons/fa';
import { Link } from 'gatsby';

const RegisterOverlay: React.FC = () => (
  <div className="absolute z-30 flex flex-col items-center justify-center w-full -ml-2 h-96 backdrop-brightness-50 backdrop-filter backdrop-blur-md">
    <FaUserLock className="text-6xl font-bold text-white" />
    <span className="my-5 text-2xl font-bold text-white">Register to view the content</span>
    <Link to="/register" className="p-3 px-5 text-2xl text-white bg-black border-4 border-white rounded-md">
      Register
    </Link>
  </div>
);

export default RegisterOverlay;
