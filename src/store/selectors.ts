import { selector } from 'recoil';
import { authentication } from './atoms';

export const username = selector({
  key: 'username',
  get: ({ get }) => {
    const auth = get(authentication);
    return auth.user?.username;
  },
});

export const jwt = selector({
  key: 'jwt',
  get: ({ get }) => {
    const auth = get(authentication);
    return auth.jwt;
  },
});

export const isLoggedIn = selector({
  key: 'isLoggedIn',
  get: ({ get }) => {
    const auth = get(authentication);
    return auth.isLoggedIn;
  },
});
