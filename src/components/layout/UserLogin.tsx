import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../../hooks';

/**
 * Handle logging in and out. When logged in, always display username and on click,
 * offer option to log out; when not logged in and on small screen, offer login directly.
 */
const UserLogin: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const {
    isLoggedIn, login, logout, user
  } = useAuth();

  const ActionButton: React.FC<{ className: string }> = ({ className }) => (
    <button
      type="button"
      onMouseDown={isLoggedIn ? logout : login}
      className={`min-w-full p-2 pr-2 text-white bg-black border-white text-left lg:text-center ${className}`}>
      <span className="lg:block">{isLoggedIn ? 'Logout' : 'Login'}</span>
    </button>
  );

  return (
    <div onBlur={() => setExpanded(false)} className="relative lg:mx-2">
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className={`items-center ${!isLoggedIn ? 'hidden lg:flex' : 'flex'} text-white lg:p-2`}>
        <FaUser />
        {isLoggedIn && <span className="pl-2">{user?.username}</span>}
      </button>
      {expanded && <ActionButton className={`absolute right-0 ${!isLoggedIn ? 'hidden lg:block' : 'block'} mt-2 border-t`} />}
      {!isLoggedIn && <ActionButton className="pl-0 lg:hidden" />}
    </div>
  );
};

export default UserLogin;
