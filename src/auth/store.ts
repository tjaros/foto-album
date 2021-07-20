import { atom } from 'recoil';
import { getData, Tokens } from './cookies';

const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: !!getData(Tokens.JWT)
});

export default isLoggedInState;
