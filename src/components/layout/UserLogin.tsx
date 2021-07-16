import React from 'react';
import { FaUser } from 'react-icons/fa';
import { authData, isLoggedIn, loginUrl, logout } from '../../utils/auth';

const UserLogin: React.FC = () => {
  if (isLoggedIn()) {
    const { username } = authData();
    return (
      <button
        type="button"
        onClick={() => logout()}
        className="flex items-center text-white lg:p-2">
        <FaUser title={username!} className="hidden lg:block" />
        <span className="block lg:hidden">Logout</span>
      </button>
    );
  }
  return (
    <a
      href={loginUrl}
      className="flex items-center text-white lg:p-2">
      <FaUser className="hidden lg:block" />
      <span className="block lg:hidden">Login</span>
    </a>
  );
};

export default UserLogin;
