import { useRecoilValue, useSetRecoilState } from 'recoil';
import { clearToken, setLastLocation } from '../auth/cookies';
import { Auth } from '../auth/models';
import { authentication } from '../auth/store';

/** Hook that provides authetication data and methods to log in and out. */
const useAuth = (): Auth => {
  const { isLoggedIn, jwt, user } = useRecoilValue(authentication);
  const setAuthData = useSetRecoilState(authentication);

  const login = () => {
    const loginUrl = `${process.env.STRAPI_BACKEND}/connect/auth0`;
    setLastLocation(window.location.pathname);
    window.location.replace(loginUrl);
  };

  const logout = () => {
    clearToken();
    setAuthData({ isLoggedIn: false, user: undefined, jwt: undefined });
  };

  return {
    isLoggedIn,
    jwt,
    user,
    login,
    logout
  };
};

export default useAuth;
