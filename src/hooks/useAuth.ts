import { atom, useRecoilValue, useSetRecoilState } from 'recoil';
import { clearToken } from '../utils/auth';

/** The user data as returned from strapi auth. */
export interface AuthUser {
  id: number;
  blocked: boolean;
  confitmed: boolean;
  email: string;
  username: string;
}

/** Data stored in authentication state. */
interface AuthData {
  isLoggedIn: boolean;
  jwt?: string;
  user?: AuthUser
}

/** Carries authentication state. */
export const authentication = atom<AuthData>({
  key: 'authentication',
  default: { isLoggedIn: false },
});

/** Authentiation data. */
export interface Auth {
  isLoggedIn: boolean;
  jwt?: string;
  user?: AuthUser;
  login: () => void;
  logout: () => void;
}

/** Hook that provides authetication data and methods to log in and out. */
export const useAuth = (): Auth => {
  const { isLoggedIn, jwt, user } = useRecoilValue(authentication);
  const setAuthData = useSetRecoilState(authentication);

  const login = () => {
    console.log('Log in');
    const loginUrl = `${process.env.STRAPI_BACKEND}/connect/auth0`;
    window.location.replace(loginUrl);
  };

  const logout = () => {
    console.log('Logging out');
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
