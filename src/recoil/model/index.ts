import { atom } from 'recoil';

const modelCurrentTabAtom = atom({
  key: 'modelCurrentTab',
  default: 'Albums'
});

export default modelCurrentTabAtom;
