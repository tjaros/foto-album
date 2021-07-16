import React from 'react';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

const UserLogin: React.FC = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const Icon = isLoggedIn ? FaSignOutAlt : FaUser;
  const text = isLoggedIn ? 'Logout' : 'Login';

  console.log('logged:', isLoggedIn);

  return (
    <button type="button" onClick={isLoggedIn ? logout : login} className="flex items-center text-white lg:p-2">
      <Icon title={text} className="hidden lg:block" />
      <span className="block lg:hidden">{text}</span>
    </button>
  );
};

export default UserLogin;
