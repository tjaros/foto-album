import { useRecoilState } from 'recoil';
import { storeData, getData, clearData, Tokens } from '../auth/cookies';
import { Auth } from '../auth/models';
import isLoggedInState from '../auth/store';

/** Hook that provides authetication data and methods to log in and out. */
const useAuth = (): Auth => {
  const [isLoggedIn, setLogged] = useRecoilState(isLoggedInState);
  const jwt = getData(Tokens.JWT);
  const user = getData(Tokens.USER);

  const login = () => {
    const loginUrl = `${process.env.STRAPI_BACKEND}/connect/auth0`;
    storeData(Tokens.LAST_LOCATION, window.location.href);
    window.location.replace(loginUrl);
  };

  const logout = () => {
    clearData(Tokens.JWT);
    clearData(Tokens.USER);
    setLogged(false);
  };

  return {
    isLoggedIn: isLoggedIn && !!getData(Tokens.JWT) && !!getData(Tokens.USER),
    jwt: jwt || undefined,
    user: user ? JSON.parse(user) : undefined,
    login,
    logout
  };
};

export default useAuth;
