import { atom } from 'recoil';
import { AuthData } from './models';

/** Carries authentication state. */
export const authentication = atom<AuthData>({
  key: 'authentication',
  default: { isLoggedIn: false }
});

export default authentication;
