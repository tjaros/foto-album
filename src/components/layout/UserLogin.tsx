import React from 'react';
import { FaUser } from 'react-icons/fa';

const UserLogin: React.FC = () => (
  <button
    type="button"
    /* onClick={() => login()} */
    className="flex items-center text-white lg:p-2">
    <FaUser title="I Am The User" className="hidden lg:block" />
    <span className="block lg:hidden">Login</span>
  </button>
);

export default UserLogin;
