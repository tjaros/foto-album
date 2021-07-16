import { atom } from 'recoil';
import { AuthUser } from '../utils/auth';

export interface AuthData {
  isLoggedIn: boolean;
  jwt?: string;
  user?: AuthUser
}

export const authentication = atom<AuthData>({
  key: 'authentication',
  default: { isLoggedIn: false },
});
